import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer.js";

import ImgTripCar from "./ImgTripCar.js";

function Home() {
  return (
    <>
      <div className="page-container">
        <div className="welcome-page">
          <div className="welcome-content" style={{ marginTop: "130px" }}>
            <div className="greeting">
              <h4 style={{ color: "#1ea774" }}>Welcome to Tripper!</h4>
              <p style={{ color: "#1ea774", fontSize: "16px" }}>
                Start planning your next Excursion today{" "}
              </p>
            </div>

            <ImgTripCar />

            <div className="button-container-home">
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
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Home;
