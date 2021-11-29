import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

/**
 *  @public NavMenu let's the user use the NavRouter to switch between different main pages
 */

function NavMenu() {
  
  const [dropDown, setDropdown] = useState(false);
  
  return (
    <>
        <nav className="Nav-Bar">
            <ul className="Nav-Ul">
              <div className="Logo">tripper</div>
              <div className="Divider"></div>
              <div className="Nav-Item-Overview">
                <li className="Nav-Item">
                    <NavLink to="/"> Home </NavLink>
                </li>
                <li className="Nav-Item">
                  <NavLink to="/Excursion" onMouseEnter={() => setDropdown(!dropDown)}>Excursion</NavLink>
                    {dropDown && <div className="nav-drop-down" onMouseLeave={() => setDropdown(!dropDown)}>
                      <li className="drop-down-options">
                        <NavLink to="Duties">Shoppinglist</NavLink>
                      </li>
                      <li className="drop-down-options">
                        <NavLink to="Duties">Duties</NavLink>
                      </li>
                    </div>}
                </li>
                <li className="Nav-Item">
                  <NavLink to="/Profile">Profile</NavLink>
                </li>
              </div>
            </ul>
        </nav>
    </>
)
}
export default NavMenu;