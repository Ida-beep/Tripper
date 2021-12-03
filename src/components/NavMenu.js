import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import Parse from 'parse';

/**
 *  @public NavMenu let's the user use the NavRouter to switch between different main pages
 */

function NavMenu() {
  
  const [excursionDropDown, setExcursionDropDown] = useState(false);
  const [profileDropDown, setProfileDropDown] = useState(false);
  const navigate = useNavigate();

  async function handleLogOutAttempt(e) {
    e.preventDefault();
    console.log("Logout was called")

    Parse.User.logOut()
    .then(()=>{
      navigate(`/Login`);
    })
  
}

  return (
    <>
    {Parse.User.current()&& (
        <nav className="Nav-Bar">
            <ul className="Nav-Ul">
              <div className="Logo">tripper</div>
              <div className="Divider"></div>
              <div className="Nav-Item-Overview">
           
                <>
                    <Link className="Nav-Item" to="/"> Home </Link>
                    <Link className="Nav-Item" to="/Excursion" onMouseEnter={() => setExcursionDropDown(!excursionDropDown)}>Excursion
                      {excursionDropDown &&
                      <div className="nav-drop-down" onMouseLeave={() => setExcursionDropDown(!excursionDropDown)}>
                          <Link className="drop-down-options" to="/Shopping">Shoppinglist</Link>
                          <Link className="drop-down-options" to="/Duties">Duties</Link>
                      </div>}
                    </Link>
                    <Link className="Nav-Item" to="/Profile" onMouseEnter={() => setProfileDropDown(!profileDropDown)}>Profile
                      {profileDropDown &&
                      <div className="nav-drop-down" onMouseLeave={() => setProfileDropDown(!profileDropDown)}>
                          <Link className="drop-down-options" to="/Profile">View Profile</Link>
                          <Link className="drop-down-options" onClick={handleLogOutAttempt} to="/Login">Logout</Link>
                      </div>}
                    </Link>
                </>

              </div>
            </ul>
        </nav>
        )}
        
    </>
)
}
export default NavMenu;