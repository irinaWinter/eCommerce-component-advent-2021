import products from '../data/products.json'

export default class ProductsApiService {
    getProducts = () => new Promise((resolve) => {
        setTimeout(() => resolve(products), 1500)
    })
}
