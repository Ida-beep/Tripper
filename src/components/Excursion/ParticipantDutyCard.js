import React, { useState, useEffect } from "react";
import TableScaffold from "../Cards/TableScaffold.js";
import FamilyMemberAPI from "../API/FamilyMemberAPI.js";

/**
 * Lists Participants who are going to the given excursion with their
 * duty preferences that they selected
 */
function ParticipantDutyCard() {
  /* eslint-disable no-unused-vars */
  const [allGuests, setAllGuests] = useState([]);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setAllGuests(await FamilyMemberAPI.fetchAllFamilyMembersInExcursion());
    }
    fetchData();
  }, []);

  function addElementToSelected(element) {
    setSelected((prevState) => [...prevState, element]);
  }

  return (
    <div className="card-container">
      <div className="table-container">
        <TableScaffold
          tkey={["firstName", "age", "duties"]}
          theaders={["Participant", "Age", "Duty Preferences"]}
          tdata={allGuests}
          onSelection={(member) => addElementToSelected(member)}
          tBodyKey="participantBody"
          tTableKey="participantTable"
          tHeadKey="participantHead"
          key="ParticipantDutyCard"
        />
      </div>

      <div className="button-container">
        <button
          className="button-secondary-extra-small"
          disabled={true}
        >
          Assign Selected
        </button>
        <button
          disabled={true}
          className="button-secondary-extra-small"
        >
          Auto Assign All
        </button>
      </div>
    </div>
  );
}

export default ParticipantDutyCard;
