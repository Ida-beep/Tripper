import React from 'react';

function Login(props){
    return (
        <>
            <h1>Login!</h1>
            <button onClick={() => props.setIsLoggedIn((prevState)=> !prevState)}> Click me to login</button>
        </>
    )
};

export default Login;