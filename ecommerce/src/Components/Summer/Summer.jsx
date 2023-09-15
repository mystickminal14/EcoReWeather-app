import React from 'react'
import './Summer.css'

import {items} from './MyData.js'
import Crds from './Crds'
export default function Summer() {
    const sli=items.slice(0,4)
  return (
    <>
      <div className="summerSale">
        <h1 className='summerSa'>
            SUMMER SALE
        </h1>
        <div className="cen">
      <Crds items={sli}/> </div>
      </div>
    </>
  )
}
