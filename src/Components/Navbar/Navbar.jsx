import React, { useState } from "react";
import './Navbar.css';
import logo from '../../assets/elearning-logo.png';
import CustomButton from "../Button/CustomButton";

export default function Navbar() {
  const [value, setValue] = useState("Search for Anything");

  const handleChange = (event) =>{
    setValue(event.target.value);
  }

  const handleClick = () =>{
    setValue("");
  }
  return (
    <div className="nav">
      <a href=""><img src={logo} alt="logo" /></a>
      <div className="nav-link">Categories</div>
      <div className="nav-link"><input type="search" value={value} onClick={handleClick} onChange={handleChange}/></div>
      <div className="nav-link">Udemy Business</div>
      <div className="nav-link">Teach on udemy</div>
      <div className="nav-link"><i className="fa-light fa-solid fa-cart-shopping"></i></div>
      <div className="nav-link"><CustomButton text="Log in" color='#000' backgroundColor='#fff' /></div>
      <div className="nav-link"><button><strong>Sign Up</strong></button></div>
      <div className="nav-link"><button><i className="fa-light fa-solid fa-globe"></i></button></div>
      {/* <div className="nav-link">My learning</div>
      <div className="nav-link"><i className="fa-sharp fa-regular fa-heart"></i></div>
      <div className="nav-link"><i className="fa-light fa-regular fa-bell"></i></div> */}
    </div>
  );
}
