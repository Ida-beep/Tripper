import React from 'react';
import { useState } from 'react';
import icon from '../assets/noun_User_1796556 1.png';

/** ParticipantCard displays a Participants name, age, dutypreferences and carseat
 *  - The rendering of duties should be refactored
 *  - Car seats are currently missing
 *  - A CardPlaceHolder is used in Profile.js to simulate the given measurement restrictions
 *  - Each Row-Item needs to be align correctly to headlines in Card
 *  - The Icon needs to be centered beneath the Name-prop
 *  - The color-change of the PartcipicantCards needs to be refactored to useEffect()
 */

function ParticipantCard(props){
    const [color,setColor] = useState("#FFFBF2");
    const [isSelected, setIsSelected] = useState(false);

    function changeSelection(){
        switch(isSelected){
            case false:
                setColor("#FADF63");
                setIsSelected(true);
                break;
            case true:
                setColor("#FFFBF2");
                setIsSelected(false);
                break;
            default:
                return;
        }
    }

    return(
        <div className="ParticipantCard" style={{backgroundColor: color}} onClick={()=>changeSelection()} >
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