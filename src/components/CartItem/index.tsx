import { FC } from "react";
import cn from "classnames";
import Icon from "../../UI/Icon";
import { ChangeQuantity } from "../ChangeQuantity";
import { BasketProductCardProps } from "./interfaces";
import { changeQuantityItemCart } from "../../store/reducers/ActionCreators";

import styles from "./styles.module.scss";
import { useAppDispatch } from "../../hooks/redux";

export const CartItem: FC<BasketProductCardProps> = ({
  product,
  img,
  className = "",
  deleteItemCart,
}) => {
  const { id, name, price, quantity } = product;

  const dispatch = useAppDispatch();

  const handleDelete = () => {
    deleteItemCart(id);
  };

  const handlePlus = () => {
    dispatch(
      changeQuantityItemCart({
        ...product,
        quantity: quantity + 1,
      })
    );
  };

  const handleMinus = () => {
    if (quantity === 1) {
      deleteItemCart(id);
      return;
    }
    dispatch(
      changeQuantityItemCart({
        ...product,
        quantity: quantity - 1,
      })
    );
  };

  return (
    <div className={cn(styles.cartItem, className)}>
      <div className={styles.imageBlock}>
        <img className={styles.image} src={img} alt={name} />
      </div>
      <div className={styles.descriptionBlock}>
        <h2 className={styles.title}>{name}</h2>
        <div className="d-flex">
          <ChangeQuantity
            quantity={quantity}
            plus={handlePlus}
            minus={handleMinus}
          />
          <span className={styles.price}>{`$ ${price * quantity}`}</span>
        </div>
      </div>
      <button type="button" className={styles.deleteBtn} onClick={handleDelete}>
        <Icon name="xmark-icon" size={16} color="gray" />
      </button>
    </div>
  );
};
