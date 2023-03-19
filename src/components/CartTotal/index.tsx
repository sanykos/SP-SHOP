import { FC } from "react";
import cn from "classnames";

import styles from "./styles.module.scss";

interface CartTotalProps {
  total: number;
}

const TAX = 100;
const SHIPPING = 150;

export const CartTotal: FC<CartTotalProps> = ({ total }) => {
  return (
    <div className={styles.cartTotal}>
      <div className={styles.line}>
        <span>Subtotal</span>
        <span>{total}</span>
      </div>
      <div className={styles.line}>
        <span>Tax</span>
        <span>{TAX}</span>
      </div>
      <div className={styles.line}>
        <span>Shipping</span>
        <span>{SHIPPING}</span>
      </div>
      <div className={cn(styles.line, styles["line__total"])}>
        <span>Total</span>
        <span>{total + TAX + SHIPPING}</span>
      </div>
    </div>
  );
};
