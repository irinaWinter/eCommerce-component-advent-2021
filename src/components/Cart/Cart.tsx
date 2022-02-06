import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartRequested, cartError, cartLoaded } from "../../actions";
import { RootState } from "../../reducers";
import { CartItem, Loader, Total } from "..";
import styles from "./Cart.module.css";
import cn from "classnames";

const Cart = (): JSX.Element => {
  const cart = useSelector((state: RootState) => state.cart.products);
  const loading = useSelector((state: RootState) => state.cart.loading);

  const dispatch = useDispatch();

  const dispatchCartError = (error) => {
    dispatch(cartError(error));
  };

  const dispatchCartLoaded = (products) => {
    dispatch(cartLoaded(products));
  };

  const dispatchCartRequested = () => {
    dispatch(cartRequested());
  };

  useEffect((): any => {
    try {
      dispatchCartRequested();
      dispatchCartLoaded(cart);
    } catch (err) {
      dispatchCartError(err);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  const cartList = Object.keys(cart).map((item) => {
    return <CartItem product={cart[item]} key={item} id={item}></CartItem>;
  });

  const Content = () => {
    if (loading) return <Loader />;

    if (Object.keys(cart).length) {
      return (
        cart && (
          <>
            <ul className={cn(styles.list)}>{cartList}</ul>
            <Total />
          </>
        )
      );
    } else {
      return <p>Your cart is empty.</p>;
    }
  };

  return <Content />;
};

export default Cart;
