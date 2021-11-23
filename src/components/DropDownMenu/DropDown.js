import React, { useState} from 'react';

function DropDown(props){
    const [open,setOpen] = useState(false);

    return (
        <div className="DropDownMenu">
            <label>
                <p>Select 3 duties</p>
                <div className="DropDownTop" onClick={()=>setOpen(!open)}>
                    <p className="PlaceHolder">Choose preference</p>
{/*                     <img className="arrowBtn" src={arrow} alt="arrowbutton"/> */}
                </div>
                {open && props.children}
            </label>
        </div>
    )
}

export default DropDown;