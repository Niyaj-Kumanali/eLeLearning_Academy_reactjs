import React from "react";
import './UserAccount.css';

class UserAccount extends React.Component {
    render(){

        return(
            <div className="user-account">
                <h1>User Account Details</h1>
                <input type="text" placeholder="Name"/>
                <input type="email" placeholder="Email"/>
                <textarea className="description" name="description" placeholder={"Write About Yourself"} cols={100} rows={10}/>
            </div>
        );
    }
        
}

export default UserAccount;