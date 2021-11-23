import React from 'react';
import { NavLink } from 'react-router-dom';

/**
 *  @public NavMenu let's the user use the NavRouter to switch between different main pages
 */

function NavMenu () {
    return <div>
        <nav className="Nav-Bar">
            <ul className="Nav-Ul">
              <div className="Logo">tripper</div>
              <div className="Divider"></div>
              <div className="Nav-Item-Overview">
                <li className="Nav-Item">
                    <NavLink to="/"> Home </NavLink>
                </li>
                <li className="Nav-Item">
                  <NavLink to="/Excursion">Excursion</NavLink>
                </li>
                <li className="Nav-Item">
                  <NavLink to="/Profile">Profile</NavLink>
                </li>
              </div>
            </ul>
        </nav>
    </div>
}
export default NavMenu;