import Excursion from "../Excursion/Excursion";
import Profile from "../Profile/Profile";
import NavMenu from "./NavMenu";
import React, { useState } from "react";
import Login from "../LoginSignup/Login";
import OrganiserLogin from "../LoginSignup/OrganiserLogin";
import SignUp from "../LoginSignup/SignUp";
import Home from "../LoginSignup/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateExcursion from "../LoginSignup/CreateExcursion";

/**
 *  NavRouter is responsible for all routing between pages
 */
function NavRouter() {
  const [emptyStats, setEmptyStats] = useState();

  return (
    <Router>
      <NavMenu setEmptyStats={() => setEmptyStats(true)} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Excursion" element={<Excursion emptyStats={emptyStats} />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/CreateExcursion" element={<CreateExcursion />} />
        <Route path="/OrganiserLogin" element={<OrganiserLogin />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default NavRouter;
