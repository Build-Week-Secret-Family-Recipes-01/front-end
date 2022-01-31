import React from 'react';

import './RecipeItem.css';

const RecipeItem = (props) => {
    const { recipe } = props;
    return (
        <div className='recipe-container'>
            <p className='recipe-title'>{recipe.title}</p>
            <p className='rounded-text'>
                <strong>Category: </strong>
                {recipe.category}
            </p>
            <p className='rounded-text'>
                <strong>Serves: </strong>
                {recipe.servings}
            </p>
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
            <p className='rounded-text'>
                <strong>Source: </strong>
                {recipe.source}
            </p>
        </div>
    );
};

export default RecipeItem;
