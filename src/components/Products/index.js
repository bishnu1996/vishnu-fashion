import React from "react";
import FilterSection from '../FilterSection';
import Sort from '../Sort';
import ProductList from '../ProductList';
import './style.css';
import { useFilterContext } from "../context/filter_context";
const Products = () => {
  return( 
  <div className="products-container">
    <div className="filter-section">
      <FilterSection/>
    </div>
    <section className="product-view-sort">
      <div className="sort-filter">
        <Sort/>
      </div>
      <div className="main-product">
        <ProductList />
      </div>
    </section>
  </div>
  );
};

export default Products;
