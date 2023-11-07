import React, {useState, useContext} from 'react';
import primaryContext from '../context/primaryContext'
import './style.css'
import ImageOne from '../Images/ImageOne.jpg'; 
import ImageTwo from '../Images/ImageTwo.jpg'; 
import ImageThree from '../Images/ImageThree.jpg'; 
import ImageFour from '../Images/ImageFour.jpg'; 
import ImageFive from '../Images/ImageFive.jpg'; 
import ImageSix from '../Images/ImageSix.jpg'; 
import ImageSeven from '../Images/ImageSeven.jpg'; 
import ImageEight from '../Images/ImageEight.jpg'; 
// import ImageNine from '../Images/ImageNine.jpg'; 
// import ImageTen from '../Images/ImageTen.jpg'; 
// import ImageEleven from '../Images/ImageEleven.jpg'; 
// import ImageTwelve from '../Images/ImageTwelve.jpg'; 
// import Image13 from '../Images/Image13.jpg'; 
// import Image14 from '../Images/Image14.jpg';
// import Image15 from '../Images/Image15.jpg';
// import Image16 from '../Images/Image16.jpg';  
// import Image17 from '../Images/Image17.jpg'; 
// import Image18 from '../Images/Image18.jpg'; 
// import Image19 from '../Images/Image19.jpg'; 
// import Image20 from '../Images/Image20.jpg'; 
// import Image21 from '../Images/Image21.jpg'; 
// import Image22 from '../Images/Image22.jpg'; 
// import Image23 from '../Images/Image23.jpg'; 
// import Image24 from '../Images/Image24.jpg'; 

const homeImages = [
  {
    title: "Red Goji",
    image: ImageOne,
  },
  {
    title: "Click to Resume",
    image: ImageTwo, 
  },
  {
    title: "Click to Resume",
    image: ImageThree, 
  },
  {
    title: "Click to Resume",
    image: ImageFour, 
  },
  {
    title: "Click to Resume",
    image: ImageFive, 
  },
  {
    title: "Click to Resume",
    image: ImageSix, 
  },
  {
    title: "Click to Resume",
    image: ImageSeven, 
  },
  {
    title: "Click to Resume",
    image: ImageEight, 
  },
  // {
  //   title: "Click to Resume",
  //   image: ImageNine, 
  // },
  // {
  //   title: "Click to Resume",
  //   image: ImageTen, 
  // },
  // {
  //   title: "Click to Resume",
  //   image: ImageEleven, 
  // },
  // {
  //   title: "Click to Resume",
  //   image: ImageTwelve, 
  // },
  // {
  //   title: "Click to Resume",
  //   image: Image13, 
  // },
  // {
  //   title: "Click to Resume",
  //   image: Image14, 
  // },
  // {
  //   title: "Click to Resume",
  //   image: Image15,
  // },
  // {
  //   title: "Click to Resume",
  //   image: Image16, 
  // },
  // {
  //   title: "Click to Resume",
  //   image: Image17, 
  // },
  // {
  //   title: "Click to Resume",
  //   image: Image18, 
  // },
  // {
  //   title: "Click to Resume",
  //   image: Image19, 
  // },
  // {
  //   title: "Click to Resume",
  //   image: Image20, 
  // },
  // {
  //   title: "Click to Resume",
  //   image: Image21, 
  // },
  // {
  //   title: "Click to Resume",
  //   image: Image22, 
  // },
  // {
  //   title: "Click to Resume",
  //   image: Image23, 
  // },
  // {
  //   title: "Click to Resume",
  //   image: Image24, 
  // },
];

const HomePage = () => {
  const [items, setItems] = useState({
    // name: '',
    // weight:'',
    // price:''
  })

  // const { items, setItems } = useContext(primaryContext);

  const handleAddToCart = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, cartCount: item.cartCount + 1 } : item
      )
    );
  };

  const handleRemoveFromCart = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.cartCount > 0
          ? { ...item, cartCount: item.cartCount - 1 }
          : item
      )
    );
  };

  const calculateTotalItems = () => {
    // Calculate the total number of items based on itemValues
    const total = Object.values(items).reduce((acc, curr) => acc + curr, 0);
    return total;
  };


  return (
    <div className='layoutContainer'>
      <h1 className='brandName'><strong>Welcome to Fanatic Tea</strong></h1>
      <div className="imageGrid">
        {homeImages.map((item) => (
          <div key={item.id}>
            <h2>{item.title}</h2>
            <img
              src={item.image}
              alt={item.title}
              className='homeImageSize'
            />
              <div>
              <p>Cart Quantity: {item.cartCount}</p>
              <button className='button1-center' onClick={() => handleAddToCart(item.id)}>➕</button>
              <input  className='readSpace' type="text" value={items.setItems} readOnly />
              <button className='button2-center' onClick={() => handleRemoveFromCart(item.id)}>➖</button>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;


// const HomePage = () => { 
//   const [item, setItem] = useState(
//     {
//       name: '',
//       weight: '',
//       price: 0,
//     }
//   )
  
//   const { products, setProducts } = useContext(primaryContext);

//   const handleAddToCart = (id) => {
//     setProducts((prevProducts) =>
//       prevProducts.map((product) =>
//         product.id === id ? { ...product, cartCount: product.cartCount + 1 } : product
//       )
//     );
//   };

//   const handleRemoveFromCart = (id) => {
//     setProducts((prevProducts) =>
//       prevProducts.map((product) =>
//         product.id === id && product.cartCount > 0
//           ? { ...product, cartCount: product.cartCount - 1 }
//           : product
//       )
//     );
//   };

//   return (
//     <div className='layoutContainer'>
//       <h1 className='brandName'><strong>Welcome to Fanatic Tea </strong></h1>
//       <div className="imageGrid">
//         {homeImages.map((item, index) => (
//           <div key={index}>
//             <h2>{item.title}</h2>

//             <img
//               src={item.image}
//               alt={item.title}
//               className='homeImageSize'
//             />
//             <div>
//               <p>Cart Quantity: {item.cartCount}</p> {/* Use 'item' instead of 'product' here */
//               <button onClick={() => handleAddToCart(item.id)}>➕</button>}{/* Use 'item.id' instead of 'product.id' */}
//               <button onClick={() => handleRemoveFromCart(item.id)}>➖</button> {/* Use 'item.id' instead of 'product.id' */}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HomePage;


// const HomePage = () => {


//   return (
    // <div className='layoutContainer'>
    //   <h1 className='brandName'><strong>Welcome to Fanatic Tea </strong></h1>
    //   <div className="imageGrid">
    //     {homeImages.map((item, index) => (
    //       <div key={index}>
    //         {/* <h2>{item.title}</h2> */}
    //         <img 
    //           src={item.image}
    //           alt={item.title}
    //           className='homeImageSize'
    //         />
    //       </div>
    //     ))}
    //   </div>
    //    </div>
    //   );
    // }

// export default HomePage;
