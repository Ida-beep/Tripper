import React, { useState, useEffect } from "react";
import LongCard from "../Cards/LongCard.js";
import ExcursionAPI from "../API/ExcursionAPI.js";

function ExcursionCard(props) {
  const [excursionInfo, setExcursionInfo] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setExcursionInfo(await ExcursionAPI.fetchExcursionFromDB());
    }
    fetchData();
  }, []);

  useEffect(() => {
    console.log("Value of show shopping is:", props.showShopping);
  }, [props.showShopping]);

  let subtitle =
    excursionInfo.fromDate +
    " - " +
    excursionInfo.toDate +
    ", " +
    excursionInfo.location;

  return (
    <LongCard active={props.active}>
      <div className="excursion-card">
        <div className="excursion-card-main-content">
          <h4 style={{ fontSize: "20px", color: "#1ea774" }}>
            {excursionInfo.excursionTitle}
          </h4>
          <p style={{ fontSize: "16px" }} className="subtitle">
            {subtitle}
          </p>
          <p>{excursionInfo.description}</p>
        </div>
      </div>
      <div className="edit-button-container">
        <button disabled={true} className="button-secondary-extra-small">
          Send Out Invite!
        </button>
        <button className="button-primary-extra-small" onClick={props.active}>
          Edit
        </button>
      </div>
    </LongCard>
  );
}

export default ExcursionCard;
