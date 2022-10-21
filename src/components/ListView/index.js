import React from 'react'
import { NavLink } from 'react-router-dom';
import FormatPrice from '../Helpers/FormatPrice';
import './style.css';
const ListView = ({products}) => {
  return (
    <div className='listview-container'>
      {
        products.map((curElem)=>{
            const {id,name,image,price,description} = curElem;
            return (
                <div className="list-view-container">
                    <div className='list-image-div'>
                        <img src={image} alt={name} className="list-image"/>
                    </div>
                    <div className='list-info-div'>
                        <h3>{name}</h3>
                        <p><FormatPrice price={price}/></p>
                        <p>{description.slice(0,90)}</p>
                        <NavLink to={`/singleProduct/${id}`} >
                            <button>Read More</button>
                        </NavLink>
                    </div>
                </div>
            )
        })
      }
    </div>
  )
}

export default ListView;
