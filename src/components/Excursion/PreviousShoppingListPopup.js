import React, { useState, useEffect } from "react";
import ShoppingAPI from "../API/ShoppingAPI";
import PopUp from "../Cards/PopUp";
import TableScaffold from "../Cards/TableScaffold";

/**
 * @public 
 * This component returns a popup that gives a list of
 * shopping items from a previous excursion that has been 
 * selected.
 */
function PreviousShoppingListPopup(props) {
  const [selectedItem, setSelectedItem] = useState([]);
  const [shoppingItems, setShoppingItems] = useState([]);

  /**Retrieves data from the selected item. */
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
      console.log("Previous Shoppinglist useEffect called");
    }
  }, [props.selectedExcursion]);

  function handleSubmit(e) {
    e.preventDefault();
    console.log("handleSubmit called");
    ShoppingAPI.addMultipleShoppingItems(selectedItem);
  }
  function disable() {
    if (selectedItem.length < 1) {
      return true;
    }
    return false;
  }

  function addElementToSelected(element) {
    setSelectedItem((prevState) => [...prevState, element]);
  }

  const buttons = [
    <button className="button-secondary-extra-small" 
      onClick={props.editState}>Back</button>,
    <button className="button-primary-extra-small" 
      disabled={disable()}>Add Selected</button>
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
