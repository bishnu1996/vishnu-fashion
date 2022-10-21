import React from 'react'
import Product from '../Product';
import './style.css';

const GridView = ({products}) => {
  return (
    <div className='gridview-container'>
    {
        products.map((curElem)=>{
            return <Product key={curElem.id} {...curElem} />
        })
    }
      
    </div>
  )
}

export default GridView;
