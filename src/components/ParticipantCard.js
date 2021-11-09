import React, { useEffect } from 'react';
import { useState } from 'react';
import icon from '../assets/noun_User_1796556 1.png';

/** ParticipantCard displays a Participants name, age, dutypreferences and carseat
 *  - The rendering of duties should be refactored
 *  - A CardPlaceHolder is used in Profile.js to simulate the given measurement restrictions
 *  - Each Row-Item needs to be align correctly to headlines in Card
 *  - Rename to ParticipantInfo
 */

function ParticipantCard(props){
    const [color,setColor] = useState("#FFFBF2");
    const [selected, setSelected] = useState(false);

    useEffect(()=>{
        selected? setColor("#FADF63"):setColor("#FFFBF2");
    },[selected])

    return(
        <div className="ParticipantCard" style={{backgroundColor: color}} onClick={()=>setSelected(!selected)} >
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


export default ParticipantCard;