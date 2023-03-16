import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { createAsyncThunk } from '@reduxjs/toolkit';



interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

interface ProductsState {
  products: Product[];
  
  searchTerm: string;
}

const initialState: ProductsState = {
  products: [],
  searchTerm: "",
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      (action) => action.type.endsWith("/fulfilled"),
      (state, action) => {
        state.products = action.payload;
      }
    );
  },
});

export const { setSearchTerm } = productsSlice.actions;

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
      const response = await axios.get(
        "https://fakestoreapi.com/products"
      );
      return response.data;
    }
  );

  export const fetchProduct = createAsyncThunk(
    'product/fetchProduct',
    async (productId: number): Promise<Product> => {
      const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
      return response.data;
    }
  );

export default productsSlice.reducer;