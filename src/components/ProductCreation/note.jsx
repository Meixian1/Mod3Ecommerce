
// import React, { useState } from 'react';
// import axios from 'axios';

// const Products = () => {
//   const [productAttributes, setProductAttributes] = useState({
//     name: '',
//     description: '',
//     color: '',
//     size: null,
//     weight: null,
//     price: 0,
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setProductAttributes((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };
            
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios({
//         method: "POST",
//         url: '/server/products', // Updated URL
//         data: productAttributes,
//       });
//       console.log(response);
  
//       if (response.status >= 200 && response.status < 300) {
//         setProductAttributes({
//           ...productAttributes,
//           ...response.data,
//         });
//         console.log('Product registered successfully:', response.data);
//       } else {
//         console.error('Error registering product:', response.data);
//       }
//     } catch (error) {
//       console.error('There was an error sending the request:', error);
//     }
//   };


//   return (
//     <div className='product-container'>
//         <h1>Create Products</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="name">Product Name:</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={productAttributes.name}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="description">Description:</label>
//           <textarea
//             id="description"
//             name="description"
//             value={productAttributes.description}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="color">Color:</label>
//           <input
//             type="text"
//             id="color"
//             name="color"
//             value={productAttributes.color}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="size">Size:</label>
//           <input
//             type="number"
//             id="size"
//             name="size"
//             value={productAttributes.size}
//             onChange={handleInputChange}
//           />
//         </div>
//         {/* <div>
//             <label htmlFor="size">Size:</label>
//             <select
                
//                 id="size"
//                 name="size"
//                 value={productAttributes.size}
//                 onChange={handleInputChange}
//             >
//                 <option value="S">Small</option>
//                 <option value="M">Medium</option>
//                 <option value="L">Large</option>
//             </select>
//         </div> */}

//         <div>
//           <label htmlFor="weight">Weight (lbs):</label>
//           <input
//             type="number" // Corrected from 'type=parseInt={string}'
//             id="weight"
//             name="weight"
//             value={productAttributes.weight}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="price">Price:</label>
//           <input
//             type="number" // Corrected from 'type=parseInt={string}'
//             id="price"
//             name="price"
//             value={productAttributes.price}
//             onChange={handleInputChange}
//           />
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default Products;