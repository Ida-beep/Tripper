import React, { useState } from "react";
import { Parse } from "parse";
import { useNavigate } from "react-router-dom";
import API from "../API/API";
import Footer from "../Navigation/Footer";
import { Link } from "react-router-dom";

function OrganiserLogin(props) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  // function handleSignup(e){
  //     e.preventDefault();
  //     console.log("Signup was called");
  //     const user = new Parse.User();
  //     user.setPassword(password);
  //     user.setUsername(username);

  //     API.signup(username,password);
  //     console.log("user singed up!");
  //<button className="button-secondary-extra-small" type="submit" onClick={handleSignup}>Signup</button>
  // }

  function handleLoginAttempt(e) {
    e.preventDefault();
    console.log("handleLoginAttempt was called");

    const user = new Parse.User();
    user.setPassword(password);
    user.setUsername(username);
    user.logIn().then(
      (loggedInUser) => {
        console.log(loggedInUser);
        navigate(`/`);
      },
      (error) => {
        alert("login not successfull with errorcode: " + error.code);
      }
    );
  }

  return (
    <>
      <div className="page-container">
        <div className="signup-container">
          <h4 style={{ color: "#1ea774" }}>Login </h4>
          <p style={{ color: "#1ea774" }}>To plan your trip </p>
          <div className="login-form">
            <form onSubmit={handleLoginAttempt}>
              <div className="long-input" style={{ justifyContent: "center" }}>
                <label>
                  <p>Username</p>
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
                  <p>Password</p>
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
