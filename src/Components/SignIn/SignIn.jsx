import React from "react";
import { Link } from "react-router-dom";

import './SignIn.css';

class SignIn extends React.Component {
    state = {
        email: "",
        password: ""
    }
    render() {
        const handleEmailChange = (e) => {
            this.setState({
                email: e.target.value
            });
        }

        const handlePasswordChange = (e) => {
            this.setState({
                password: e.target.value
            });
        }

        const handleSubmit = () => {
            if (this.state.email === "niyaj@gmail.com" && this.state.password === "niyaj123") {
                alert("The user is successfully logged in");
            }
            else {
                alert("Check your email or password");
            }
        }
        return (
            <section className="signIn-container">
                <h2 className="signIn-heading">Sign In</h2>
                <p className="signIn-subheading">Log in to your account</p>

                <input className="signIn-email" type="email" placeholder="Email" value={this.state.email} onChange={handleEmailChange} />
                <input className="signIn-password" type="password" placeholder="Password" value={this.state.password} onChange={handlePasswordChange} />
                <p >Don't have an account? <Link to="/signup">Sign up</Link></p>
                <p><a href="/">Forgot Password?</a></p>
                <button className="myButton" onClick={handleSubmit}>
                    <strong>Sign In</strong>
                </button>
            </section>
        )
    }
}

export default SignIn;