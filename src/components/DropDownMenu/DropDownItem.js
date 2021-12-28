import { React, useState, useEffect } from "react";

function DropDownItem(props) {
  const [selected, setSelected] = useState(false);
  const [color, setColor] = useState("#FDF5D5");

  useEffect(() => {
    console.log("changed color inside DropDown Item using useEffect");
    if (selected === true) {
      setColor("#FADF63");
      props.addToArr(props.name);
      console.log("added item to array: ", props.name);
    } else {
      setColor("#FDF5D5");
      props.removeDuty(props.name);
    }
  }, [selected]);

  return (
    <div>
      <li
        className="drop-down-item"
        name={props.name}
        style={{ backgroundColor: color }}
        onClick={() => {
          console.log(selected);

          setSelected((prevState) => !prevState);

          console.log("clicked a list item");
          console.log(selected);
        }}
      >
        <p className="DropDownItem-name">{props.name}</p>{" "}
        {/*Dont think this class exists?*/}
      </li>
    </div>
  );
}

export default DropDownItem;
