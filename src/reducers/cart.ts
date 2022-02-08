import Cart from '../constants/cart';
import { ActionModel } from '../interfaces/actionModel';
import { ProductsStateModel } from '../interfaces/ProductsStateModel';

const initialState: ProductsStateModel = {
  products: {},
  loading: true,
  error: null,
};

const cartReducer = (state = initialState, action: ActionModel) => {
  switch (action.type) {
    case Cart.REQUESTED:
      return {
        products: {},
        loading: true,
        error: null
      };
    case Cart.LOADED:
      return {
        products: action.payload,
        loading: false,
        error: null
      };
    case Cart.UPDATED:
      return {
        products: action.payload,
        loading: false,
        error: null
      };
    case Cart.ERROR:
      return {
        products: {},
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default cartReducer;
