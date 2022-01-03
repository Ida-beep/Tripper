import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Parse from "parse";
import { FaRegUserCircle, FaUser } from "react-icons/fa";

import ImgLogo from '../ImgLogo';

/**
 *  @public NavMenu let's the user use the NavRouter to switch between different main pages
 */

function NavMenu() {
  const [excursionDropDown, setExcursionDropDown] = useState(false);
  const [profileDropDown, setProfileDropDown] = useState(false);
  const navigate = useNavigate();

  async function handleLogOutAttempt(e) {
    e.preventDefault();
    console.log("Logout was called");

    Parse.User.logOut().then(() => {
      navigate(`/Home`);
    });
  }

  return (
    <>
      {Parse.User.current() && (
        <nav className="Nav-Bar">
          <ul className="Nav-Ul">
            <div className="Logo">tripper</div>
            <ImgLogo/>
            <div className="Divider"></div>
            <div className="Nav-Item-Overview">
              <>
                <div
                  className="nav-item"
                  onClick={() => setExcursionDropDown(!excursionDropDown)}
                >
                  Excursion
                  {excursionDropDown && (
                    <div
                      className="nav-drop-down"
                      /* onClick={() => setExcursionDropDown(!excursionDropDown)} */
                    >
                      <Link className="drop-down-options" to="/Shopping">
                        Shopping List
                      </Link>
                      <Link className="drop-down-options" to="/Duties">
                        Duties
                      </Link>
                    </div>
                  )}
                </div>
                <div
                  className="nav-item"
                  to="/Profile"
                  onClick={() => setProfileDropDown(!profileDropDown)}
                >
                  Profile <FaRegUserCircle />
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
                  )}
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
