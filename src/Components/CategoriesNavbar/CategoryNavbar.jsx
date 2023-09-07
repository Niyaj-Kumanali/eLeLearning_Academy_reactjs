import React from "react";
import { Link } from "react-router-dom";
import './CategoryNavbar.css';

const categories = ["All", "Java", "Python", "HTML", "CSS", "JavaScript"];

export default function CategoryNavbar() {
    return (
        <nav className="category-navbar">
            <ul className="category-list">
                {categories.map((category, index) => (
                    <li key={index} className="category-item">
                        <Link to={`/category/${category}`}>{category}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
