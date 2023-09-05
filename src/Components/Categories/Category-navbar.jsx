import React from "react";
import './Category-navbar.css';

export default function CategoryNavbar(){
    return (
        <div className="categories">
            <div className="cat-nav-link">Java</div>
            <div className="cat-nav-link">Python</div>
            <div className="cat-nav-link">HTML</div>
            <div className="cat-nav-link">CSS</div>
            <div className="cat-nav-link">JavaScript</div>
        </div>
    )
}