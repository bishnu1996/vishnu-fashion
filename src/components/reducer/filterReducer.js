const filterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
      };
    case "SET_GRIDVIEW":
      return {
        ...state,
        grid_view: true,
      };
    case "SET_LISTVIEW":
      return {
        ...state,
        grid_view: false,
      };
    case "GET_SORT_VALUE":
      const userSortValue = document.getElementById("sort");
      const sort_value =
        userSortValue.options[userSortValue.selectedIndex].value;
      console.log(sort_value);
      return {
        ...state,
        sorting_value: sort_value,
      };
    case "SORT_PRODUCTS":
      let newSortData;
      let tempSortProduct = [...action.payload];
      console.log(tempSortProduct);
      if (state.sort_value === "lowest") {
        newSortData = tempSortProduct.sort((a, b) => {
          return a.price - b.price;
        });
      }
      if (state.sort_value === "highest") {
        newSortData = tempSortProduct.sort((a, b) => {
          return b.price - a.price;
        });
      }
      if (state.sort_value === "z-a") {
        newSortData = tempSortProduct.sort((a, b) => {
          return b.name.localeCompare(a.name);
        });
      }
      if (state.sort_value === "a-z") {
        newSortData = tempSortProduct.sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
      }
      return {
        ...state,
        filter_products: newSortData,
      };
    default:
      return state;
  }
};
export default filterReducer;
