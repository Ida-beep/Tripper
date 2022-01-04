import Excursion from "../Excursion/Excursion";
import Profile from "../Profile/Profile";
import NavMenu from "./NavMenu";
import React from "react";
import Login from "./Login";
import OrganiserLogin from "./OrganiserLogin";
import SignUp from "../SignUp";
import Home from "../Home";
import Shopping from "../Excursion/Shopping";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateExcursion from "../CreateExcursion";

/**
 *  @public NavRouter is responsible for all routing between pages
 */
function NavRouter() {
  return (
    <Router>
      <NavMenu />
      <Routes>
        <Route path="/" element={<Excursion />} />
        {/* <Route path="/Excursion" element={<Excursion />} /> */}
        <Route path="/Profile" element={<Profile />} />
        {/* <Route path="/Shopping" element={<Shopping />} /> */}
        <Route path="/Login" element={<Login />} />
        <Route path="/CreateExcursion" element={<CreateExcursion />} />
        <Route path="/OrganiserLogin" element={<OrganiserLogin />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Duties" element={<Excursion />} />
      </Routes>
    </Router>
  );
}

export default NavRouter;
