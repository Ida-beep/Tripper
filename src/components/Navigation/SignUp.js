
/**
 * SignUp creates a new user object in the database (back4app)
 * username + password can afterwards be used on the login screen to login
 *  
 */


import { useState } from "react";
import Parse from "parse";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock, FaEnvelope } from 'react-icons/fa';
import Footer from '../Footer.js';
import { Link } from 'react-router-dom'


function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  async function createAccount() {
    const user = new Parse.User();
    user.setUsername(username);
    user.setPassword(password);
    user.setEmail(email);
    try {
      await user.signUp();
    } catch (error) {
      alert("Error: " + error.message);
    }
    navigate(`/`);
  }

  function usernameChange(e) {
    setUsername(e.target.value);
  }
  function passwordChange(e) {
    setPassword(e.target.value);
  }

  function emailChange(e) {
    setEmail(e.target.value);
  }

  return (
    <>
    <div className="signup-container">
       
      <h4 style={{color: '#1ea774'}} >Sign Up </h4>
      
      <div className="login-form">
        <form>

      <div className="long-input">
        <label>
      <p> <FaUser /> Username</p>
      <input  type="text" value={username} onChange={usernameChange} />
      
        </label>
       </div> 
        <br />
       
      <div className="long-input">
        <label>
        <p> <FaLock /> Password</p>
      <input type="password" value={password} onChange={passwordChange} /> 
      
        </label>
       </div> 
       <br />
    
      <div className="long-input">
        <label>
        <p> <FaEnvelope /> Email address</p>
        <input type="email" value={email} onChange={emailChange} />  
        </label>
       </div> 
       <br />
       
      <button className="button-secondary-extra-small" type="submit" variant="primary" onClick={createAccount}>
        Create Account
      </button>
      </form>
      </div>
      
      <Link to='/Login' > <p style={{textAlign: 'center'}} >Already a User?</p> <p  style={{color: '#1ea774', textAlign: 'center'}} >  Login here!</p>   </Link> 
     
    
      </div>

      <Footer />

      </>
  );
}

export default SignUp;

