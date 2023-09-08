import React, { useState } from "react";
import { Link } from "react-router-dom";
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
      <Link to="/">
        <img src={logo} alt="E-Learning Logo" />
      </Link>
      <Link to="/category"><div className="nav-link">Categories</div></Link>
      <div className="nav-link">
        <input
          type="search"
          placeholder="Search for Anything"
          value={value}
          onClick={handleClick}
          onChange={handleChange}
        />
      </div>
      <Link to="/contact"><div className="nav-link">Contact</div></Link>
      <Link to="/about"><div className="nav-link">About Us</div></Link>
      <div className="nav-link">
        <i className="fa-solid fa-cart-shopping"></i>
      </div>
      <div className="nav-link">
        <Link to="/signin"><CustomButton text="Log in" color="#000" backgroundColor="#fff" /></Link>
      </div>
      <div className="nav-link">
        <Link to="/signup"><CustomButton text="Sign up" /></Link>
      </div>

    </nav>
  );
}
