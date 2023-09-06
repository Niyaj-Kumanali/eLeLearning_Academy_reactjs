import React from "react";
import './CustomButton.css';

export default function CustomButton({ text, color = "#fff", backgroundColor = "#000" }) {
    const buttonStyle = {
        color: color,
        backgroundColor: backgroundColor,
        border: "1px solid " + color,
        transition: "background-color 0.3s, border-color 0.3s",
    };

    return (
        <button style={buttonStyle} className="custom-button">
            <strong>{text}</strong>
        </button>
    );
}
