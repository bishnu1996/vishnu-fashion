import React from "react";
import { BsGrid3X3GapFill, BsList } from "react-icons/bs";
import { useFilterContext } from "../context/filter_context";
import "./style.css";
const Sort = () => {

  const {grid_view,setGridView,setListView,filter_products} = useFilterContext();

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
        {filter_products.length} Total Products
      </div>
      <div className="filter-by-price">
        <select>
          <option value="">Hello</option>
          <option value="">moto</option>
        </select>
      </div>
    </div>
  );
};

export default Sort;
