import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../model/Product";
import { fetchProducts } from "./ActionCreators";

interface ProductsState {
  products: IProduct[];
  isLoading: boolean;
  error: string;
}

const initialState: ProductsState = {
  products: [],
  isLoading: false,
  error: "",
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // productsFetching(state) {
    //   state.isLoading = true;
    // },
    // productsFetchingSuccess(state, action: PayloadAction<IProduct[]>) {
    //   state.isLoading = false;
    //   state.error = "";
    //   state.products = action.payload;
    // },
    // productsFetchingError(state, action: PayloadAction<string>) {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },
  },
  extraReducers: {
    [fetchProducts.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchProducts.fulfilled.type]: (
      state,
      action: PayloadAction<IProduct[]>
    ) => {
      state.isLoading = false;
      state.error = "";
      state.products = action.payload;
    },
    [fetchProducts.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default productsSlice.reducer;
