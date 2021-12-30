import React, { useState, useEffect } from "react";
import LongCard from "../Cards/LongCard.js";
import ExcursionAPI from "../API/ExcursionAPI.js";

function ExcursionCard(props) {
  const [selected, setSelected] = useState([]);
  const [excursionInfo, setExcursionInfo] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setExcursionInfo(await ExcursionAPI.fetchExcursionFromDB());
    }

    fetchData();
    console.log("excursionCard useEffect called");
  }, []);

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
          <h4>{excursionInfo.excursionTitle}</h4>
          <p className="subtitle">{subtitle}</p>
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
