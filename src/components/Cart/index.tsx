import { FC, useEffect, useMemo } from "react";
import { CartItem } from "../CartItem";
import productImg from "../../assets/product1.jpg";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import {
  fetchCartProducts,
  deleteItemCart,
} from "../../store/reducers/ActionCreators";

import styles from "./styles.module.scss";
import { CartTotal } from "../CartTotal";

export const Cart: FC = () => {
  const { products } = useAppSelector((state) => state.cartReducer);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCartProducts());
  }, []);

  const handleDeleteItemCart = (id: number) => {
    dispatch(deleteItemCart(id));
  };

  const totalPrice = useMemo(
    () => products.reduce((acc, p) => (acc += p.price * p.quantity), 0),
    [products]
  );

  return (
    <>
      <h2 className={styles.title}>My basket</h2>
      <div className={styles.cart}>
        {products.map((product) => (
          <CartItem
            key={product.id}
            product={product}
            deleteItemCart={handleDeleteItemCart}
            img={productImg}
          />
        ))}
      </div>
      <CartTotal total={totalPrice} />
    </>
  );
};
