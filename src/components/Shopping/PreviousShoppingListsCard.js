import React, { useEffect, useState } from "react";
import TableScaffold from "../Cards/TableScaffold";
import ExcursionAPI from "../API/ExcursionAPI";

function PreviousShoppingListsCard(props) {
  const [excursions, setExcursions] = useState([]);
  const [selected, setSelected] = useState();

  function addElementToSelected(element) {
    setSelected(element);
  }

  useEffect(() => {
    async function fetchData() {
      setExcursions(await ExcursionAPI.fetchAllExcursionsFromDB());
    }
    fetchData();
    console.log("Previous shopping lists useEffect called");
  }, []);

  //Returns selected data to Excursion component
  useEffect(() => {
    props.selected(selected);
    console.log("selected in previous: ", selected);
  }, [selected]);

  function disable() {
    if (!selected) {
      return true;
    }
    return false;
  }

  return (
    <div className="card-container">
      <div className="table-container">
        <TableScaffold
          onSelection={(selected) => addElementToSelected(selected)}
          tkey={["excursionTitle"]}
          theaders={["Excursion"]}
          tdata={excursions}
        />
      </div>
      <div className="button-container">
        <button
          className="button-primary-extra-small"
          disabled={disable()}
          onClick={props.openActive}
        >
          Open
        </button>
      </div>
    </div>
  );
}

export default PreviousShoppingListsCard;
