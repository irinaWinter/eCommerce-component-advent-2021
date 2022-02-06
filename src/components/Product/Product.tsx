import { ProductProps } from "./Product.props";
import styles from "./Product.module.css";
import { RootState } from "../../reducers";

import { Htag, Button, Price } from "..";
import { useDispatch, useSelector } from "react-redux";
import { cartLoaded, cartRequested, cartUpdated } from "../../actions";

export const Product = ({ product, id }: ProductProps): JSX.Element => {
  const { name, price, img } = product;

  const cart = useSelector((state: RootState) => state.cart.products);
  const dispatch = useDispatch();

  const updateCart = () => {
    dispatch(cartUpdated(cart));
    dispatch(cartRequested());
    dispatch(cartLoaded(cart));
  };

  const addToCart = function () {
    cart[id] = product;

    if (cart[id].count) {
      cart[id].count++;
    } else {
      cart[id].count = 1;
    }

    updateCart();
  };

  const removeFromCart = () => {
    cart[id].count--;
    delete cart[id];

    updateCart();
  };

  const Buttons = () => {
    if (cart[id]) {
      return (
        <Button
          className={styles.button}
          onClick={removeFromCart}
          appearance="inCart"
        >
          In Cart
        </Button>
      );
    }

    return (
      <Button className={styles.button} onClick={addToCart}>
        Add to Cart
      </Button>
    );
  };

  return (
    <li className={styles.product}>
      <div className={styles.description}>
        <Htag tag="h3">{name}</Htag>
        <Price className={styles.price}>{price}</Price>
        <Buttons />
      </div>
      <img className={styles.img} src={img} alt={name} />
    </li>
  );
};
