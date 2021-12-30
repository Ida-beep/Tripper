import React, { useState, useEffect } from "react";
import TableScaffold from "../Cards/TableScaffold";
import DutiesAPI from "../API/DutiesAPI";

function DutiesCard(props) {
  const [allDuties, setAllDuties] = useState([]);
  const [selected, setSelected] = useState();

  function addElementToSelected(element) {
    setSelected(element);
    // setSelected((prevState)=> [...prevState,element]);
    // console.log("selected: ", selected);
  }

  useEffect(() => {
    async function fetchData() {
      setAllDuties(await DutiesAPI.fetchDutiesFromDB());
    }
    fetchData();
    console.log("DutiesCard useEffect called");
  }, []);

  async function handleDelete(e) {
    e.preventDefault();
    DutiesAPI.deleteDuty(selected).then(async () => {
      const refetchedList = await DutiesAPI.fetchDutiesFromDB();
      setAllDuties(refetchedList);
    });
  }

  function disableDelete() {
    if (!selected) {
      return true;
    }
    return false;
  }

  //Returns selected data to Excursion component
  useEffect(() => {
    props.selected(selected);
  }, [selected]);

  return (
    <div className="card-container">
      <div className="table-container">
        <TableScaffold
          onSelection={(selected) => addElementToSelected(selected)}
          // Pass the key name from database object in array matching headers
          tkey={["name", "minRequired", "peopleAssigned"]}
          //Pass Real headers in array
          theaders={["Duty", "Min. participants", "People Assigned"]}
          // Pass object data source
          tdata={allDuties}
        />
      </div>
      <div className="button-container">
        <button
          className="button-secondary-extra-small"
          onClick={handleDelete}
          disabled={disableDelete()}
        >
          Delete
        </button>
        <button
          className="button-secondary-extra-small"
          onClick={props.previousActive}
        >
          Find Previous
        </button>
        <button
          className="button-primary-extra-small"
          onClick={props.addActive}
        >
          Add Duty
        </button>
      </div>
    </div>
  );
}

export default DutiesCard;
