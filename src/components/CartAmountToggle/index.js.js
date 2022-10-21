import React from 'react'
import './style.css';
import { FaMinus,FaPlus } from 'react-icons/fa';

const CartAmountToggle = ({amount,setIncrease,setDecrease}) => {

  return (
    <div className='cart-add-container'>
        <button onClick={setDecrease} className ="button-incre">
        <FaMinus/>
        </button>
        <div className="amount">{amount}</div>
        <button onClick={setIncrease} className="button-incre" >
          <FaPlus/>
        </button>
    </div>
  )
}

export default CartAmountToggle
