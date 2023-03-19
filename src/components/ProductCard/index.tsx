import React from "react";
import styles from "./styles.module.scss";
import productImg from "../../assets/product1.jpg";
import Icon from "../../UI/Icon";
import { IProduct } from "../../model/Product";

interface ProductCardProps {
  product: IProduct;
  addToCart: (event: React.MouseEvent) => void;
}

function numberWithSpaces(price: number): string {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  addToCart,
}) => {
  const { name, price, id } = product;

  return (
    <div className={styles.productCard}>
      <img src={productImg} alt={name} />
      <h2 className={styles.title} title={name}>
        {name}
      </h2>
      <div className={styles.footer}>
        <button
          data-product-id={id}
          type="button"
          className={styles.addToCart}
          onClick={addToCart}
        >
          <Icon name="cart-icon" color="white" size={24} />
        </button>
        <span className={styles.price}>$ {numberWithSpaces(price)}</span>
      </div>
    </div>
  );
};
