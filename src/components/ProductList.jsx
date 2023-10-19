import React from 'react';
import Product from './Product';

function ProductList() {
  const products = [];

  for (let i = 1; i <= 100; i++) {
    products.push({ id: i, name: `Product ${i}`, price: i * 10 });
  }

  return (
    <div>
      <h2>Liste des produits :</h2>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
