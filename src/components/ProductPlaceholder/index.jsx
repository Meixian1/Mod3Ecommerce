import React from 'react';

const ProductPlaceholder = ({ image, title, description, price }) => {
  return (
    <div className="product-card">
      <img src={image} alt="Product" />
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{price}</p>
    </div>
  );
};

export default ProductPlaceholder;