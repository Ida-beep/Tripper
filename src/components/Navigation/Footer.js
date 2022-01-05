import React, { useState, useEffect } from "react";
import { Parse } from "parse";

/**
 * Displayes some information and stats in the bottom of the page
 */
const Footer = () => {
  const [totalParticipants, setTotalParticipants] = useState(0);

  /**
   * Runs cloud function to display stat (total users of the system)
   */
  useEffect(() => {
    function totalParticipantsCloud() {
      let prevTotal = totalParticipants;
      const startCount = 1;
      const params = { user: startCount };
      let num = 0;

      Parse.Cloud.run("totalUsers", params).then(
        (result) => {
          num = result;
          if (prevTotal > num || prevTotal < num) {
            setTotalParticipants(num);
          }
        },
        (error) => {
          console.log("Failed to run cloud-function: ", error.code);
        }
      );
    }
    totalParticipantsCloud();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <footer className="footer-container">
      <div className="info-container"></div>
      <div className="info-container">
        <p>Copyrigth &copy; 2021 Tripper Inc. </p>
      </div>
      <div className="statistics">
        <div className="statistics-item">
          <p>People on Tripper</p>
          <p style={{ fontSize: "16px", color: "#0c6d4a" }}>
            <b>{totalParticipants}</b>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
