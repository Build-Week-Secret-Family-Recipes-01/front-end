import React, {useEffect, useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import './App.css';

import RecipeItem from './components/recipeItem/RecipeItem';
import axios from 'axios';

const App = () => {
    const { push } = useHistory()
    const [auth, setAuth] = useState(false);

    useEffect(()=>{
        const token = localStorage.getItem('token');
        if (token === 'undefined') {
            setAuth(true)
        };

        axios
            .get(`https://secret-family-recipes-01.herokuapp.com/api/recipes`, { headers: { Authorization: token}})
            .then(resp => {
                setRecipes(resp.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);
    
    const [recipes, setRecipes] = useState([]);
    // const [searchTerm, setSearchTerm] = useState(recipes);

    

    const handleSearchChange = (e) => {
        const term = e.target.value.toLowerCase();
        const filtered = recipes.filter(item => {
            return item.title.toLowerCase().includes(term);
        });
        
        // setSearchTerm(filtered);
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
                        <div className='tab-link'><Link to='/'>All Recipes</Link></div>
                        <div className='tab-link'><Link to='page_one'>Your Recipes</Link></div>
                    </div>
                    <div className='recipe-wrapper'>
                        {
                            recipes.map((item, index) => {
                                return <RecipeItem key={index} recipe={item} />;
                            })
                        }
                    </div>
                </div>
            ) : (
                push('/login')
            )}
        </section>
    );
};

export default App;
