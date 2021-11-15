import React, { useEffect } from 'react';
import { useState } from 'react';
import icon from '../assets/noun_User_1796556 1.png';

/**
 * @public ParticipantInfo displays a Participants name, age, dutypreferences and carseat. It's also responsible for querying the db for these props and display them.  
 * @param {*} props  
 *  - The rendering of duties should be refactored
 *  - Each Row-Item needs to be align correctly to headlines in Card
 *  - Add check to see if FamilyMember table exists before displaying
 */

function ParticipantInfo(props){

    const [color,setColor] = useState("#FFFBF2");
    const [selected, setSelected] = useState(false);

    useEffect(()=>{
        selected? setColor("#FADF63"):setColor("#FFFBF2");
    },[selected])

    return(
        <div className="ParticipantInfo" style={{backgroundColor: color}} onClick={()=>setSelected(!selected)} >
            <div className="NameIcon">
                <p className="Name">{props.name}</p>
                <img className="Icon"src={icon} alt="Logo"></img>
            </div>
            <div className="Age">
                <p className="DataItem">{props.age}</p>
            </div>
            <div className="Duties">
                <p className="DataItem">{props.dutypreferences[0]}</p>
                <p className="DataItem">{props.dutypreferences[1]}</p>
                <p className="DataItem">{props.dutypreferences[2]}</p>
            </div>
            <div className="Carseat">
                <p className="DataItem">{props.carseat}</p>
            </div>
        </div>
    )
};


export default ParticipantInfo;