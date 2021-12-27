import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer.js";
import Image from "../assets/car.png";

function Home() {
  return (
    <>
      <div className="page-container">
        <div className="welcome-page">
          <div className="welcome-content">
            <h4 style={{ color: "#1ea774" }}>Welcome to Tripper!</h4>
            <p style={{ color: "#1ea774" }}>
              Start planning your next Excursion today{" "}
            </p>
            <div className="button-container">
              <Link to="/OrganiserLogin">
                <button className="button-primary-medium">
                  I am an Organiser
                </button>
              </Link>
              <Link to="/SignUp">
                <button className="button-primary-medium">
                  I am a Participant
                </button>
              </Link>
            </div>
          </div>
          {/* <img className="" src={Image} alt="car"/> */}
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Home;
