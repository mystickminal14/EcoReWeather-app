import React from 'react';
import {motion} from 'framer-motion'
export default function Reci({ recipes }) {
  return (
    <motion.div initial={{opacity:0, y:-1000}} animate={{opacity:1,y:0}} transition={{ease:'easeIn',duration:0.3}}className='put'>
      {recipes.map((reci, i) => (
        <div key={i} className="boxm">
          <div className="imgR">
            <img src={reci.strMealThumb} alt={reci.strMeal} />
          </div>
          <h1>{reci.strMeal}</h1>
          <h2>Ingredients</h2>
          <div className="cengg">
           <div className="ingredients">
            <h3>{reci.strIngredient1}-</h3>
            <h3>{reci.strIngredient2}-</h3>
            <h3>{reci.strIngredient3}-</h3>
            <h3>{reci.strIngredient4}-</h3>
            <h3>{reci.strIngredient5}-</h3>
            <h3>{reci.strIngredient6}-</h3>
            <h3>{reci.strIngredient7}-</h3>
            <h3>{reci.strIngredient8}-</h3>
        
           </div>
           <div className="requirements">
            <h3>{reci.strMeasure1}</h3>
            <h3>{reci.strMeasure2}</h3>


            <h3>{reci.strMeasure3}</h3>
            <h3>{reci.strMeasure4}</h3>
            <h3>{reci.strMeasure5}</h3>
            <h3>{reci.strMeasure6}</h3>
            <h3>{reci.strMeasure7}</h3>
            <h3>{reci.strMeasure8}</h3>
          </div>
          </div>
          <h1>Description</h1>
          <div className="instruc">
            <p>{reci.strInstructions}</p>
          </div>
         
        </div>
      ))}
    </motion.div>
  );
}
