import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../model/Product";
import {
  addToCart,
  changeQuantityItemCart,
  deleteItemCart,
  fetchCartProducts,
} from "./ActionCreators";

interface CartState {
  products: IProduct[];
  isLoading: boolean;
  error: string;
}

const initialState: CartState = {
  products: [],
  isLoading: false,
  error: "",
};

export const cartSlice = createSlice({
  name: "cart",
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
  extraReducers: (builder) => {
    builder.addCase(fetchCartProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCartProducts.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.error = "";
      state.products = payload;
    });
    builder.addCase(fetchCartProducts.rejected, (state, { error }) => {
      state.isLoading = false;
      state.error = error.message
        ? error.message
        : "Ошибка при загрузке корзины";
    });
    builder.addCase(addToCart.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addToCart.fulfilled, (state, { payload }) => {
      state.products.push(payload);
      state.isLoading = false;
      state.error = "";
    });
    builder.addCase(addToCart.rejected, (state, { error }) => {
      state.error = error.message
        ? error.message
        : "Ошибка при добавлении в корзину";
    });
    builder.addCase(deleteItemCart.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteItemCart.fulfilled, (state, action) => {
      state.products = state.products.filter(
        (item) => item.id !== action.meta.arg
      );
      state.isLoading = false;
      state.error = "";
    });
    builder.addCase(deleteItemCart.rejected, (state, { error }) => {
      state.isLoading = false;
      state.error = error.message
        ? error.message
        : "Ошибка при удалении элемента из корзины";
    });
    builder.addCase(changeQuantityItemCart.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(changeQuantityItemCart.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = "";
      state.products = state.products.map((product) =>
        product.id === action.meta.arg.id
          ? {
              ...product,
              quantity: action.meta.arg.quantity,
            }
          : product
      );
    });
  },
});

export default cartSlice.reducer;
