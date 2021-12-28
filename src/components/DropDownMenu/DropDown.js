import React, { useState } from "react";

function DropDown(props) {
  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen((prevState) => !prevState);
  }

  return (
    <div className="drop-down-menu">
      <label>
        <p>Select 3 duties</p>
        <div className="drop-down-top" onClick={handleClick}>
          <p className="placeHolder">Choose preference</p>
        </div>
        {open && props.children}
      </label>
    </div>
  );
}

export default DropDown;
