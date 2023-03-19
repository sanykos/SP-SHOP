import React, { FC } from "react";
import Icon from "../../UI/Icon";
import styles from "./styles.module.scss";

interface ChangeQuantityProps {
  quantity: number;
}

export const ChangeQuantity: FC<ChangeQuantityProps> = ({ quantity }) => {
  return (
    <div className={styles.changeQuantity}>
      <button className={styles.plusBtn}>
        <Icon name="minus-icon" />
      </button>
      <span className={styles.quantity}>{quantity}</span>
      <button className={styles.minusBtn}>
        <Icon name="plus-icon" />
      </button>
    </div>
  );
};
