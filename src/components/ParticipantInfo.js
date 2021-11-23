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
        <div className="participant-info" style={{backgroundColor: color}} onClick={()=>setSelected(!selected)} >
            <div className="name-icon">
                <p className="name">{props.name}</p>
                <img className="icon"src={icon} alt="Logo"></img>
            </div>
            <div className="age">
                <p className="data-item">{props.age}</p>
            </div>
            <div className="duties">
                <p className="data-item">{props.dutypreferences[0]}</p>
                <p className="data-item">{props.dutypreferences[1]}</p>
                <p className="data-item">{props.dutypreferences[2]}</p>
            </div>
            <div className="car-seat">
                <p className="data-item">{props.carseat}</p>
            </div>
        </div>
    )
};


export default ParticipantInfo;