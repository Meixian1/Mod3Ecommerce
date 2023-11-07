import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import HomePage from './components/Home';
import Contact from './components/Contact';
import ProductCreation from './components/ProductCreation'; 
import ProductDisplay from './components/ProductDisplay';
import CheckoutProcess from './components/CheckoutProcess';
import Images from './components/Images';
import ImageUploader from './components/ImageUploader';
import ProductPlaceholder from './components/ProductPlaceholder'; // Correct the import
import ProductDisplayCards from './components/ProductDisplayCards'; // Correct the import

function App() {
  const [uploadedImages, setUploadedImages] = useState([]);
  const [cartItems, setCartItems] = useState([]); // Define cartItems state

  const handleImagesUploaded = (images) => {
    // Update the uploadedImages state
    setUploadedImages(images);
  };

  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const handleRemoveFromCart = (item) => {
    const updatedCartItems = cartItems.filter((cartItem) => cartItem.title !== item.title);
    setCartItems(updatedCartItems);
  };

  return (
    <div>
      <div>
        <Router>
          <NavBar />
          <Routes>
            {/* <Route path="/" element={<HomePage />} /> */}
            <Route path="/products" element={<ProductCreation />} />
            {/* <Route path="/contact" element={<Contact />} /> */}
            {/* <Route path="/images" element={<ImageUploader onImagesUploaded={handleImagesUploaded} />} /> */}
            {/* <Route path="/products" element={<ProductDisplayCards onAddToCart={handleAddToCart} onRemoveFromCart={handleRemoveFromCart} />} />
            <Route path="/checkout" element={<CheckoutProcess cartItems={cartItems} />} /> Pass cartItems to CheckoutProcess */}
          </Routes>
        </Router>
      </div>
      <div>
          {/* <HomePage/> */}
        <ProductCreation/>
        {/* <CheckoutProcess/>
         <Contact/>   */}
      </div>
    </div>
  );
}

export default App;

