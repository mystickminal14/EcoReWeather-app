import React ,{useState,useContext}from 'react';
import './Nav.css';
import '../Summer/Summer.css'
import {motion ,AnimatePresence} from 'framer-motion'
import {ImCross} from 'react-icons/im'
import { NavLink } from 'react-router-dom';
import i1 from '../../Assets/CROP.png'; 
import {TiShoppingCart} from "react-icons/ti"
import {FaUserAlt} from "react-icons/fa"
import { AppContext } from '../Weather/wea';
export default function Navbar() {
  const[sidebar,setSide]=useState(false)
  const { getCart, getCartIndex } = useContext(AppContext);
console.log(getCart)
  return (
    <nav className='flex justify-around items-center sm:relative'>
      <NavLink to='/'  className='anchor'><div className="im">
        <img src={i1} alt="logo" />
      </div></NavLink> 
      <ul className='flex items-center gap-4 sm:absolute sm:top-50px'>
      <NavLink to='/' className='anchor'> <li>Shop</li></NavLink> 
      <NavLink to='/Recipe' className='anchor'> <li>Recipe</li></NavLink> 
        <NavLink to='/Weather' className='anchor'><li>Weather</li></NavLink>
       
      </ul>
      <div className="icons flex gap-3 items-center">
        <TiShoppingCart className='i ii cursor-pointer' onClick={()=>{
        setSide(true)
        }} />
        <i className="fa-regular fa-heart i"/>
        <FaUserAlt className='i'/>
      </div>
      <AnimatePresence>
     {sidebar && <motion.div className="sideBar" initial={{x:1000,opacity:0.5}} animate={{x:0,opacity:1}} transition={{type:"spring", stiffness:50}} exit={{x:1000 ,transition:{duration:0.5}}}>
       <div className="hhh"> <h1>YOUR CART</h1><ImCross className="cursor-pointer"onClick={()=>{
        setSide(false)
       }}/></div>
      {
        getCart &&  <div className="categorybox" key={getCartIndex}>
        <div className="CateImg">
          <img src={getCart.url} alt="categories"/>
        </div>
        <div>
        <h2 className=" dumb px-3">{getCart.name}</h2>
        <h5 className="px-3">{getCart.stars}</h5>
        <h2 className="px-3">{getCart.tag}</h2>
        <div className="price">
            <h2 className="dumb px-3">Rs.{getCart.price}</h2>
            <h3>
              <del>Rs.{getCart.og}</del>
              <span>(25% off)</span>
            </h3>
          </div></div>
       </div>
      }
      </motion.div>}</AnimatePresence>
    </nav>
  );
}
