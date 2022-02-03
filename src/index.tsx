import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { App, ErrorBoundry } from './components';
import ProductsApiService from './services/products.js'
import {ProductsServiceProvider} from './components/ProductsServiceProvider'

import store from './store'
import './assets/styles/styles.css'

const productsApiService = new ProductsApiService();

ReactDOM.render(
  <Provider store={store}>
    <ProductsServiceProvider value={productsApiService}>
      <ErrorBoundry>
        <App />
      </ErrorBoundry>
    </ProductsServiceProvider>
  </Provider>,
  document.getElementById('root')
);

