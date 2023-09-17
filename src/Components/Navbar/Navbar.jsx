import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/elearning-logo.png";

export default function Navbar() {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearch = () => {
    if (searchValue.trim() !== "") {
      console.log("Searching for:", searchValue);
    } else {
      console.log("Search value is empty.");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <nav className="nav">
      <Link to="/">
        <img src={logo} alt="E-Learning Logo" />
      </Link>
      <Link to="/category">
        <div className="nav-link">Categories</div>
      </Link>
      <div className="nav-link">
        <div className="search-container">
          <input
            type="search"
            placeholder="Search for Anything"
            value={searchValue}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
          />
          <button onClick={handleSearch} className="search-button">
            <i className="fa-solid fa-search"></i>
          </button>
        </div>
      </div>
      <Link to="/contact">
        <div className="nav-link">Contact</div>
      </Link>
      <Link to="/about">
        <div className="nav-link">About Us</div>
      </Link>
      <div className="nav-link">
        <i className="fa-solid fa-cart-shopping"></i>
      </div>
      <div className="nav-link">
        <Link to="/signin">
          <button className="myButton"><strong>Log In</strong></button>
        </Link>
      </div>
      <div className="nav-link">
        <Link to="/signup">
        <button className="myButton"><strong>Sign Up</strong></button>
        </Link>
      </div>
    </nav>
  );
}
