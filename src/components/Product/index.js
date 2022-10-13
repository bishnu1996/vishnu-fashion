import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";
import FormatPrice from "../Helpers/FormatPrice";
const Product = (curElem) => {
  const { id, name, image, price, category } = curElem;
  return (
    <NavLink to={`/singleproduct/${id}`}>
      <div className="card-container">
        {/* <figure>
          <img src={image} alt={name} className="card-image" />
          <figcaption className="caption">{category}</figcaption>
        </figure> */}
        <div className="position-div">
          <img src={image} alt={name} className="card-image" />
          <p className="caption">{category}</p>
        </div>
        <div className="card-data">
          <div className="card-data-flex">
            <h3>{name}</h3>
            <p className="card-data-price">
              <FormatPrice price={price} />
            </p>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default Product;
