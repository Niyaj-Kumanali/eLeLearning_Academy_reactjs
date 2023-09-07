import React from "react";

import './SignUp.css';
import CustomButton from "../Button/CustomButton";
import { Link } from "react-router-dom";

class SignUp extends React.Component {
   
    render(){
        return (
            <section className="signUp-container">
                <h2 className="signUp-heading">Sign Up</h2>
                <input className="signUp-name" type="text" placeholder="Full Name"/>
                <input className="signUp-email" type="email" placeholder="Email" />
                <input className="signUp-password" type="password" placeholder="Enter Password" />
                <input className="signUp-password" type="password" placeholder="Confirm Password" />

                <p >Already have a account? <Link to="/signin">sign in</Link></p>
                <CustomButton text="Sign In" />
            </section>
        )
    }
}

export default SignUp;