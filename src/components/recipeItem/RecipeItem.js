import React from 'react';

import './RecipeItem.css';

const RecipeItem = (props) => {
    const { recipe } = props;
    return (
        <div className='recipe-container'>
            <div className='recipe-top'>
                <div className='recipe-title'>{recipe.title}</div>
                <div className='recipe-categories'>
                    {recipe.categories.map((item) => {
                        return <p className='rounded-text'>{item}</p>;
                    })}
                </div>
            </div>
            <div className='recipe-bottom'>
                <strong>Source: </strong>
                {recipe.source}
                <br />

                <strong>Serves: </strong>
                {recipe.servings}
                <p>Ingredients:</p>
                <ul>
                    {recipe.ingredients.map((ingredient) => {
                        return <li>{ingredient}</li>;
                    })}
                </ul>

                <p>Instructions:</p>
                <ol>
                    {recipe.instructions.map((instructions) => {
                        return <li>{instructions}</li>;
                    })}
                </ol>
            </div>
        </div>
    );
};

export default RecipeItem;
