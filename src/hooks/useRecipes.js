import { useState } from 'react';

function useRecipes(initialState) {
  const [recipes, setRecipesOnly] = useState(initialState);
  const [searchTerm, setSearchTerm] = useState(recipes);

  const setRecipes = (newRecipes) => {
    setRecipesOnly(newRecipes)
    setSearchTerm(newRecipes)
  }

  return [recipes, setRecipes, searchTerm, setSearchTerm];
}

export default useRecipes;
