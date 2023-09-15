import React from 'react'
import './Summer.css'
import {items} from './MyData.js'
import Crds from './Crds.jsx'
export default function Categories() {
    const slice2=items.slice(4,8)
    const slice3=items.slice(8,12)
      const slice4=items.slice(12,16)
  return (
    <>
      <h1 className='ele'>ELECTRONICS AND DEVICES</h1>
      <div className="cen">
      <Crds items={slice2}/></div>
        <h1 className='ele el2'>Fashion & Cosmetics</h1>
      <div className="cen">
      <Crds items={slice3}/></div>
    
      <h1 className='ele el3'>Acessories</h1>
      <div className="cen cent">
      <Crds items={slice4}/></div>
    </>
  )
}
