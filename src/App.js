import React, {useEffect, useState} from 'react';
import './App.css';

import RecipeItem from './components/recipeItem/RecipeItem';

import './assets/search-background.jpg';


const App = () => {

    const [auth, setAuth] = useState(false)

    useEffect(()=>{
        const token = localStorage.getItem('token');
        if (token === 'undefined') {
            setAuth(true)
        }
    },[])


    const recipes = [
        {
            id: 1,
            title: 'Cake',
            source: 'Grandpa',
            ingredients: ['2 cups flour', '2 eggs', '1 cup sugar'],
            instructions: ['Preheat oven', 'mix ingredients', 'Bake at 225 degrees'],
            category: 'cake',
            servings: 4,
        },
        {
            id: 2,
            title: 'Gummy Bears',
            source: 'Grandma',
            ingredients: ['2 cups flour', '2 eggs', '1 cup sugar'],
            instructions: ['Preheat oven', 'mix ingredients', 'Bake at 225 degrees'],
            category: 'Candy',
            servings: 4,
        },
        {
            id: 3,
            title: 'Steak',
            source: 'Mom',
            ingredients: ['2 cups flour', '2 eggs', '1 cup sugar'],
            instructions: ['Preheat oven', 'mix ingredients', 'Bake at 225 degrees'],
            category: 'Dinner',
            servings: 4,
        },
        {
            id: 4,
            title: 'Pasta',
            source: 'Grandma',
            ingredients: ['2 cups flour', '2 eggs', '1 cup sugar'],
            instructions: ['Preheat oven', 'mix ingredients', 'Bake at 225 degrees'],
            category: 'italian',
            servings: 4,
        },
        {
            id: 5,
            title: 'Bread',
            source: 'Grandma',
            ingredients: ['2 cups flour', '2 eggs', '1 cup sugar'],
            instructions: ['Preheat oven', 'mix ingredients', 'Bake at 225 degrees'],
            category: 'pastry',
            servings: 4,
        }
    ];
    const [searchTerm, setSearchTerm] = useState(recipes);

    const handleSearchChange = (e) => {
        const term = e.target.value.toLowerCase();
        const filtered = recipes.filter(item => {
            return item.title.toLowerCase().includes(term) || item.category.toLowerCase().includes(term);
        });
        setSearchTerm(filtered);
    };
    
    return (
        <section className='app'>
            {auth ? (
                <div>
                    <div className='search-container'>
                        <p>Find your secret recipes.</p>
                        <form>
                            <input
                                onChange={handleSearchChange}
                                className='search-bar'
                                type='text'
                                name='search'
                                id='search'
                                placeholder='Start typing to find recipe'
                            />
                        </form>
                    </div>
                    <div className='recipe-wrapper'>
                        {
                            searchTerm.map((item, index) => {
                                return <RecipeItem key={index} recipe={item} />;
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
