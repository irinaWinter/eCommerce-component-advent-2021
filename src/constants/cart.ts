interface CartActionsModel {
    REQUESTED: string,
    LOADED: string,
    UPDATED: string,
    ERROR: string,
}

const Cart: CartActionsModel = {
    REQUESTED: "CART_REQUESTED",
    LOADED: "CART_LOADED",
    UPDATED: "CART_UPDATED",
    ERROR: "CART_ERROR",
}

export default Cart;