import React from 'react';
import './Product.css'; 

function Product({ product }) {
  return (
    <div className="product-box">
      <h3 className="product-name">{product.name}</h3>
      <p className="product-price">Prix : {product.price} €</p>
    </div>
  );
}

export default Product;
