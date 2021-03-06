import React, { useState, useEffect } from "react";
import PopUp from "../Cards/PopUp";
import LongInput from "../Cards/LongInput";
import ShoppingAPI from "../API/ShoppingAPI";

/**
 * Popup that allows users to edit selected shopping items.
 */
function EditShoppingPopup(props) {
  const [id, setId] = useState();
  const [item, setItem] = useState();
  const [amount, setAmount] = useState();
  const [unit, setUnit] = useState();
  const [selectedItem, setSelectedItem] = useState();
  const itemData = { id, item, amount, unit };

  /**
   * Sets selected car to the selected item passed in through
   * Shopping.js, as long as it is not null.
   * */
  useEffect(() => {
    if (!props.selectedShoppingItem) {
      return;
    } else {
      setSelectedItem(props.selectedShoppingItem);
    }
  }, [props.selectedShoppingItem]);

  useEffect(() => {
    if (selectedItem) {
      setItem(selectedItem.itemName);
      setAmount(selectedItem.amount);
      setUnit(selectedItem.unit);
      setId(selectedItem.id);
    }
  }, [selectedItem]);

  function disable() {
    if (!item || !amount || !unit) {
      return true;
    }
    return false;
  }

  const buttons = [
    <button className="button-secondary-extra-small" onClick={props.editState}>
      Back
    </button>,
    <button
      className="button-primary-extra-small"
      type="submit"
      disabled={disable()}
    >
      Save
    </button>,
  ];

  /**Sets field values to 
   * respective variables */
  function changeItem(e) {
    e.preventDefault();
    setItem(e.target.value);
  }
  function changeAmount(e) {
    e.preventDefault();
    setAmount(e.target.value);
  }
  function changeUnit(e) {
    e.preventDefault();
    setUnit(e.target.value);
  }

  /**Updates shopping item data on submit*/
  function handleSubmit(e) {
    e.preventDefault();
    ShoppingAPI.updateShoppingItem(itemData).then(
      () => {
        console.log("Succesfully updated shopping");
        props.shoppingItemDidUpdate(true);
      },
      (error) => {
        console.log("Failed to update shopping: ", error.code);
      }
    );
  }

  return (
    props.trigger && (
      <PopUp
        data={itemData}
        submitChanges={handleSubmit}
        buttons={buttons}
        title="Edit Shopping Item"
      >
        <div className="input-section">
          <LongInput
            title="Item"
            value={item}
            changeValue={changeItem}
            type="text"
          />
          <LongInput
            title="Amount"
            type="number"
            changeValue={changeAmount}
            value={amount}
          />
          <LongInput
            title="Unit"
            type="text"
            changeValue={changeUnit}
            value={unit}
          />
        </div>
      </PopUp>
    )
  );
}

export default EditShoppingPopup;
