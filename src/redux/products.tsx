import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialSliceState = {
  isLoading: false,
  hasError: false,
  products: [],
  product: {},
  errorMessage: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState: initialSliceState,
  reducers: {
    getProducts(state, action) {
      axios.get(apiUrl).then(function (response) {
        const data = response.data;
        console.log(data);
      });
    },
  },
});

const apiUrl = `https://dummyjson.com/products`;

export const productsSliceActions = productsSlice.actions;

export default productsSlice.reducer;
