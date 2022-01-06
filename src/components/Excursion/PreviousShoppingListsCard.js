import React, { useEffect, useState } from "react";
import TableScaffold from "../Cards/TableScaffold";
import ExcursionAPI from "../API/ExcursionAPI";

/**
 * Lists previous shoppings lists
 */
function PreviousShoppingListsCard(props) {
  const [excursions, setExcursions] = useState([]);
  const [selected, setSelected] = useState();

  useEffect(() => {
    async function fetchData() {
      setExcursions(await ExcursionAPI.fetchAllExcursionsFromDB());
    }
    fetchData();
  }, []);

  /**
   * Returns selected data to Excursion component
   */
  useEffect(() => {
    props.selected(selected);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
          onSelection={(selected) => setSelected(selected)}
          tkey={["excursionTitle"]}
          theaders={["Excursion"]}
          tdata={excursions}
          tBodyKey="excursionBody"
          tTableKey="excursionTable"
          tHeadKey="excursionHead"
          key="ShoppingListCardPrevious"
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
