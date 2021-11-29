import Home from './Home';
import Excursion from './Excursion';
import Profile from './Profile';
import NavMenu from './NavMenu';
import React, { useState } from 'react';
import Login from './Login';
import { render } from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Routes
  } from 'react-router-dom';

/**
 *  @public NavRouter is responsible for all routing between pages
 */
function NavRouter(){

  const [isLoggedIn,setIsLoggedIn] = useState(false);


  return(
      <Router>
        <NavMenu/>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/Excursion' element={<Excursion/>}/>
              <Route path='/Profile' element={<Profile/>}/>
              <Route path='/Login' element={<Login/>}/>
            </Routes>
      </Router>
)
};

export default NavRouter;