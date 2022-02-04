import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./App.css";

import RecipeItem from "./components/recipeItem/RecipeItem";
import axios from "axios";
import useRecipes from "./hooks/useRecipes";

const App = () => {
  const { push } = useHistory();
  const [auth, setAuth] = useState(false);
  const [recipes, setRecipes, searchTerm, setSearchTerm] = useRecipes([]);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setAuth(true);
    } else {
      setAuth(false);
    }
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(`https://secret-family-recipes-01.herokuapp.com/api/recipes`, {
        headers: { Authorization: token }
      })
      .then(res => Object.values(res.data).map((x) => x.recipe_id))
      .then(ids => {
        const all = ids.map(id => axios
          .get(
            `https://secret-family-recipes-01.herokuapp.com/api/recipes/${id}`,
            { headers: { Authorization: token } }
          ));
        return Promise.all(all)
      })
      .then(allResponses => {
        const allRecipes = allResponses.map(resp => resp.data);
        console.log(allRecipes)
        setRecipes(allRecipes)
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleDelete = (recipeId) => {
    const token = localStorage.getItem("token");
    axios
      .delete(`https://secret-family-recipes-01.herokuapp.com/api/recipes/${recipeId}`, {
        headers: { Authorization: token }
      })
      .then(res => {
        console.log(res);
        const newState = recipes.filter(item=>(item.recipe_id !== recipeId));
        setRecipes(newState)
      })
  }

  const handleSearchChange = (e) => {
    e.preventDefault();
    const term = e.target.value.toLowerCase();
    const filtered = recipes.filter((item) => {
      return item.title.toLowerCase().includes(term) || item.categories.map(c => c.toLowerCase()).includes(term);
    });

    setSearchTerm(filtered);
  };

  return (
    <section className="app">
      {auth ? (
        <div>
          <div className="search-container">
            <p>Find your secret recipes.</p>
            <form>
              <input
                onChange={handleSearchChange}
                className="search-bar"
                type="text"
                name="search"
                id="search"
                placeholder="Start typing to find recipe"
              />
            </form>
          </div>
          <div className="recipe-buttons">
            <div className='recipe-button' onClick={() => push('add')}>Add Recipe</div>
          </div>
          <div className="recipe-wrapper">
            {searchTerm.map((item) => {
              return <RecipeItem key={item.recipe_id} recipe={item} handleDelete={handleDelete} />;
            })}
          </div>
        </div>
      ) : (
        <div className="home-message"> 
          <div className="home-message-text">
          <h2><em>Welcome!</em></h2>
          <p><em>Discover favorite recipes from your friends at BloomTech and share some secrets of your own!</em></p>
          <a href='./login'><em>Log In To Start Your Culinary Masterpiece</em></a>
          </div>
        </div>
      )}
    </section>
  );
};

export default App;
