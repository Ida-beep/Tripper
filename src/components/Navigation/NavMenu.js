import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Parse from "parse";
import { FaRegUserCircle } from "react-icons/fa";
import ImgLogo from "../Img/ImgLogo";

/**
 *  NavMenu lets the user use the NavRouter to 
 * switch between different main pages
 */
function NavMenu(props) {
  const [profileDropDown, setProfileDropDown] = useState(false);
  const navigate = useNavigate();

  /**Logsout and redirects user to /Home*/
  async function handleLogOutAttempt(e) {
    e.preventDefault();
    props.setEmptyStats();

    Parse.User.logOut().then(() => {
      navigate(`/Home`);
    });
  }

  return (
    <>
      {Parse.User.current() && (
        <nav className="Nav-Bar">
          <ul className="Nav-Ul">
            <ImgLogo />
            <div className="Logo">tripper</div>

            <div className="Divider"></div>
            <div className="Nav-Item-Overview">
              <>
                <Link className="nav-item" to="/">
                  Excursion
                </Link>
                <div
                  className="nav-item"
                  to="/Profile"
                  onClick={() => setProfileDropDown(!profileDropDown)}
                >
                  Profile
                  <div className="user-circle">
                    <FaRegUserCircle />
                  </div>
                  {profileDropDown && (
                    <div
                      className="nav-drop-down"
                      onClick={() => setProfileDropDown(!profileDropDown)}
                    >
                      <Link className="drop-down-options" to="/Profile">
                        View Profile
                      </Link>
                      <Link
                        className="drop-down-options"
                        onClick={handleLogOutAttempt}
                        to="/Login"
                      >
                        Logout
                      </Link>
                    </div>
                  )}{" "}
                </div>
              </>
            </div>
          </ul>
        </nav>
      )}
    </>
  );
}
export default NavMenu;
