import React from 'react';
import './App.css';

import RecipeItem from './components/recipeItem/RecipeItem';

import './assets/search-background.jpg';

const App = () => {
    const loggedIn = true;
    const recipes = [
        {
            id: 1,
            title: 'Cake',
            source: 'Grandma',
            ingredients: ['2 cups flour', '2 eggs', '1 cup sugar'],
            instructions: ['Preheat oven', 'mix ingredients', 'Bake at 225 degrees'],
            category: 'Baked goods',
            servings: 4,
        },
        {
            id: 1,
            title: 'Cake',
            source: 'Grandma',
            ingredients: ['2 cups flour', '2 eggs', '1 cup sugar'],
            instructions: ['Preheat oven', 'mix ingredients', 'Bake at 225 degrees'],
            category: 'Baked goods',
            servings: 4,
        },
        {
            id: 1,
            title: 'Cake',
            source: 'Grandma',
            ingredients: ['2 cups flour', '2 eggs', '1 cup sugar'],
            instructions: ['Preheat oven', 'mix ingredients', 'Bake at 225 degrees'],
            category: 'Baked goods',
            servings: 4,
        },
        {
            id: 1,
            title: 'Cake',
            source: 'Grandma',
            ingredients: ['2 cups flour', '2 eggs', '1 cup sugar'],
            instructions: ['Preheat oven', 'mix ingredients', 'Bake at 225 degrees'],
            category: 'Baked goods',
            servings: 4,
        },
        {
            id: 1,
            title: 'Cake',
            source: 'Grandma',
            ingredients: ['2 cups flour', '2 eggs', '1 cup sugar'],
            instructions: ['Preheat oven', 'mix ingredients', 'Bake at 225 degrees'],
            category: 'Baked goods',
            servings: 4,
        }
    ]

    return (
        <section className='app'>
            {loggedIn ? (
                <div>
                    <div className='search-container'>
                        <p>Find your secret recipes.</p>
                        <form>
                            <input className='search-bar' type='text' placeholder='Find recipe' />
                        </form>
                    </div>
                    <div className='recipe-wrapper'>
                        {
                            recipes.map(item => {
                                return <RecipeItem recipe={item} />;
                            })
                        }
                    </div>
                </div>
            ) : (
                <div>Please Log in</div>
            )}
        </section>
    );
};

export default App;
