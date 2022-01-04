import React, { useState, useEffect } from "react";
import Image from "../../assets/norwegian_fjord.png";
import ExcursionCard from "./ExcursionCard.js";
import EditExcursion from "./EditExcursion";
import GuestDutyCard from "./GuestDutyCard";
import DutiesCard from "./DutiesCard";
import AddDutyPopup from "./AddDutyPopup";
import PreviousDutiesPopup from "./PreviousDutiesPopup";
import Footer from "../Footer";
import { FaHourglassEnd } from "react-icons/fa";
import DeleteDutyPopup from "./DeleteDutyPopup";

function Excursion() {
  const [editExcursionActive, setExcursionEditActive] = useState(false);
  const [dutiesPopupActive, setDutiesPopupAcitve] = useState(false);
  const [previousDutiesActive, setPreviousDutiesActive] = useState(false);
  const [lastSelected, setLastSelected] = useState();
  const [dutiesAdded, setDutiesAdded] = useState(false);
  const [showDeleteDutyPopup, setShowDeleteDutyPop] = useState(false);
  const [dutyToDelete, setDutyToDelete] = useState();
  const [deletionConfirmed, setDeletionConfirmed] = useState(false);
  const [addPrevious, setAddPrevious] = useState(false);

  useEffect(() => {
    console.log("is PreviousPopup active?: ", previousDutiesActive);
  }, [previousDutiesActive]);

  function returnSelected(selected) {
    console.log("selected: ", selected);
    setLastSelected(selected);
  }

  return (
    <div>
      <div className="excursion">
        <img className="photo-header-image" src={Image} alt="NorwegianFjord" />
        <DeleteDutyPopup
          setDeletionConfirmed={(isConfirmed) =>
            setDeletionConfirmed(isConfirmed)
          }
          dutyToDelete={dutyToDelete}
          showDeleteDutyPopup={showDeleteDutyPopup}
          toggleDeletePopup={() => setShowDeleteDutyPop(false)}
        />
        <EditExcursion
          trigger={editExcursionActive}
          editState={() => setExcursionEditActive(false)}
        />
        <AddDutyPopup
          onDutyAdd={(duties) => setDutiesAdded(duties)}
          trigger={dutiesPopupActive}
          editState={() => setDutiesPopupAcitve(false)}
          title="Add duty"
        />
        <PreviousDutiesPopup
          setAddPrevious={(addPrevious) => setAddPrevious(addPrevious)}
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
          setAddPrevious={(addPrevious) => setAddPrevious(addPrevious)}
          addPrevious={addPrevious}
          setDeletionHappening={(isConfirming) =>
            setDeletionConfirmed(isConfirming)
          }
          deletionConfirmed={deletionConfirmed}
          setDutyToDelete={(duty) => setDutyToDelete(duty)}
          toggleDeletePopup={(isDeleting) => setShowDeleteDutyPop(isDeleting)}
          addingDuty={(needsUpdating) => setDutiesAdded(needsUpdating)}
          onDutiesAdded={dutiesAdded}
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
