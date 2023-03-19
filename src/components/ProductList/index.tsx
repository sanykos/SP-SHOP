import React, { useEffect } from "react";
import styles from "./styles.module.scss";
import { ProductCard } from "../ProductCard";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchProducts } from "../../store/reducers/ActionCreators";

export const ProductList = () => {
  const { products } = useAppSelector((state) => state.productReducer);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className={styles.productList}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
