import React, { useState } from "react";
import { Parse } from "parse";
import { useNavigate } from "react-router-dom";
import Footer from "../Navigation/Footer";
import { Link } from "react-router-dom";
import ImgLogo from "../Img/ImgLogo.js";
import { FaUser, FaLock } from "react-icons/fa";

/**
 * Handles login for organisers (not participants)
 */
function OrganiserLogin(props) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  /**
   * Logs in and redirects the user to Excursion page
   */
  function handleLoginAttempt(e) {
    e.preventDefault();
    const user = new Parse.User();
    user.setPassword(password);
    user.setUsername(username);
    user.logIn().then(
      (loggedInUser) => {
        console.log("Succesfull login with :", loggedInUser);
        navigate(`/Excursion`);
      },
      (error) => {
        alert("login not successfull with errorcode: " + error.code);
      }
    );
  }

  const usernameTitle = (
    <p>
      <FaUser /> Username
    </p>
  );
  const passwordTitle = (
    <p>
      <FaLock /> Password
    </p>
  );

  return (
    <>
      <div className="page-container">
        <div className="signup-container">
          <ImgLogo/>
          <h4 style={{ color: "#1ea774" }}>Login </h4>
          <p style={{ color: "#1ea774" }}>To plan your trip </p>
          <div className="login-form">
            <form onSubmit={handleLoginAttempt}>
              <div className="long-input" style={{ justifyContent: "center" }}>
                <label>
                  <p>{usernameTitle}</p>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </label>
              </div>
              <div
                className="long-input"
                style={{ justifyContent: "center", paddingTop: "10px" }}
              >
                <label>
                  <p>{passwordTitle}</p>
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
                style={{ marginTop: "30px", marginLeft: "85px" }}
              >
                Login
              </button>

              <br />
              <br />
              <div className="login-navigation">
                <p style={{ textAlign: "center" }}>
                  <Link to="/CreateExcursion">
                    {" "}
                    Want to create a new Excursion?{" "}
                    <p style={{ color: "#1ea774", marginBottom: "30px" }}>
                      Create Excursion Here
                    </p>{" "}
                  </Link>
                </p>
                <p style={{ textAlign: "center" }}>
                  <Link to="/Home">
                    {" "}
                    <p style={{ color: "#1ea774" }}>Go To Home Page</p>{" "}
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default OrganiserLogin;
