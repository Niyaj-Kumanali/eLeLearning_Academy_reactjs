import React from "react";
import './Banner.css';

import banner from '../../assets/banner.jpg'
import CustomButton from "../Button/CustomButton";

export default function Banner()
{
    return (
        <div className="banner">
            <div className="banner-txt">
            <p>Unlock Your Potential with eLearning Academy, where Learning knows no boundaries.</p> <br />
            <CustomButton text="Learn More"/>

            </div>
            <div className="banner-img">
                <img src={banner} alt="" />
            </div>
        </div>
    );
}