import React, { useState } from 'react';
import './style.css';

const CheckoutProcess = () => {
  const [cart, setCart] = useState(0); // Initialize the cart with 0 items

  const [itemValues, setItemValues] = useState({ item1: 0, item2: 0 }); // Initialize input values

  const handleAddToCart = (itemName) => {
    setItemValues((prevValues) => {
      const updatedValues = { ...prevValues, [itemName]: prevValues[itemName] + 1 };
      return updatedValues;
    });
  };

  const handleRemoveFromCart = (itemName) => {
    if (itemValues[itemName] > 0) {
      setItemValues((prevValues) => {
        const updatedValues = { ...prevValues, [itemName]: prevValues[itemName] - 1 };
        return updatedValues;
      });
    }
  };

  const calculateTotalItems = () => {
    // Calculate the total number of items based on itemValues
    const total = Object.values(itemValues).reduce((acc, curr) => acc + curr, 0);
    return total;
  };

  const calculateTotalPayment = () => {
    // Calculate the total payment based on the number of items and their prices
    const item1Price = ''; // Price of Item 1
    const item2Price = ''; // Price of Item 2
    const totalPayment = itemValues.item1 * item1Price + itemValues.item2 * item2Price;
    return totalPayment;
  };

  return (
    <div className="checkout-container">
      <h2>Shopping Cart</h2>
      <p>Total Items in Cart: {calculateTotalItems()}</p>
      <div>
        <ul>
          <li>
            <h1>Item 1</h1>
            <button onClick={() => handleAddToCart('item1')}>Add</button>
            <input type="text" value={itemValues.item1} readOnly />
            <button onClick={() => handleRemoveFromCart('item1')}>Remove</button>
          </li>
          <li>
            <h1>Item 2</h1>
            <button onClick={() => handleAddToCart('item2')}>Add</button>
            <input type="text" value={itemValues.item2} readOnly />
            <button onClick={() => handleRemoveFromCart('item2')}>Remove</button>
          </li>
        </ul>
      </div>
      <div>
        <p>Total Payment: ${calculateTotalPayment()}</p>
        <button>Proceed to Checkout</button>
        <h2>Payment</h2>
      </div>
    </div>
  );
};

export default CheckoutProcess;
