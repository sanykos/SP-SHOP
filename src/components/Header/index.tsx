import React from "react";
import Icon from "../../UI/Icon";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import styles from "./styles.module.scss";
import { useAppSelector } from "../../hooks/redux";

export const Header: React.FC = () => {
  const { products } = useAppSelector((state) => state.cartReducer);
  return (
    <header className={styles.header}>
      <Logo style={{ width: "89px", height: "32px" }} />
      <div className={styles.cart}>
        {<Icon name="cart-icon" />}
        <span className={styles.counter}>{products.length}</span>
      </div>
    </header>
  );
};
