import React, { useState } from "react";

/**Component that renders a dropdown, including
 * "input field", individiual DropDownItems 
 * and the DropDownMenus
*/
function DropDown(props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="drop-down-menu">
      <label>
        <p>Select 3 duties</p>
        <div className="drop-down-top">
          <p
            className="placeHolder"
            onClick={() => setOpen((prevState) => !prevState)}
          >
            Choose preference
          </p>
        </div>
        {open && props.children}
      </label>
    </div>
  );
}

export default DropDown;
