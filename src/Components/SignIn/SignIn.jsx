import React from "react";
import { Link } from "react-router-dom";

import './SignIn.css';
import CustomButton from "../Button/CustomButton";

class SignIn extends React.Component {
   
    render(){
        return (
            <section className="signIn-container">
                <h2 className="signIn-heading">Sign In</h2>
                <p className="signIn-subheading">Log in to your account</p>

                <input className="signIn-email" type="email" placeholder="Email" />
                <input className="signIn-password" type="password" placeholder="Password" />
                <p >Don't have an account? <Link to="/signup">Sign up</Link></p>
                <p><a href="/">Forgot Password?</a></p>
                <CustomButton text="Sign In" />
            </section>
        )
    }
}

export default SignIn;