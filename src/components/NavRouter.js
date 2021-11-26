import Home from './Home';
import Excursion from './Excursion';
import Profile from './Profile';
import NavMenu from './NavMenu';
import React, { useState } from 'react';
import Login from './Login';
import {
    BrowserRouter as Router,
    Route,
    Switch
  } from 'react-router-dom';

/**
 *  @public NavRouter is responsible for all routing between pages
 */
function NavRouter(){

  const [isLoggedIn,setIsLoggedIn] = useState(false);

  return (
      isLoggedIn? (
      <>
       <Router>
          <NavMenu/>
            <Switch>
              <Route exact path='/' component={Home}></Route>
              <Route exact path='/Excursion' component={Excursion}></Route>
              <Route exact path='/Profile' component={Profile}></Route>
            </Switch>
      </Router>
      </>
      ) : ( <Login setIsLoggedIn={setIsLoggedIn}/> )
)
};

export default NavRouter;