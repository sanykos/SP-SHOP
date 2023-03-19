import React, { FC } from "react";
import cn from "classnames";
import Icon from "../../UI/Icon";
import { ChangeQuantity } from "../ChangeQuantity";
import { BasketProductCardProps } from "./interfaces";

import styles from "./styles.module.scss";

export const CartItem: FC<BasketProductCardProps> = ({
  product,
  img,
  className = "",
  deleteItemCart,
}) => {
  const { id, name, price, quantity } = product;

  const handleDelete = () => {
    deleteItemCart(id);
  };

  return (
    <div className={cn(styles.cartItem, className)}>
      <div className={styles.imageBlock}>
        <img className={styles.image} src={img} alt={name} />
      </div>
      <div className={styles.descriptionBlock}>
        <h2 className={styles.title}>{name}</h2>
        <div className="d-flex">
          <ChangeQuantity quantity={quantity} />
          <span className={styles.price}>{`$ ${price}`}</span>
        </div>
      </div>
      <button type="button" className={styles.deleteBtn} onClick={handleDelete}>
        <Icon name="xmark-icon" size={16} color="gray" />
      </button>
    </div>
  );
};
