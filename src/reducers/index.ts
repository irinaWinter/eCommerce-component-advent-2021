import { combineReducers } from 'redux';
// import { ProductsModel } from '../interfaces/ProductsModel';
import productsReducer from './products';

export const rootReducer = combineReducers({ products: productsReducer });

export interface RootState {
    products: {products, loading}
    loading: boolean
}
