import Excursion from '../Excursion/Excursion';
import Profile from '../Profile/Profile';
import NavMenu from './NavMenu';
import React from 'react';
import Login from './Login';
import SignUp from './SignUp';
import Home from '../Home';
import Shopping from '../Shopping/Shopping';
import {
    BrowserRouter as Router,
    Route,
    Routes
  } from 'react-router-dom';

/**
 *  @public NavRouter is responsible for all routing between pages
 */
function NavRouter(){

  return(
      <Router>
        <NavMenu/>
            <Routes>
            <Route path='/' element={<Home/>}/>
              <Route path='/Excursion' element={<Excursion/>}/>
              <Route path='/Profile' element={<Profile/>}/>
              <Route path='/Shopping' element={<Shopping/>}/>
              <Route path='/Login' element={<Login/>}/>
              <Route path='/SignUp' element={<SignUp/>}/>
            </Routes>
      </Router>
)
};

export default NavRouter;