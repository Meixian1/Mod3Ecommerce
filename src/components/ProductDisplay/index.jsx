import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Products from '../ProductCreation'; 
import './style.css';
import CheckoutProcess from '../CheckoutProcess';
import { primaryContext } from '../context/primaryContext';

const ProductList = ({ productSubmitted }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const { products, setProducts } = useContext(primaryContext);

  // State to store the product being edited
  const [editedProduct, setEditedProduct] = useState(null);

  // Fetch products when the component mounts
  useEffect(() => {
    fetchProducts();
  }, []);

  // Function to fetch products
  const fetchProducts = async () => {
    try {
      const response = await axios.get('/server/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleDelete = async (productId) => {
    try {
      await axios.delete(`/server/products/${productId}`);
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product._id !== productId)
      );
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const handleToggleEdit = (product) => {
    // Set the product being edited
    setEditedProduct(product);
  };

  const handleUpdateProduct = async (product) => {
    try {
      const updatedProduct = await axios.put(
        `/server/products/${product._id}`,
        product
      );

      // Update the product in the state
      setProducts((prevProducts) =>
        prevProducts.map((prevProduct) =>
          prevProduct._id === updatedProduct._id ? updatedProduct : prevProduct
        )
      );
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  return (
    <div>
      <div className="productList-container">
        {products.map((product) => (
          <div key={product._id} className="product-entry">
            {/* Display the image */}
            <img
              src={product.image}
              alt="Product Image"
              style={{ maxWidth: '100%', maxHeight: '200px' }}
            />
            {editedProduct === product ? (
              // In edit mode
              <div>
                <input
                  name="name"
                  value={product.name}
                  onChange={(e) =>
                    setEditedProduct({
                      ...editedProduct,
                      name: e.target.value,
                    })
                  }
                />
                <input
                  name="description"
                  value={product.description}
                  onChange={(e) =>
                    setEditedProduct({
                      ...editedProduct,
                      description: e.target.value,
                    })
                  }
                />
                <input
                  name="color"
                  value={product.color}
                  onChange={(e) =>
                    setEditedProduct({
                      ...editedProduct,
                      color: e.target.value,
                    })
                  }
                />
                <input
                  name="weight"
                  value={product.weight}
                  onChange={(e) =>
                    setEditedProduct({
                      ...editedProduct,
                      weight: e.target.value,
                    })
                  }
                />
                <input
                  name="price"
                  value={product.price}
                  onChange={(e) =>
                    setEditedProduct({
                      ...editedProduct,
                      price: e.target.value,
                    })
                  }
                />
                <button
                  onClick={() => {
                    handleUpdateProduct(editedProduct);
                    setEditedProduct(null); // Exit edit mode
                  }}
                >
                  Update Product
                </button>
              </div>
            ) : (
              // In display mode
              <div>
                <p>Product Name: {product.name}</p>
                <p>Description: {product.description}</p>
                <p>Color: {product.color}</p>
                <p>Weight (lbs): {product.weight}</p>
                <p>Price ($): {product.price}</p>
                <button onClick={() => handleDelete(product._id)}>Delete</button>
                <button onClick={() => handleToggleEdit(product)}>Edit</button>
              </div>
            )}
          </div>
        ))}
      </div>

      {productSubmitted && (
        <div className="submittedProduct-container">
          <h2>Submitted Product</h2>
          <pre>{JSON.stringify(productSubmitted, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default ProductList;


// const ProductList = ({ productSubmitted }) => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [editInfo, setEditInfo] = useState(null);
//   const { products, setProducts } = useContext(primaryContext);

//   // State to store the product being edited
//   const [editedProduct, setEditedProduct] = useState(null);

//   // Fetch products when the component mounts
//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   // Function to fetch products
//   const fetchProducts = async () => {
//     try {
//       const response = await axios.get('/server/products');
//       setProducts(response.data);
//     } catch (error) {
//       console.error('Error fetching products:', error);
//     }
//   };

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

//   const handleUpdate = (product) => {
//     // Set the product being edited
//     setEditInfo(product);
//     // Set the edited product to a copy of the current product
//     setEditedProduct({ ...product });
//   };

//   const handleUpdateProduct = async () => {
//     if (editedProduct) {
//       try {
//         const updatedProduct = await axios.put(
//           `/server/products/${editedProduct._id}`,
//           editedProduct
//         );

//         // Update the product in the state
//         setProducts((prevProducts) =>
//           prevProducts.map((product) =>
//             product._id === updatedProduct._id ? updatedProduct : product
//           )
//         );

//         // Clear the product being edited
//         setEditInfo(null);
//       } catch (error) {
//         console.error('Error editing product:', error);
//       }
//     }
//   };

//   return (
//     <div>
//       {/* Your search bar code here */}
//       {/* Your product checkout form here */}

//       <form>
//         {editInfo && (
//           <div className="productUpdate-container">
//             {/* Display the products to edit */}
//             <div key={editInfo._id} className="product-enter">
//               {/* Display the image */}
//               <img
//                 src={editInfo.image}
//                 alt="Product Image"
//                 style={{ maxWidth: '100%', maxHeight: '200px' }}
//               />
//               <input
//                 name="name"
//                 value={editedProduct.name}
//                 onChange={(e) =>
//                   setEditedProduct({ ...editedProduct, name: e.target.value })
//                 }
//               />
//               <input
//                 name="description"
//                 value={editedProduct.description}
//                 onChange={(e) =>
//                   setEditedProduct({
//                     ...editedProduct,
//                     description: e.target.value,
//                   })
//                 }
//               />
//               <input
//                 name="color"
//                 value={editedProduct.color}
//                 onChange={(e) =>
//                   setEditedProduct({ ...editedProduct, color: e.target.value })
//                 }
//               />
//               <input
//                 name="weight"
//                 value={editedProduct.weight}
//                 onChange={(e) =>
//                   setEditedProduct({ ...editedProduct, weight: e.target.value })
//                 }
//               />
//               <input
//                 name="price"
//                 value={editedProduct.price}
//                 onChange={(e) =>
//                   setEditedProduct({ ...editedProduct, price: e.target.value })
//                 }
//               />
//               <button onClick={handleUpdateProduct}>Update Product</button>
//             </div>
//           </div>
//         )}
//       </form>

//       <div className="productList-container">
//         {products.map((product) => (
//           <div key={product._id} className="product-entry">
//             {/* Display the image */}
//             <img
//               src={product.image}
//               alt="Product Image"
//               style={{ maxWidth: '100%', maxHeight: '200px' }}
//             />
//             <p>Product Name: {product.name}</p>
//             <p>Description: {product.description}</p>
//             <p>Color: {product.color}</p>
//             <p>Weight (lbs): {product.weight}</p>
//             <p>Price ($): {product.price}</p>
//             <button onClick={() => handleDelete(product._id)}>Delete</button>
//             <button onClick={() => handleUpdate(product)}>Edit</button>
//           </div>
//         ))}
//       </div>

//       {productSubmitted && (
//         <div className="submittedProduct-container">
//           <h2>Submitted Product</h2>
//           <pre>{JSON.stringify(productSubmitted, null, 2)}</pre>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProductList;


// const ProductList = ({ productSubmitted }) => {
  
//   const [searchQuery, setSearchQuery] = useState('');
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [editInfo, setEditInfo] = useState(null)

//   const { products, setProducts } = useContext(primaryContext)

 

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

//   // const handleSearch = () => {
//   //   const searchWords = searchQuery ? searchQuery.toLowerCase() : '';
  
//   //   if (searchWords.trim() === '') {
//   //     setFilteredProducts(products);
//   //   } else {
//   //     const isNumber = !isNaN(searchWords); // Check if the search query is a number
  
//   //     const filtered = products.filter((product) =>
//   //       Object.values(product).some((value) => {
//   //         if (value) {
//   //           const text = value.toString().toLowerCase();
//   //           if (isNumber) {
//   //             return text === searchWords;
//   //           } else {
//   //             return text.includes(searchWords);
//   //           }
//   //         }
//   //         return false;
//   //       })
//   //     );
  
//   //     setFilteredProducts(filtered);
//   //   };
//   // };

//   const handleUpdate = async (product) => {
//     try {
//       // Assuming that you want to update the product using a PUT request
//       const updatedProduct = await axios.put(`/server/products/${product._id}`, product);
  
//       // After successfully editing the product, you can set the updated product in the state
//       setProducts((prevProducts) => {
//         const updatedProducts = prevProducts.map((prevProduct) => {
//           if (prevProduct._id === updatedProduct._id) {
//             // Replace the existing product with the updated product
//             return updatedProduct;
//           } else {
//             return prevProduct;
//           }
//         });
  
//         return updatedProducts;
//       });
  
//       // Optionally, clear the product being edited
//       setEditInfo(null);
//     } catch (error) {
//       console.error('Error editing product:', error);
//     }
//   };  
  
//   return (
//     <div>
      
//       {/* <div className='center-SearchBar'>
//         <input
//           type='text'
//           className='searchProducts'
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           placeholder="Search products"
//         />
//         <button onClick={handleSearch}>Search</button>
//       </div> */}
//       <div className='productCheckout-container'>
//         {/* <Products onProductCreated={(newProduct) => setProducts((prevProducts) => [...prevProducts, newProduct])} /> */}

//           {/* form here to update the clicked product */}
//           {/* make the inputs for the form and connect them to editInfo */}
          
//           <form>
//   {editInfo && (
//     <div className="productUpdate-container">
//       {products.map((product) => (
//         <div key={product._id} className="product-enter">
//           {/* Display the image using an <img> element with data URL (before product name) */}
//           <img
//             src={product.image}
//             alt="Product Image"
//             style={{ maxWidth: '100%', maxHeight: '200px' }}
//           />
//           <p>Product Name: {product.name}</p>
//           <p> Description: {product.description}</p>
//           <p>Color: {product.color}</p>
//           <p>Weight (lbs): {product.weight}</p>
//           <p>Price ($): {product.price}</p>
//           <button onClick={() => handleUpdate(product)}>Edit</button>
//         </div>
//       ))}
//       <div className="update-product-form">
//         <input
//           name="title"
//           value={editInfo.title}
//           onChange={(e) => setEditInfo({ ...editInfo, title: e.target.value })}
//         />
//         <input
//           name="description"
//           value={editInfo.description}
//           onChange={(e) =>
//             setEditInfo({ ...editInfo, description: e.target.value })
//           }
//         />
//         <input
//           name="color"
//           value={editInfo.color}
//           onChange={(e) => setEditInfo({ ...editInfo, color: e.target.value })}
//         />
//         <input
//           name="weight"
//           value={editInfo.weight}
//           onChange={(e) => setEditInfo({ ...editInfo, weight: e.target.value })}
//         />
//         <input
//           name="price"
//           value={editInfo.price}
//           onChange={(e) => setEditInfo({ ...editInfo, price: e.target.value })}
//         />
//         <button onClick={() => handleUpdateProduct(editInfo)}>Update Product</button>
//       </div>
//     </div>
//   )}
// </form>
//        <div className='productList-container'>
//           {products.map((product) => (
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
//               <button onClick={() => handleUpdate(product)}>Edit</button>
//             </div>
//           ))}

//           {/* {productSubmitted && (
//             <div className='submittedProduct-container'>
//               <h2>Submitted Product</h2>
//               <pre>{JSON.stringify(productSubmitted, null, 2)}</pre>
//             </div>
//           )} */}
//         </div>
        
//         {/* <div> {<CheckoutProcess/>}</div> */}
//       </div>
//     </div>
//   );
// };

// export default ProductList;
