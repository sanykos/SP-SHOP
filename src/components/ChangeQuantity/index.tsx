import { FC } from "react";
import Icon from "@UI/Icon";
import styles from "./styles.module.scss";

interface ChangeQuantityProps {
  quantity: number;
  plus: () => void;
  minus: () => void;
}

export const ChangeQuantity: FC<ChangeQuantityProps> = ({
  quantity,
  minus,
  plus,
}) => {
  return (
    <div className={styles.changeQuantity}>
      <button className={styles.plusBtn} onClick={minus}>
        <Icon name="minus-icon" />
      </button>
      <span className={styles.quantity}>{quantity}</span>
      <button className={styles.minusBtn} onClick={plus}>
        <Icon name="plus-icon" />
      </button>
    </div>
  );
};
