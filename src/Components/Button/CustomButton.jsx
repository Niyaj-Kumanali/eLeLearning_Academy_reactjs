import React from "react";
import './CustomButton.css';

export default function CustomButton({ text, color, backgroundColor }) {
    return (
        <button style={{
            color: color,
            backgroundColor: backgroundColor,
        }}>
            <strong>{text}</strong>
        </button>
    );
}
