import { useState } from "react";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import Footer from "../Navigation/Footer.js";
import { Link } from "react-router-dom";
import LongInput from "../Cards/LongInput";
import ContactMemberAPI from "../API/ContactMemberAPI.js";
import ImgLogo from "../Img/ImgLogo.js";

/**
 * SignUp creates a new participant object in the database (back4app)
 * username + password can afterwards be used on the login screen to login
 */
function SignUp() {
  /* eslint-disable no-unused-vars */
  const [username, setUsername] = useState();
  const [excursionID, setExcursionID] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [isOrganiser, setIsOrganiser] = useState(false);

  /**
   * Signs up the participant with their information and excursionID
   */
  async function handleSubmit(e) {
    e.preventDefaul();
    ContactMemberAPI.signUp({
      username,
      password,
      email,
      isOrganiser,
      excursionID,
    });
  }

  /**Sets field values to 
   * respective variables */
  function excursionIDChange(e) {
    setExcursionID(e.target.value);
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

  //Variables storing field titles
  const usernameTitle = (<p><FaUser /> Username</p>);
  const passwordTitle = (<p><FaLock /> Password</p>);
  const emailTile = (<p><FaEnvelope /> Email address</p>);

  //Disables submit button until all fields are filled
  function disable() {
    if (!username || !password || !email) {
      return true;
    }
    return false;
  }

  return (
    <>
      <div className="page-container">
        <div className="signup-container">
          <ImgLogo />
          <h4 style={{ color: "#1ea774" }}>Sign Up </h4>
          <p style={{ color: "#1ea774" }}>For Existing Excursion </p>

          <div className="login-form">
            <form onSubmit={handleSubmit}>
              <LongInput
                title="Excursion ID"
                value={excursionID}
                type="text"
                changeValue={excursionIDChange}
              />
              <LongInput
                title={usernameTitle}
                value={username}
                type="text"
                changeValue={usernameChange}
              />
              <LongInput
                title={passwordTitle}
                value={password}
                type="password"
                changeValue={passwordChange}
              />
              <LongInput
                title={emailTile}
                value={email}
                type="text"
                changeValue={emailChange}
              />

              <button
                className="button-secondary-extra-small"
                type="submit"
                variant="primary"
                disabled={disable()}
              >
                {" "}
                Create Account
              </button>
            </form>
          </div>

          <Link to="/Login">
            {" "}
            <p style={{ textAlign: "center" }}>Already a User?</p>
            <p style={{ color: "#1ea774", textAlign: "center" }}>Login here!</p>
          </Link>
          <p style={{ textAlign: "center" }}>
            <Link to="/Home">
              {" "}
              <p style={{ color: "#1ea774" }}>Go To Home Page</p>{" "}
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SignUp;
