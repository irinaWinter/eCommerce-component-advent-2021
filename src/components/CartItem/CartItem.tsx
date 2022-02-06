import { useDispatch, useSelector } from "react-redux";
import { CartProps } from "./CartItem.props";
import { RootState } from "../../reducers";
import { cartLoaded, cartRequested, cartUpdated } from "../../actions";
import { Htag, Button, Price } from "..";
import styles from "./CartItem.module.css";

export const CartItem = ({ product, id }: CartProps): JSX.Element => {
  const { name, price, img, count } = product;

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

  const removeFromCart = function () {
    cart[id].count--;

    if (!cart[id].count) {
      delete cart[id];
    }

    updateCart();
  };

  return (
    <li className={styles.product}>
      <div className={styles.description}>
        <Htag tag="h3">{name}</Htag>
        <Price size="sm" className={styles.price}>
          {price}
        </Price>

        <div className={styles.countBox}>
          <div className={styles.buttons}>
            <Button
              className={styles.button}
              onClick={removeFromCart}
              arrow="left"
              aria-label="Delete from Cart"
            ></Button>
            <p className={styles.count}>{count}</p>
            <Button
              className={styles.button}
              onClick={addToCart}
              arrow="right"
              aria-label="Add to Cart"
            ></Button>
          </div>

          <Price className={styles.total}>{(count * +price).toFixed(2)}</Price>
        </div>
      </div>
      <div className={styles.imgWrapper}>
        <img className={styles.img} src={img} alt={name} />
        <p className={styles.leftCount}>{count}</p>
      </div>
    </li>
  );
};
