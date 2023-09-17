import React from "react";

import './SignUp.css';
import { Link } from "react-router-dom";

class SignUp extends React.Component {
   
    render(){
        return (
            <section className="signUp-container">
                <h2 className="signUp-heading">Sign Up</h2>
                <p className="signIn-subheading">Sign up and start your learning journey</p>
                <input className="signUp-name" type="text" placeholder="Full Name"/>
                <input className="signUp-email" type="email" placeholder="Email" />
                <input className="signUp-password" type="password" placeholder="Enter Password" />
                <input className="signUp-password" type="password" placeholder="Confirm Password" />

                <p >Already have a account? <Link to="/signin">sign in</Link></p>
                <button className="myButton"><strong>Sign In</strong></button>
            </section>
        )
    }
}

export default SignUp;