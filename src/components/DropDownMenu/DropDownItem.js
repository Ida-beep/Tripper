import { React, useState } from "react";

/**
 * Renders each individual section with
 * items in dropdown that can be selected.
 */

function DropDownItem(props) {
  /* eslint-disable no-unused-vars */
  const [selected, setSelected] = useState(false);
  const [unSelectedColor, setUnSelectedColor] = useState("#FDF5D5");
  const [selectedColor, setSelectedColor] = useState("#FADF63");
  const [count, setCount] = useState(0);

  /**
   * On handleClick() the user can select or de-select items on the dropdown
   */
  function handleClick() {
    setCount(count + 1);
    if (count % 2 === 1) {
      setSelected(false);
    } else {
      setSelected(true);
    }
  }

  return (
    <div>
      <li
        className="drop-down-item"
        name={props.name}
        style={
          selected
            ? { backgroundColor: selectedColor }
            : { backgroundColor: unSelectedColor }
        }
        onClick={handleClick}
      >
        <p>{props.name}</p>
      </li>
    </div>
  );
}

export default DropDownItem;
