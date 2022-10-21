import React, { useState } from "react";
import "./style.css";
import { FaCheck } from "react-icons/fa";
import {NavLink} from 'react-router-dom';
import CartAmountToggle from '../CartAmountToggle/index.js';
import Button from '../Button';

const AddToCart = ({ product }) => {
  const { id, colors, stock } = product;
  const [color, setColor] = useState(colors[0]);
  const [amount,setAmount] = useState(1);

  const setDecrease = ()=>{
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  }
  const setIncrease = ()=>{
    stock > amount ? setAmount(amount + 1): setAmount(stock);
  }
  return (
<>
    <div className="addtocart-container">
      <p>
        colors:
        {colors.map((curColor, index) => {
          return (
            <button
              style={{ backgroundColor: curColor }}
              className={color === curColor ? "btnStyle active" : "btnStyle"}
              onClick={() => setColor(curColor)}
            >
              {color === curColor ? <FaCheck className="fa-check"/> : null}
            </button>
          );
        })}
      </p>

    </div>
    <div>
      <CartAmountToggle  amount = {amount} setDecrease={setDecrease} setIncrease = {setIncrease}/>
      <NavLink to="/cart">
      <Button className="add-cart-btn">Add To Cart</Button>
      </NavLink>
    </div>
    </>

  );
};

export default AddToCart;
