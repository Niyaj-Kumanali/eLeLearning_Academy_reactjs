import React from "react";
import './Course.css';

export default function Course({ img, name, author, price, originalPrice }) {
    return (
        <div className="course-card">
            <figure className="course-image">
                <img src={img} alt={`Course: ${name}`} />
            </figure>
            <div className="course-details">
                <h3 className="course-title">{name}</h3>
                <p className="course-author">{author}</p>
                <div className="course-price">
                    <span className="current-price">&#8377; {price}</span>
                    {originalPrice && <span className="original-price">&#8377; {originalPrice}</span>}
                </div>
            </div>
        </div>
    );
}
