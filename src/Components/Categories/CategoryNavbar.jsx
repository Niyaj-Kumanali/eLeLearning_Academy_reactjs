import React from "react";
import './CategoryNavbar.css';

const categories = ["Java", "Python", "HTML", "CSS", "JavaScript"];

export default function CategoryNavbar() {
    return (
        <nav className="category-navbar">
            <ul className="category-list">
                {categories.map((category, index) => (
                    <li key={index} className="category-item">
                        {category}
                    </li>
                ))}
            </ul>
        </nav>
    );
}
