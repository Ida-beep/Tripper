import React, { useState } from 'react';
import { Parse } from 'parse';
import { useNavigate } from 'react-router-dom';
import API from '../API/API';


function Login(props){

    const [username,setUsername] = useState();
    const [password,setPassword] = useState();
    const navigate = useNavigate();

/*     function handleSignup(e){
        e.preventDefault();
        console.log("Signup was called");
        const user = new Parse.User();
        user.setPassword(password);
        user.setUsername(username);

        API.signup(username,password);
        console.log("user singed up!");
    }

    function handleLoginAttempt(e) {
        e.preventDefault();
        console.log("handleLoginAttempt was called")

        const user = new Parse.User();
        user.setPassword(password);
        user.setUsername(username);
        user.logIn().then((loggedInUser)=>{
            console.log(loggedInUser);
            navigate(`/`);
        }, (error)=>{
            alert("login not successfull with errorcode: " + error.code);
        }
        )
    } */

    return (
        <div className="login-container">
            <p className="logo-login">tripper</p>
                <div className="login-form">
                    <form onSubmit={handleLoginAttempt}>
                        <div className="long-input">
                            <label>
                                <p>Username</p>
                                <input type="text" value={username} onChange={(e)=> setUsername(e.target.value)} />
                            </label>
                        </div>
                        <div className="long-input">
                            <label>
                                <p>Password</p>
                                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                            </label>
                        </div>
                        <button className="button-extra-small" type="submit">Login</button>
                        <button className="button-extra-small" type="submit" onClick={handleSignup}>Signup</button>
                    </form>
                </div>
        </div>
    )
};

export default Login;