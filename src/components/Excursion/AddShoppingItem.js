import React, { useState } from "react";
import LongInput from "../Cards/LongInput";
import ShortInput from "../Cards/ShortInput";
import ShoppingAPI from "../API/ShoppingAPI";
import PopUp from "../Cards/PopUp";

/**
 * A popup that allows the user to add new items to their shoppinglist
 */
function AddShoppingItem(props) {
  const [itemName, setItem] = useState();
  const [amount, setAmount] = useState();
  const [unit, setUnit] = useState();

  const shoppingData = {
    itemName: itemName,
    amount: amount,
    unit: unit,
  };

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

  function handleSubmit(e) {
    e.preventDefault();
    ShoppingAPI.addShoppingItem(shoppingData);
  }

  function disable() {
    if (!itemName || !amount || !unit) {
      return true;
    }
    return false;
  }

  const buttons = [
    <button className="button-secondary-extra-small" onClick={props.editState}>
      Back
    </button>,
    <button className="button-secondary-extra-small" disabled={disable()}>
      Add
    </button>,
  ];

  //editState={props.toggleContactMember}
  //placeholder to longinput
  return (
    props.trigger && (
      <PopUp
        title={props.title}
        data={shoppingData}
        editState={props.editState}
        submitChanges={handleSubmit}
        buttons={buttons}
      >
        <div className="input-section">
          <LongInput
            title="Shopping Item"
            value={itemName}
            changeValue={changeItem}
            type="text"
            placeholder="Item"
          />
          <ShortInput
            title="Amount"
            value={amount}
            changeValue={changeAmount}
            type="text"
            placeholder="0"
          />
          <LongInput
            title="Unit"
            value={unit}
            changeValue={changeUnit}
            type="text"
            placeholder="kg / L / pcs..."
          />
        </div>
      </PopUp>
    )
  );
}

export default AddShoppingItem;
