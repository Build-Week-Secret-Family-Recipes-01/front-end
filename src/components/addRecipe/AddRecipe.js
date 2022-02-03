import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';

import './AddRecipe.css';

const AddRecipe = () => {
    const { push } = useHistory();

    const [initialRecipe, setInitialRecipe] = useState({
        title: '',
        image: '',
        ingredients: [
            {
                quantity: '',
                ingredient: ''
            },
            {
                quantity: '',
                ingredient: ''
            },
            {
                quantity: '',
                ingredient: ''
            },
            {
                quantity: '',
                ingredient: ''
            },
            {
                quantity: '',
                ingredient: ''
            },
            {
                quantity: '',
                ingredient: ''
            },
        ],
        steps: ['', '', '', '', '', ''],
        source: '',
    });

    const ingred = initialRecipe.ingredients

    const [error, setError] = useState('');

    const handleChange = () => {};

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className='top-of-page'>
            <div className='signup-page-container'>
                <h1>Add Recipe</h1>
                <div>
                    <form onSubmit={handleSubmit}>
                        <strong>Recipe Title:</strong>
                        <input id='title' type='text' name='title' placeholder='Recipe Title' onChange={handleChange} value={initialRecipe.title} />
                        <strong>Image:</strong>
                        <input id='image' type='file' name='image' placeholder='Image' onChange={handleChange} value={initialRecipe.image} />
                        <strong>Ingredients:</strong><br />
                            <input className='quantity' id='ingredients' type='text' name='ingredients' placeholder='Quantity' onChange={handleChange} value={ingred[0].quantity} />
                            <input className='ingredient' id='ingredients' type='text' name='ingredients' placeholder='Ingredient 1' onChange={handleChange} value={ingred[0].ingredient} />
                            <input className='quantity' id='ingredients' type='text' name='ingredients' placeholder='Quantity' onChange={handleChange} value={ingred[1].quantity} />
                            <input className='ingredient' id='ingredients' type='text' name='ingredients' placeholder='Ingredient 2' onChange={handleChange} value={ingred[1].ingredient} />
                            <input className='quantity' id='ingredients' type='text' name='ingredients' placeholder='Quantity' onChange={handleChange} value={ingred[2].quantity} />
                            <input className='ingredient' id='ingredients' type='text' name='ingredients' placeholder='Ingredient 3' onChange={handleChange} value={ingred[2].ingredient} />
                            <input className='quantity' id='ingredients' type='text' name='ingredients' placeholder='Quantity' onChange={handleChange} value={ingred[3].quantity} />
                            <input className='ingredient' id='ingredients' type='text' name='ingredients' placeholder='Ingredient 4' onChange={handleChange} value={ingred[3].ingredient} />
                            <input className='quantity' id='ingredients' type='text' name='ingredients' placeholder='Quantity' onChange={handleChange} value={ingred[4].quantity} />
                            <input className='ingredient' id='ingredients' type='text' name='ingredients' placeholder='Ingredient 5' onChange={handleChange} value={ingred[4].ingredient} />
                            <input className='quantity' id='ingredients' type='text' name='ingredients' placeholder='Quantity' onChange={handleChange} value={ingred[5].quantity} />
                            <input className='ingredient' id='ingredients' type='text' name='ingredients' placeholder='Ingredient 6' onChange={handleChange} value={ingred[5].ingredient} />

                        <strong>Steps:</strong>
                        <input className='step' id='step' type='text' name='step' placeholder='Step 1' onChange={handleChange} value={initialRecipe.steps[0]} />
                        <input className='step' id='step' type='text' name='step' placeholder='Step 2' onChange={handleChange} value={initialRecipe.steps[1]} />
                        <input className='step' id='step' type='text' name='step' placeholder='Step 3' onChange={handleChange} value={initialRecipe.steps[2]} />
                        <input className='step' id='step' type='text' name='step' placeholder='Step 4' onChange={handleChange} value={initialRecipe.steps[3]} />
                        <input className='step' id='step' type='text' name='step' placeholder='Step 5' onChange={handleChange} value={initialRecipe.steps[4]} />
                        <input className='step' id='step' type='text' name='step' placeholder='Step 6' onChange={handleChange} value={initialRecipe.steps[5]} />

                        <strong>Source:</strong>
                        <input id='source' type='text' name='source' placeholder='Source' onChange={handleChange} value={initialRecipe.source} />

                        <button id='submit'>Add Recipe</button>
                    </form>
                    <p id='error'>{error.errorMessage}</p>
                </div>
            </div>
        </div>
    );
};

export default AddRecipe;
