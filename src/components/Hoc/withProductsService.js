import React from 'react';
import { ProductsServiceConsumer } from '..';

const withProductsService = () => (Wrapper) => {
  return (props) => {
    return (
      <ProductsServiceConsumer>
        {(productsApiService) => {
          return <Wrapper {...props} productsApiService={productsApiService} />;
        }}
      </ProductsServiceConsumer>
    );
  };
};

export default withProductsService;
