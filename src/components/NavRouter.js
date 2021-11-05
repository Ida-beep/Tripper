import Home from './Home';
import Excursion from './Excursion';
import Profile from './Profile';
import NavMenu from './NavMenu';
import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
  } from 'react-router-dom';

function NavRouter(){
  return <div>
        <Router>
          <NavMenu/>
            <Switch>
              <Route exact path='/' component={Home}></Route>
              <Route exact path='/Excursion' component={Excursion}></Route>
              <Route exact path='/Profile' component={Profile}></Route>
            </Switch>
       </Router>
  </div>
}

export default NavRouter;