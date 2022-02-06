import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  productsRequested,
  productsLoaded,
  productsError,
} from "../../actions";
import { RootState } from "../../reducers";
import { compose } from "../../utils";
import withProductsService from "../Hoc";
import { Product, Loader } from "..";
import styles from "./ProductList.module.css";
import cn from "classnames";

const ProductList = ({ productsApiService }): JSX.Element => {
  const products = useSelector((state: RootState) => state.products.products);
  const loading = useSelector((state: RootState) => state.products.loading);

  const dispatch = useDispatch();

  const dispatchProductsError = (error) => {
    dispatch(productsError(error));
  };

  const dispatchProductsLoaded = (products) => {
    dispatch(productsLoaded(products));
  };

  const dispatchProductsRequested = () => {
    dispatch(productsRequested());
  };

  useEffect((): any => {
    let cancelled = false;

    dispatchProductsRequested();

    productsApiService
      .getProducts()
      .then((data) => {
        !cancelled && dispatchProductsLoaded(data);
      })
      .catch((err) => dispatchProductsError(err));

    return () => (cancelled = true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const productsList = Object.keys(products).map((item) => {
    return <Product product={products[item]} key={item} id={item}></Product>;
  });

  const Content = () => {
    if (loading) return <Loader />;

    return products && <ul className={cn(styles.list)}>{productsList}</ul>;
  };

  return <Content />;
};

export default compose(withProductsService())(ProductList);
