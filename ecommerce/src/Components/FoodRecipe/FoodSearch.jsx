import React, { useState } from 'react';
import './foodie.css';
import axios from 'axios';
import Reci from './Reci';

export default function FoodSearch() {
  const [data, newData] = useState('');
  const [recipes, setRecipes] = useState([]);

  const clicked = async () => {
    try {
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${data}`);

      const recipesData = response.data.meals ;

      setRecipes(recipesData);
    } catch (err) {
      console.log(err);
    }
  };
console.log(recipes)
  return (
    <>
      <div className="searchT">
        <input
          type="text"
        
          onChange={(e) => {
            newData(e.target.value);
          }}
          placeholder="Enter a recipe for food"
        />
        <button className="searchb" onClick={clicked}>
          Search
        </button>
      </div>

     <Reci recipes={recipes}/>
    </>
  );
}
