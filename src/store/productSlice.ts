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

interface ProductState {
  product: Product | null;
  loading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  product: null,
  loading: false,
  error: null,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.product = action.payload;
    });
    builder.addCase(fetchProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? "Something went wrong";
    });
  },
});

export const { } = productSlice.actions;

export const fetchProduct = createAsyncThunk(
  'product/fetchProduct',
  async (productId: number): Promise<Product> => {
    const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
    return response.data;
  }
);

export default productSlice.reducer;