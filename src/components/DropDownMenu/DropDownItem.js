import {React, useState, useEffect} from 'react';

function DropDownItem(props){
    const [selected,setSelected] = useState(false);
    const [color,setColor] = useState("#FDF5D5");
    

/*     useEffect(()=>{
        selected? (
            setColor("#FADF63")
        ) : (
            setColor("#FDF5D5")
        )
    },[selected]) */

    return(
        <div>
            <li className="drop-down-item"
                name={props.name}
                style={{backgroundColor: color}}
                onClick={()=>{
                        setSelected(!selected);
                        if(!selected){props.addToArr()}
                        else {props.removeDuty()}
                        }}>
                <p className="DropDownItem-name">{props.name}</p> {/*Dont think this class exists?*/}
            </li>
        </div>
    )
}

export default DropDownItem;