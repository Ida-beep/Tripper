import React, { useState } from "react";
import { Parse } from "parse";
import { useNavigate } from "react-router-dom";
import Footer from "../Navigation/Footer";
import { Link } from "react-router-dom";
import ImgLogo from "../Img/ImgLogo";
import { FaUser, FaLock} from "react-icons/fa";

/**
 * Handles login for participants (not organisers)
 */
function Login(props) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  function handleLoginAttempt(e) {
    e.preventDefault();
    const user = new Parse.User();
    user.setPassword(password);
    user.setUsername(username);
    user.logIn().then(
      (loggedInUser) => {
        console.log("Succesful login with: ", loggedInUser);
        navigate(`/`);
      },
      (error) => {
        alert("Failed to login with errorcode: " + error.code);
      }
    );
  }

  return (
    <>
      <div className="page-container">
        <div className="signup-container">
          <ImgLogo />
          <h4 style={{ color: "#1ea774" }}>Login </h4>
          <p style={{ color: "#1ea774" }}>To plan your trip </p>
          <div className="login-form">
            <form onSubmit={handleLoginAttempt}>
              <div className="long-input">
                <label>
                  <p><p><FaUser /> Username</p></p>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </label>
              </div>
              <div className="long-input" style={{ marginTop: "10px" }}>
                <label>
                  <p><p><FaLock /> Password</p></p>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </label>
              </div>
              <button
                className="button-secondary-extra-small"
                type="submit"
                style={{ marginLeft: "50px", marginTop: "30px" }}
              >
                Login
              </button>

              <br />
              <br />
              <p style={{ textAlign: "center" }}>
                <Link to="/SignUp">
                  {" "}
                  Don't Have an Account?{" "}
                  <p style={{ color: "#1ea774" }}>Sign Up Here</p>{" "}
                </Link>
              </p>
              <p style={{ textAlign: "center" }}>
                <Link to="/Home">
                  {" "}
                  <p style={{ color: "#1ea774" }}>Go To Home Page</p>{" "}
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
