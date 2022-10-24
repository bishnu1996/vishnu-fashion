import React from "react";
import { BsGrid3X3GapFill, BsList } from "react-icons/bs";
import { useFilterContext } from "../context/filter_context";
import "./style.css";
const Sort = () => {

  const {grid_view,setGridView,setListView,filter_products,sorting} = useFilterContext();

  return (
    <div className="sort-section">
      <div className="list-grid-icon">
        <button className={grid_view ? 'active grid-icon':'grid-icon'} onClick={setGridView}>
          <BsGrid3X3GapFill  />
        </button>
        &ensp;
        <button className={!grid_view ? "list-icon active" :"list-icon"} onClick={setListView}>
          <BsList  />
        </button>
      </div>
      <div className="total-product-length">
        {filter_products ? filter_products.length : null} Total Products
      </div>
      <div className="filter-by-price">
      <form action="">
        <label htmlFor="sort"></label>
        <select name="sort" id="sort" onClick={sorting}>
          <option value="lowest">Price(Lowest)</option>
          <option value="highest">Price(Highest)</option>
          <option value="a-z">Price(a-z)</option>
          <option value="z-a">Price(z-a)</option>
        </select>
      </form>.
      </div>
    </div>
  );
};

export default Sort;
