import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';
import ProductList from '../ProductDisplay';

const Products = ({ onProductCreated }) => {
  const [productAttributes, setProductAttributes] = useState({
    image: "", // Add an image field
    name: '',
    description: '',
    color: '',
    size: '',
    weight: '',
    price: 0,
  });

  // const [selectedImage, setSelectedImage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductAttributes((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios({
        method: "POST",
        url: "/server/products",
        data: productAttributes
      });
  
      if (response.status >= 200 && response.status < 300) {
        setProductAttributes({
          image: "",
          name: '',
          description: '',
          color: '',
          size: '',
          weight: '',
          price: 0,
        });
  
        // Pass the newly created product data to the parent component (ProductList)
        onProductCreated(response.data); // This line sends the data to ProductList
  
        console.log('Product registered successfully:', response.data);
      } else {
        console.error('Error registering product:', response.data);
      }
    } catch (error) {
      console.error('There was an error sending the request:', error);
    }
  };
  

  // const handleImageUpload = (e) => {
  //   const file = e.target.files[0];
  //   const validImageTypes = ['image/jpeg', 'image/jpg', 'image/png'];
  //   if (file instanceof Blob || file instanceof File) {
  //     // Set the selected image
  //     setSelectedImage(URL.createObjectURL(file));

  //     // Update the image field in the productAttributes
  //     setProductAttributes((prevState) => ({
  //       ...prevState,
  //       image: file,
  //     }));
  //   } else {
  //     console.error('Invalid file selected.');
  //   }
  // };


  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   console.log('Submit button clicked'); // Add this line
  // // ...
  
  //   try {
  //     const response = await axios({
  //       method: "POST",
  //       url: "/server/products",
  //       data: productAttributes
  //     });

  //     if (response.status >= 200 && response.status < 300) {
  //       setProductAttributes({
  //         image: "",
  //         name: '',
  //         description: '',
  //         color: '',
  //         size: '',
  //         weight: '',
  //         price: 0,
  //       });
  //       // ! also !!!! add to local state so we see this product now

  //       // Pass the newly created product data to the parent component (ProductList)
  //       onProductCreated(response.data);
  //       console.log('Product registered successfully:', response.data);
  //     } else {
  //       console.error('Error registering product:', response.data);
  //     }
  //   } catch (error) {
  //     console.error('There was an error sending the request:', error);
  //   }
  // };

  return (
    <div className='product-container'>
      <div className='custom-Column'>
      <h1 className='product-Heading'><strong>Product Customization</strong></h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="image">Product Image:</label>
          <input
            type="text"
            id="image"
            name="image"
            onChange={handleInputChange}
          />
          {productAttributes.image && (
            <img
              src={productAttributes.image}
              alt="Selected Product Image"
              style={{ maxWidth: '100%', maxHeight: '200px' }}
            />
          )}
        </div>
        <br />
        <div>
          <label htmlFor="name">Product Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={productAttributes.name}
            onChange={handleInputChange}
          />
        </div>
        <br />
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={productAttributes.description}
            onChange={handleInputChange}
          />
        </div>
        <br />
        <div>
          <label htmlFor="color">Color:</label>
          <input
            type="text"
            id="color"
            name="color"
            value={productAttributes.color}
            onChange={handleInputChange}
          />
        </div>
        <br />
        <div>
          <label htmlFor="size">Size:</label>
          <input
            type="number"
            id="size"
            name="size"
            value={productAttributes.size}
            onChange={handleInputChange}
          />
        </div>
        <br />
        <div>
          <label htmlFor="weight">Weight (lbs):</label>
          <input
            type="number"
            id="weight"
            name="weight"
            value={productAttributes.weight}
            onChange={handleInputChange}
          />
        </div>
        <br />
        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={productAttributes.price}
            onChange={handleInputChange}
          />
        </div>
       
        <br />
        <button type="submit">Submit</button>
      </form>
      </div>
      <div><ProductList /></div>
    </div>
  );
};

export default Products;
