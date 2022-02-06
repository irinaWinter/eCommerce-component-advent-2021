import { combineReducers } from 'redux';
// import { ProductsModel } from '../interfaces/ProductsModel';
import productsReducer from './products';
import cartReducer from './cart';

export const rootReducer = combineReducers({ products: productsReducer, cart: cartReducer });

export interface RootState {
    products: {products, loading},
    cart: {products, loading}
    loading: boolean
}
