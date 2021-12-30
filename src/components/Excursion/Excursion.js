import React, { useState } from "react";
import Image from "../../assets/norwegian_fjord.png";
import ExcursionCard from "./ExcursionCard.js";
import EditExcursion from "./EditExcursion";
import GuestDutyCard from "./GuestDutyCard";
import DutiesCard from "./DutiesCard";
import AddDutyPopup from "./AddDutyPopup";
import PreviousDutiesPopup from "./PreviousDutiesPopup";
import Footer from "../Footer";

function Excursion() {
  const [editExcursionActive, setExcursionEditActive] = useState(false);
  const [dutiesPopupActive, setDutiesPopupAcitve] = useState(false);
  const [previousDutiesActive, setPreviousDutiesActive] = useState(false);
  const [lastSelected, setLastSelected] = useState();

  function returnSelected(selected) {
    console.log("selected: ", selected);
    setLastSelected(selected);
  }

  return (
    <div>
      <div className="excursion">
        <img className="photo-header-image" src={Image} alt="NorwegianFjord" />
        <EditExcursion
          trigger={editExcursionActive}
          editState={() => setExcursionEditActive(false)}
        />
        <AddDutyPopup
          trigger={dutiesPopupActive}
          editState={() => setDutiesPopupAcitve(false)}
          title="Add duty"
        />
        <PreviousDutiesPopup
          trigger={previousDutiesActive}
          editState={() => setPreviousDutiesActive(false)}
        />

        <div className="page-container">
          {" "}
          {/**Add className */}
          <ExcursionCard active={() => setExcursionEditActive(true)} />
        </div>
      </div>
      <div className="page-container">
        <div className="duties-headline">
          <h4 style={{ fontSize: "20px" }}>Duties and Participants</h4>
          <p style={{ width: "464px" }}>
            Here you can add duties to your excursion and assign partcipants to
            join them. You can always go back and try again!
          </p>
        </div>
      </div>
      <div className="cards-container">
        <DutiesCard
          addActive={() => setDutiesPopupAcitve(true)}
          selected={returnSelected}
          previousActive={() => setPreviousDutiesActive(true)}
        />
        <GuestDutyCard />
      </div>
      <Footer />
    </div>
  );
}
export default Excursion;
