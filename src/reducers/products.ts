import Products from '../constants/prooducts';
import { ActionModel } from '../interfaces/actionModel';
import { ProductsStateModel } from '../interfaces/ProductsStateModel';

const initialState: ProductsStateModel = {
  products: {},
  loading: true,
  error: null
};

const productsReducer = (state = initialState, action: ActionModel) => {
  switch (action.type) {
    case Products.REQUESTED:
      return {
        products: {},
        loading: true,
        error: null
      };
    case Products.LOADED:
      return {
        products: action.payload,
        loading: false,
        error: null
      };
    case Products.ERROR:
      return {
        products: {},
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default productsReducer;
