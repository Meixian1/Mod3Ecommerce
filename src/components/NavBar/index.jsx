import React from 'react';
import {Link, Routes} from 'react-router-dom';
import './style.css'


const NavBar = () => {

  return (
<div>
 <nav >
    <ul className= "NavBar" >
            <Link to="/"><strong>Home</strong></Link>
            <Link to="/products"><strong>Products</strong></Link>
            <Link to="/contact"><strong>Contact</strong></Link>
            {/* <Link to="/images"><strong>Images</strong></Link> */}
    </ul>
 </nav>
 </div>
  );
}

export default NavBar; 