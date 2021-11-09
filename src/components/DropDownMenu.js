import React, { useEffect } from 'react';
import {useState} from 'react';
import arrow from '../assets/arrowbutton.png';
import dutyList from './data/dutyList';

/**
 *  - Make the render of DropDownItems depend on dutyList!
 *  - buttons "back" and "add" need some more styling
 *  - WorkInProgress: set a maximum number of preferences inside a single dropdown
 */


function DropDownMenu(props){
    const duties = dutyList.map(data => <DropDownItem key={data.name} name={data.name}/>);
    return(
        <DropDown>
            {duties}
        </DropDown>
    )
}

function DropDown(props){
    const [open,setOpen] = useState(false);

    return (
        <div className="DropDownMenu">
            <label>
                <p>Select 3 duties</p>
                <div className="DropDownTop" onClick={()=>setOpen(!open)}>
                    <p className="PlaceHolder">Choose preference</p>
                    <img className="arrowBtn" src={arrow} alt="arrowbutton"/>
                </div>
                {open && props.children}
            </label>
        </div>
    )
}

function DropDownItem(props){
    const [selected,setSelected] = useState(false);
    const [color,setColor] = useState("#FDF5D5");

    useEffect(()=>{
        selected? (
            setColor("#FADF63")
        ) : (
            setColor("#FDF5D5")
        )
    },[selected])

    return(
        <div>
            <li className="DropDownItem" name="props.name" style={{backgroundColor: color}} onClick={()=>{setSelected(!selected)}}>
                <p className="DropDownItem-name">{props.name}</p>
            </li>
        </div>
    )
}

export default DropDownMenu;