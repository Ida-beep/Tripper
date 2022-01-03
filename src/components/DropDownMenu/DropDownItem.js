// import { idempotency } from "parse";
import { React, useState,} from "react";

function DropDownItem(props) {
  const [selected, setSelected] = useState(false);
  const [unSelectedColor, setUnSelectedColor] = useState("#FDF5D5");
  const [selectedColor, setSelectedColor] = useState("#FADF63");
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
    console.log(count);
    if (count % 2 === 1) {
      console.log("unselected");
      setSelected(false);
      //props.removeDuty();
    } else {
      console.log("selected");
      setSelected(true);
      //props.addToArr(props.name);
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
