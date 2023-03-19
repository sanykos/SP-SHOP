import React from "react";
import styles from "./styles.module.scss";
import productImg from "../../assets/product1.jpg";
import Icon from "../../UI/Icon";
import { IProduct } from "../../model/Product";
import { addToCart } from "../../store/reducers/ActionCreators";
import { useAppDispatch } from "../../hooks/redux";

interface ProductCardProps {
  product: IProduct;
}

function numberWithSpaces(price: number): string {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { name, price, id, quantity } = product;

  const dispatch = useAppDispatch();

  const addToCartHandler = () => {
    dispatch(addToCart({ name, price, quantity }));
  };
  return (
    <div className={styles.productCard}>
      <img src={productImg} alt={name} />
      <h2 className={styles.title} title={name}>
        {name}
      </h2>
      <div className={styles.footer}>
        <button
          type="button"
          className={styles.addToCart}
          onClick={addToCartHandler}
        >
          <Icon name="cart-icon" color="white" size={24} />
        </button>
        <span className={styles.price}>$ {numberWithSpaces(price)}</span>
      </div>
    </div>
  );
};
