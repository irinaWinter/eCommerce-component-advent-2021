import Cart from '../constants/cart';

export const cartRequested = () => {
    return {
        type: Cart.REQUESTED,
    };
};

export const cartLoaded = (cart) => {
    return {
        type: Cart.LOADED,
        payload: cart
    };
};

export const cartUpdated = (cart) => {
    return {
        type: Cart.UPDATED,
        payload: cart
    };
};

export const cartError = (error) => {
    return {
        type: Cart.ERROR,
        payload: error
    };
};
