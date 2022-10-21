import { createContext, useContext, useEffect, useReducer } from "react";
import Products from "../Products";
import { useProductContext } from "./productContext";
import reducer from '../reducer/filterReducer';

const FilterContext = createContext();
const initialState = {
    filter_products :[],
    all_products:[],
    grid_view : false,
}
export const FilterContextProvider = ({ children }) => {

  const  { products }  = useProductContext();

  const [state, dispatch]  = useReducer(reducer,initialState)

  //set grid views

  const setGridView = ()=>{
    return dispatch({type:"SET_GRIDVIEW"});
  }

  const setListView = ()=>{
    return dispatch({type:"SET_LISTVIEW"});
  }


  useEffect(()=>{
    dispatch({type:"LOAD_FILTER_PRODUCTS",payload:products});
  },[products]);
  return (
    <FilterContext.Provider value={{ ...state,setGridView ,setListView}}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = ()=>{
    return useContext(FilterContext);
}  