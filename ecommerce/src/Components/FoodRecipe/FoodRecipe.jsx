import React from 'react'
import Navbar from '../Navbar/Navbar'
import burger from '../../Assets/burger.webp'; 
import pizza from '../../Assets/piza.webp'; 
import sushi from '../../Assets/sushi.webp'; 
import noodles from '../../Assets/ramennoodles.webp'; 
import './foodie.css'
import FoodSearch from './FoodSearch';
export default function FoodRecipe() {
  return (
    <>
      <Navbar/>
      <div className="heroFoodie">
    <div className="sideFood">
        <h1>EXPLORE FASCINATING FOOD ITEMS</h1>
        <p> Elevate your culinary prowess with our delectable Savory Stuffed Bell Peppers recipe! Bursting with flavors and wholesome ingredients, this dish is a true crowd-pleaser.

We start with vibrant bell peppers, carefully hollowed out and ready to be filled with a mouthwatering blend of seasoned ground meat (or plant-based protein for our vegetarian friends), fluffy rice, and a medley of fresh vegetables. The combination of savory, aromatic spices and herbs infuses every bite with warmth and comfort.</p>
    <button className='search'>Search Food</button></div>
    <div className="rightFood">
        <div className="rightImg">
            <img src={burger} alt='foodImage'/>
        </div>
        <div className="rightImg">
            <img src={pizza} alt='foodImage'/>
        </div>
        <div className="rightImg">
            <img src={sushi} alt='foodImage'/>
        </div>
        <div className="rightImg">
            <img src={noodles} alt='foodImage'/>
        </div>
    </div>
   
      </div>
      <div className='flex justify-center flex-col my-8'>
      <FoodSearch/>
      </div>
    </>
  )
}
