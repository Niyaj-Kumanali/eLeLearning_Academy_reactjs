import React from "react";
import { Link } from "react-router-dom";
import './Footer.css';
import logo from '../../assets/elearning-logo.png'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <Link to="/"><img src={logo} alt="Company Logo" /></Link>
                    <p>eLearning Academy</p>
                </div>
                <div className="footer-links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/courses">Courses</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
                <div className="footer-contact">
                    <h4>Contact Us</h4>
                    <address>
                        <p>BTM 1st stage</p>
                        <p>Bangaluru, India</p>
                        <p>Email: niyajkumanali@gmail.com</p>
                        <p>Phone: +918217097121</p>
                    </address>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} eLearning Academy. All Rights Reserved.</p>
            </div>
        </footer>
    );
}
