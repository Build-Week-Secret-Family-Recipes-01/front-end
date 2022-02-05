import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import axios from "axios";

import "./AddRecipe.css";
import useRecipes from "../../hooks/useRecipes";

const AddRecipe = (props) => {
  console.log(props);
  const { push } = useHistory();
  const [recipes, setRecipes, searchTerm, setSearchTerm] = useRecipes([]);

  // console.log('131313123', props[0])

  const existing = props.location.state.existing;
  console.log("exiting", existing);

  const initialState = existing
    ? existing
    : {
        user_id: 1,
        title: "",
        source: "",
        description: "",
        categories: [], // ["Vegetarian", "Lunch"],
        steps: [], // { step_number: 1, step_text: "toast your bread" }, ...
        ingredients: [], // { quantity: "2 slices", ingredient_name: "whole wheat bread" }, ...
      };

  console.log(initialState);

  const [recipe, setRecipe] = useState(initialState);

  const [error, setError] = useState("");

  const handleChange = (e) => {
    console.log(e);
    setRecipe({
      ...recipe,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("user_id");
    const newRecipeData = { ...recipe, user_id: userId };

    // console.log(recipe);

    const operation = existing
      ? axios.put(
          `https://secret-family-recipes-01.herokuapp.com/api/recipes/${existing.recipe_id}`,
          newRecipeData,
          { headers: { Authorization: token } }
        )
      : axios.post(
          `https://secret-family-recipes-01.herokuapp.com/api/recipes/`,
          newRecipeData,
          { headers: { Authorization: token } }
        );

    operation
      .then((res) => {
        console.log(res);
        setRecipes([...recipes, res.data]);
        push(`/`);
      })
      .catch((err) => {
        console.log(err);
        setError({ errorMessage: err.toString() });
      });
  };

  const handleItemChange = (fieldName, i, e) => {
    // console.log(e);
    const newItem = {
      ...recipe[fieldName][i],
      [e.target.name]: e.target.value,
    };
    // console.log(newItem)
    let newItems = recipe[fieldName];
    newItems.splice(i, 1, newItem);
    setRecipe({
      ...recipe,
      [fieldName]: newItems,
    });
  };

  const addItemClick = (fieldName, newItemCallback) => {
    setRecipe({
      ...recipe,
      [fieldName]: [...recipe[fieldName], newItemCallback(recipe[fieldName])],
    });
  };

  const removeItemClick = (fieldName, i) => {
    let newItems = recipe[fieldName];
    newItems.splice(i, 1);
    setRecipe({
      ...recipe,
      [fieldName]: newItems,
    });
  };

  function createIngredientsInputs() {
    return recipe.ingredients.map((ingredient, i) => (
      <div className="recipe-line" key={i}>
        <input
          className="ingredient"
          type="text"
          name="ingredient_name"
          placeholder="Describe ingredient"
          onChange={(args) => handleItemChange("ingredients", i, args)}
          value={ingredient.ingredient_name}
        />
        <input
          className="quantity"
          type="number"
          name="quantity"
          placeholder="Quantity"
          onChange={(args) => handleItemChange("ingredients", i, args)}
          value={ingredient.quantity}
        />
        <div
          className="recipe-button"
          onClick={() => removeItemClick("ingredients", i)}
        >
          Remove
        </div>
      </div>
    ));
  }

  function createStepsInputs() {
    // { step_number: 1, step_text: "toast your bread" },
    return recipe.steps.map((step, i) => (
      <div className="recipe-line" key={i}>
        <div className="recipe-line-number" name="step_number" value={i + 1}>
          {i + 1}
        </div>
        <input
          className="ingredient"
          type="text"
          name="step_text"
          placeholder="Describe step"
          onChange={(args) => handleItemChange("steps", i, args)}
          value={step.step_text}
        />
        <div
          className="recipe-button"
          onClick={() => removeItemClick("steps", i)}
        >
          Remove
        </div>
      </div>
    ));
  }

  function createCategoriesInputs() {
    // ["Vegetarian", "Lunch"]
    const handleChange = (fieldName, i, e) => {
      // console.log(e);
      const newItem = e.target.value;
      // console.log(newItem);
      let newItems = recipe[fieldName];
      newItems.splice(i, 1, newItem);
      setRecipe({
        ...recipe,
        [fieldName]: newItems,
      });
    };

    return recipe.categories.map((category, i) => (
      <div className="recipe-line" key={i}>
        <div className="recipe-line-number" name="number" value={i + 1}>
          {i + 1}
        </div>
        <input
          className="ingredient"
          type="text"
          placeholder="Describe category"
          onChange={(args) => handleChange("categories", i, args)}
          value={category}
        />
        <div
          className="recipe-button"
          onClick={() => removeItemClick("categories", i)}
        >
          Remove
        </div>
      </div>
    ));
  }

  return (
    <div className="top-of-page">
      <div className="signup-page-container">
        <h1>Add Recipe</h1>
        <div>
          <form onSubmit={handleSubmit}>
            <strong>Recipe Title:</strong>
            <input
              id="title"
              type="text"
              name="title"
              placeholder="Recipe Title"
              onChange={handleChange}
              value={recipe.title}
            />
            <br />
            <strong>Source:</strong>
            <input
              id="source"
              type="text"
              name="source"
              placeholder="Source"
              onChange={handleChange}
              value={recipe.source}
            />

            <br />
            <strong>Ingredients:</strong>
            {createIngredientsInputs()}
            <br />
            <div
              className="recipe-button"
              onClick={() =>
                addItemClick("ingredients", (items) => {
                  return { quantity: 0, ingredient_name: "" };
                })
              }
            >
              Add Ingredient
            </div>

            <br />
            <strong>Steps:</strong>
            <br />
            {createStepsInputs()}
            <br />
            <div
              className="recipe-button"
              onClick={() =>
                addItemClick("steps", (items) => {
                  return { step_number: items.length + 1, step_text: "" };
                })
              }
            >
              Add Step
            </div>

            <br />
            <strong>Categories:</strong>
            <br />
            {createCategoriesInputs()}
            <br />
            <div
              className="recipe-button"
              onClick={() =>
                addItemClick("categories", (items) => {
                  return "";
                })
              }
            >
              Add Category
            </div>

            <br />
            <br />
            <button id="submit">
              {existing ? "Update Recipe" : "Add Recipe"}
            </button>
          </form>
          <p id="error">{error.errorMessage}</p>
        </div>
      </div>
    </div>
  );
};

export default AddRecipe;
