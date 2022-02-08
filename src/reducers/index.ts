import { combineReducers } from 'redux';
import productsReducer from './products';
import cartReducer from './cart';
import taxReducer from './tax';


export const rootReducer = combineReducers({ products: productsReducer, cart: cartReducer, tax: taxReducer });

export interface RootState {
    products: {products, loading},
    cart: {products, loading}
    loading: boolean,
    tax: {tax}
}
