import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Parse } from "parse";

const Footer = () => {
  const [totalParticipants, setTotalParticipants] = useState(0);
  const [avgAge, setAvgAge] = useState(0);

  /*   function totalParticipantsCloud() {
    let prevTotal = totalParticipants;

    console.log("prevtotal is: ", prevTotal);
    const user = Parse.User.current().excursionID;
    const params = { user: user };
    let num = 0;
    Parse.Cloud.run("totalParticipants", params).then(
      (result) => {
        console.log("current total is: ", result);
        num = result;
        if (prevTotal > num || prevTotal < num) {
          setTotalParticipants(num);
          console.log("changed total");
        }
      },
      (error) => {
        console.log(error.code);
      }
    );
  }
  totalParticipantsCloud();

  function averageAge() {
    let prevTotal = avgAge;
    const user = Parse.User.current().excursionID;
    const params = { user: user };
    let num = 0;
    Parse.Cloud.run("avgAge", params).then(
      (result) => {
        num = result;
        if (prevTotal > num || prevTotal < num) {
          setAvgAge(num.toFixed(2));
          console.log("changed avg age to: ", num);
        }
      },
      (error) => {
        console.log(error.code);
      }
    );
  }
  averageAge(); */

  return (
    <footer className="footer-container">
      <div className="info-container">
        {/*         <p>Copyrigth &copy; 2021 Tripper Inc.</p>

        <Link to="/about">
          <p style={{ color: "#1ea774", textAlign: "center" }}> About</p>{" "}
        </Link> */}
      </div>
      <div className="info-container">
        <p>Copyrigth &copy; 2021 Tripper Inc. </p>
      </div>
      <div className="statistics">
        {/*         <div className="statistics-item">
          <p>People on Tripper</p>
          <p style={{ fontSize: "16px", color: "#0c6d4a" }}>
            <b>{totalParticipants}</b>
          </p>
        </div>
        <div className="statistics-item">
          <p>Their Average Age </p>
          <p style={{ fontSize: "16px", color: "#0c6d4a" }}>
            <b>{avgAge}</b>
          </p>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
