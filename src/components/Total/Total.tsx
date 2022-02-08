import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers";
import { Price } from "..";
import styles from "./Total.module.css";

const Total = (): JSX.Element => {
  const cart = useSelector((state: RootState) => state.cart.products);
  const loading = useSelector((state: RootState) => state.cart.loading);
  const tax = useSelector((state: RootState) => state.tax.tax);

  let [subtotal, setSubtotal] = useState(0);
  let totalTax = subtotal * tax;
  let total = subtotal + totalTax;

  const getSubtotal = () => {
    Object.keys(cart).forEach((item) => {
      let current = cart[item].price * cart[item].count;
      setSubtotal((subtotal) => subtotal + current);
    });
  };

  useEffect((): any => {
    getSubtotal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  return (
    <div className={styles.total}>
      <span className={styles.price}>
        Subtotal: <Price>{subtotal.toFixed(2)}</Price>
      </span>
      <span className={styles.price}>
        Tax: <Price>{totalTax.toFixed(2)}</Price>
      </span>
      <span className={styles.price}>
        Total: <Price appearance="accent">{total.toFixed(2)}</Price>
      </span>
    </div>
  );
};

export default Total;
