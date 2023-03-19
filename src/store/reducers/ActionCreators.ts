import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { IProduct } from "../../model/Product";

export const fetchCartProducts = createAsyncThunk(
  "cart/fetchAll",
  async (_, thunkApi) => {
    try {
      const response = await axios.get<IProduct[]>(
        "http://localhost:3000/cart"
      );
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue((error as Error).message);
    }
  }
);

export const fetchProducts = createAsyncThunk(
  "products/fetchAll",
  async (_, thunkApi) => {
    try {
      const response = await axios.get<IProduct>(
        "http://localhost:3000/products"
      );
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue((error as Error).message);
    }
  }
);

export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async (data: Partial<IProduct>, thunkApi) => {
    try {
      const response = await axios.request<IProduct>({
        url: "http://localhost:3000/cart",
        method: "POST",
        headers: {
          "X-Requested-With": "XMLHttpRequest",
          "Content-Type": "application/json",
        },
        data,
      });
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue((error as Error).message);
    }
  }
);

export const deleteItemCart = createAsyncThunk(
  "cart/deleteItemCart",
  async (id: number, thunkApi) => {
    try {
      await axios.request({
        url: `http://localhost:3000/cart/${id}`,
        method: "DELETE",
        headers: {
          "X-Requested-With": "XMLHttpRequest",
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      return thunkApi.rejectWithValue((error as Error).message);
    }
  }
);

export const changeQuantityItemCart = createAsyncThunk(
  "cart/changeQuantityItemCart",
  async (product: IProduct, thunkApi) => {
    try {
      await axios.request({
        url: `http://localhost:3000/cart/${product.id}`,
        method: "PUT",
        data: product,
        headers: {
          "X-Requested-With": "XMLHttpRequest",
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      return thunkApi.rejectWithValue((error as Error).message);
    }
  }
);
