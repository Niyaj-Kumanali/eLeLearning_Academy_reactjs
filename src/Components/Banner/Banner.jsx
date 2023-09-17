import React from "react";
import './Banner.css';

import bannerImage from '../../assets/banner.jpg';

export default function Banner() {
    return (
        <section className="banner">
            <div className="banner-content">
                <h1>Unlock Your Potential</h1>
                <p>Discover a world of knowledge without boundaries.</p>
                <button className="myButton"><strong>Learn More</strong></button>
            </div>
            <div className="banner-image">
                <img src={bannerImage} alt="E-Learning Academy Banner" />
            </div>
        </section>
    );
}
