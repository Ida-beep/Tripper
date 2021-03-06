import React, { useState, useEffect } from "react";
import ShoppingAPI from "../API/ShoppingAPI";
import PopUp from "../Cards/PopUp";
import TableScaffold from "../Cards/TableScaffold";

/**
 * This component returns a popup that gives a list of
 * shopping items from a previous excursion that has been selected.
 */
function PreviousShoppingListPopup(props) {
  const [selectedItem, setSelectedItem] = useState([]);
  const [shoppingItems, setShoppingItems] = useState([]);

  /**Retrieves data from the selected item*/
  useEffect(() => {
    if (typeof props.selectedExcursion !== "undefined") {
      async function fetchData() {
        setShoppingItems(
          await ShoppingAPI.fetchPreviousShoppingListFromDB(
            props.selectedExcursion.id
          )
        );
      }
      fetchData();
    }
  }, [props.selectedExcursion]);

  //Adds all selected items to shopping items
  function handleSubmit(e) {
    e.preventDefault();
    ShoppingAPI.addMultipleShoppingItems(selectedItem);
  }

  //Disables submit button if array is empty
  function disable() {
    if (selectedItem.length < 1) {
      return true;
    }
    return false;
  }

  //Adds selected elements to list selectedItem
  function addElementToSelected(element) {
    setSelectedItem((prevState) => [...prevState, element]);
  }

  const buttons = [
    <button className="button-secondary-extra-small" onClick={props.editState}>
      Back
    </button>,
    <button className="button-primary-extra-small" disabled={disable()}>
      Add Selected
    </button>,
  ];

  return (
    props.trigger && (
      <PopUp
        data={shoppingItems}
        editState={props.editState}
        submitChanges={handleSubmit}
        buttons={buttons}
      >
        <div style={{ marginTop: "20px" }} className="card-container">
          <div className="table-container">
            <TableScaffold
              onSelection={(selectedItem) => addElementToSelected(selectedItem)}
              tkey={["itemName", "amount", "unit"]}
              theaders={["Item", "Amount", "Unit"]}
              tdata={shoppingItems}
              tBodyKey="previousShoppingBody"
              tTableKey="previousShoppingTable"
              tHeadKey="previousShoppingHead"
              key="PreviousShoppingPopupCard"
            />
          </div>
        </div>
      </PopUp>
    )
  );
}

export default PreviousShoppingListPopup;
