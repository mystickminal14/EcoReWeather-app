import React from 'react'
import Foot from './Components/Navbar/Foot';

import Navbar from './Components/Navbar/Navbar';
import Categories from './Components/Summer/Categories';
import Summer from './Components/Summer/Summer';
import Banner from './Components/banner/Banner';
import FoodRecipe from './Components/FoodRecipe/FoodRecipe';
export default function Home() {
  return (
    <>
    <Navbar/>
   <Banner/>
   <Summer/>
   <Categories/>
   <Foot/>
 
    </>
  )
}
