import React from "react";
import "./style.css";
import Product from "../Product";
import { useProductContext } from "../context/productContext";

const FeatureProduct = () => {
  const { isLoading, featureProducts } = useProductContext();
  if (isLoading) {
    return <div>........Loading</div>;
  }
  return (
    <div className="feature-container">
      <div className="introdata">Check Now!</div>
      <div className="common-heading">Our Features Services</div>
      <div className="product">
        {featureProducts.map((curElem) => {
          return <Product key={curElem.id} {...curElem} />;
        })}
      </div>
    </div>
  );
};

export default FeatureProduct;
