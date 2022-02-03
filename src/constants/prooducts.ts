interface ProductsActionsModel {
    REQUESTED: string,
    LOADED: string,
    ERROR: string,
}

const Products: ProductsActionsModel = {
    REQUESTED: "PRODUCTS_REQUESTED",
    LOADED: "PRODUCTS_LOADED",
    ERROR: "PRODUCTS_ERROR",
}

export default Products;