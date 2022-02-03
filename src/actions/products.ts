import Products from '../constants/prooducts';

export const productsRequested = () => {
    return {
        type: Products.REQUESTED,
    };
};

export const productsLoaded = (products) => {
    return {
        type: Products.LOADED,
        payload: products
    };
};

export const productsError = (error) => {
    return {
        type: Products.ERROR,
        payload: error
    };
};
