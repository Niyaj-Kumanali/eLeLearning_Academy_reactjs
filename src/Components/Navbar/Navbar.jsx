import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/elearning-logo.png";
import CustomButton from "../Button/CustomButton";

export default function Navbar() {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleClick = () => {
    setValue("");
  };

  return (
    <nav className="nav">
      <a href="/">
        <img src={logo} alt="E-Learning Logo" />
      </a>
      <div className="nav-link">Categories</div>
      <div className="nav-link">
        <input
          type="search"
          placeholder="Search for Anything"
          value={value}
          onClick={handleClick}
          onChange={handleChange}
        />
      </div>
      <div className="nav-link">Udemy Business</div>
      <div className="nav-link">Teach on Udemy</div>
      <div className="nav-link">
        <i className="fa-solid fa-cart-shopping"></i>
      </div>
      <div className="nav-link">
        <CustomButton text="Log in" color="#000" backgroundColor="#fff" />
      </div>
      <div className="nav-link">
        <CustomButton text="Sign up" />
      </div>
      <div className="nav-link">
        <CustomButton text={<i className="fa-solid fa-globe"></i>} color="#000" backgroundColor="#fff"/>    
      </div>
    </nav>
  );
}
