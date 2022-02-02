import React from 'react';

import './RecipeItem.css';

const RecipeItem = (props) => {
    const { recipe } = props;

    return (
        <div className='recipe-container'>
            <div className='recipe-top'>
                <div className='recipe-title'>
                    {recipe.title}
                </div>
                <div className='recipe-categories'>
                    {recipe.categories.map((item, index) => {
                        return <p key={index} className='rounded-text'>{item}</p>;
                    })}
                </div>
            </div>
            <div className='recipe-bottom'>
                <strong>Source: </strong>
                {recipe.source}
                <br />

                <strong>Serves: </strong>
                {recipe.servings}
                <p><strong>Ingredients:</strong></p>
                <ul>
                    {recipe.ingredients.map((ingredient, index) => {
                        return <li key={index}>{ingredient}</li>;
                    })}
                </ul>

                <p><strong>Instructions:</strong></p>
                <ol>
                    {recipe.instructions.map((instructions, index) => {
                        return <li key={index}>{instructions}</li>;
                    })}
                </ol>
            </div>
        </div>
    );
};

export default RecipeItem;
