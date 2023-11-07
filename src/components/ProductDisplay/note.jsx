// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Products from '../ProductCreation'; 
// import './style.css';
// import CheckoutProcess from '../CheckoutProcess';

// const ProductList = ({ productSubmitted }) => {
//   const [products, setProducts] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [filteredProducts, setFilteredProducts] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get('/server/products');
//         setProducts(response.data);
//         setFilteredProducts(response.data);
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       }
//     };
//     fetchProducts();
//   }, []);

//   const handleDelete = async (productId) => {
//     try {
//       await axios.delete(`/server/products/${productId}`);
//       setProducts((prevProducts) =>
//         prevProducts.filter((product) => product._id !== productId)
//       );
//     } catch (error) {
//       console.error('Error deleting product:', error);
//     }
//   };

//   const handleSearch = () => {
//     const searchWords = searchQuery ? searchQuery.toLowerCase() : '';
  
//     if (searchWords.trim() === '') {
//       setFilteredProducts(products);
//     } else {
//       const isNumber = !isNaN(searchWords); // Check if the search query is a number
  
//       const filtered = products.filter((product) =>
//         Object.values(product).some((value) => {
//           if (value) {
//             const text = value.toString().toLowerCase();
//             if (isNumber) {
//               return text === searchWords;
//             } else {
//               return text.includes(searchWords);
//             }
//           }
//           return false;
//         })
//       );
  
//       setFilteredProducts(filtered);
//     };
//   };
  
  
//   return (
//     <div>
//       <div className='center-SearchBar'>
//         <input
//           type='text'
//           className='searchProducts'
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           placeholder="Search products"
//         />
//         <button onClick={handleSearch}>Search</button>
//       </div>
//       <div className='productCheckout-container'>
//         <Products onProductCreated={(newProduct) => setProducts((prevProducts) => [...prevProducts, newProduct])} />

//         <div className='productList-container'>
//           {filteredProducts.map((product) => (
//             <div key={product._id} className='product-entry'>
//               {/* Display the image using an <img> element with data URI (before product name) */}
//               <img
//                 src={product.image} // Use the image data directly
//                 alt="Product Image"
//                 style={{ maxWidth: '100%', maxHeight: '200px' }}
//               />

//               <p>Product Name: {product.name}</p>
//               <p> Description: {product.description}</p>
//               <p>Color: {product.color}</p>
//               <p>Weight (lbs): {product.weight}</p>
//               <p>Price ($): {product.price}</p>
//               <button onClick={() => handleDelete(product._id)}>Delete</button>
//             </div>
//           ))}

//           {productSubmitted && (
//             <div className='submittedProduct-container'>
//               <h2>Submitted Product</h2>
//               <pre>{JSON.stringify(productSubmitted, null, 2)}</pre>
//             </div>
//           )}
//         </div>
        
//         <div> {<CheckoutProcess/>}</div>
//       </div>
//     </div>
//   );
// };

// export default ProductList;
