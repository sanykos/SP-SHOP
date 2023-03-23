import React, { useEffect } from "react";
import styles from "./styles.module.scss";
import { ProductCard } from "../ProductCard";
import { useAppDispatch, useAppSelector } from "@hooks/redux";
import {
  fetchProducts,
  changeQuantityItemCart,
  addToCart,
} from "@store/reducers/ActionCreators";

export const ProductList = () => {
  const { products: cartProducts } = useAppSelector(
    (state) => state.cartReducer
  );
  const { products } = useAppSelector((state) => state.productReducer);

  const dispatch = useAppDispatch();

  const addToCartHandler = (event: React.MouseEvent) => {
    const productId = event.currentTarget.getAttribute("data-product-id");
    if (productId) {
      const findProduct = cartProducts.find((p) => p.id === Number(productId));
      if (findProduct) {
        dispatch(
          changeQuantityItemCart({
            ...findProduct,
            quantity: findProduct.quantity + 1,
          })
        );
        return;
      }
      const newCartProduct = products.find((p) => p.id === Number(productId));
      if (newCartProduct) {
        dispatch(
          addToCart({
            id: newCartProduct.id,
            name: newCartProduct.name,
            price: newCartProduct.price,
            quantity: newCartProduct.quantity,
          })
        );
      }
    }
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className={styles.productList}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          addToCart={addToCartHandler}
        />
      ))}
    </div>
  );
};
