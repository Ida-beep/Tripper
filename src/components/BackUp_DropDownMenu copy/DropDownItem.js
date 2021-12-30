import { React, useState, useEffect } from "react";

function DropDownItem(props) {
  const [selected, setSelected] = useState(false);
  const [color, setColor] = useState("#FDF5D5");

  function handleSelected() {
    console.log(selected);

    setSelected((prevState) => !prevState);
  }

  useEffect(() => {
    if (selected === true) {
      console.log(selected);
      //setColor("#FADF63");
      props.addToArr(props.name);
      console.log("added item to array: ", props.name);
    } else if (selected === false) {
      //setColor("#FDF5D5");
      props.removeDuty(props.name);
      console.log("items removed from array");
    }
  }, [selected]);

  return (
    <div>
      <li
        className="drop-down-item"
        name={props.name}
        style={{ backgroundColor: color }}
        onClick={handleSelected}
      >
        <p className="DropDownItem-name">{props.name}</p>{" "}
      </li>
    </div>
  );
}

export default DropDownItem;
