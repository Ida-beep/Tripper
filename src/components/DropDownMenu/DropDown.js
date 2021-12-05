import React, { useState} from 'react';

function DropDown(props){
    const [open,setOpen] = useState(false);

    return (
        <div className="drop-down-menu">
            <label>
                <p>Select 3 duties</p>
                <div className="drop-down-top" onClick={()=>setOpen(!open)}>
                    <p className="PlaceHolder">Choose preference</p>
                </div>
                {open && props.children}
            </label>
        </div>
    )
}

export default DropDown;