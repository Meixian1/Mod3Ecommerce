import React, { useState } from 'react';
import ProductPlaceholder from '../ProductPlaceholder';
import './style.css';

const placeholderImage = 'path_to_placeholder_image';

const ProductDisplayCards = ({ uploadedImages, userRole }) => {
  const [products, setProducts] = useState([]
    // Array.from({ length: 16 }).map((_, index) => ({
    //   id: index,
    //   image: uploadedImages[index] || placeholderImage,
    //   title: 'Product Title',
    //   description: 'Product Description',
    //   price: '$10.00',
    //   cartCount: 0,
    // }))
  );

 

  const handleAddToCart = (id) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, cartCount: product.cartCount + 1 } : product
      )
    );
  };

  const handleRemoveFromCart = (id) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id && product.cartCount > 0
          ? { ...product, cartCount: product.cartCount - 1 }
          : product
      )
    );
  };

  return (
    <div className="product-display-4x4">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt="Product" />
          <h3>
            {userRole === 'owner' ? (
              <input
                type="text"
                value={product.title}
                onChange={(e) => handleTitleChange(product.id, e.target.value)}
              />
            ) : (
              product.title
            )}
          </h3>
          <p>
            {userRole === 'owner' ? (
              <input
                type="text"
                value={product.description}
                onChange={(e) => handleDescriptionChange(product.id, e.target.value)}
              />
            ) : (
              product.description
            )}
          </p>
          <p>
            {userRole === 'owner' ? (
              <input
                type="text"
                value={product.price}
                onChange={(e) => handlePriceChange(product.id, e.target.value)}
              />
            ) : (
              product.price
            )}
          </p>
          <p>Cart Quantity: {product.cartCount}</p>
          <button onClick={() => handleAddToCart(product.id)}>➕</button> {/* Use Unicode character for + */}
          <button onClick={() => handleRemoveFromCart(product.id)}>➖</button> {/* Use Unicode character for - */}
        </div>
      ))}
    </div>
  );
};

export default ProductDisplayCards;
