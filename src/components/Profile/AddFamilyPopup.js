import React from 'react';
import DropDownMenu from '../DropDownMenu/DropDownMenu.js';
import { useState } from 'react';
import API from '../API/API.js';
import PopUp from '../Cards/PopUp';
import LongInput from '../Cards/LongInput.js';
import ShortInput from '../Cards/ShortInput.js';

/**
 * @public AddFamilyPopup defines the content of the popup to 
 * add family items, using its parent PopUp.js
 * 
 */
function AddFamilyPopup(props){
    const [firstName,setFirstName] = useState();
    const [lastName,setLastName] = useState();
    const [age,setAge] = useState();
    const [duties,setDuties]=useState([]);
    const personData = {firstName,lastName,age,duties};

    function changeFirstName(e) {
        e.preventDefault();
        setFirstName(e.target.value);
    }
    function changeLastName(e) {
        e.preventDefault();
        setLastName(e.target.value);
    }
    function changeAge(e) {
        e.preventDefault();
        setAge(e.target.value);
        console.log("age was changed")
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (!firstName){
            setFirstName(e.target.value = "missing first name")
        }
        if (!lastName){
            setLastName(e.target.value = "missing last name")
        }

        if(firstName && lastName && age && duties){
            API.addFamilyMember(personData);
            console.log("submit handled for " + personData.firstName + " " + personData.lastName);
        
            console.log("missing persondata")
        }
    }

    return (props.showAddFamilyPopup) && (
        <PopUp editState={props.toggleFamilyItem} data={personData} title="Add Family Member" 
        submitChanges={handleSubmit} leftButton="Cancel" rightButton="Save">
            <div className="input-section">
                <LongInput title="First Name" value={firstName} changeValue={changeFirstName} type="text"/>
                <LongInput title="Last Name" value={lastName} changeValue={changeLastName} type="text" />
                <ShortInput title="Age" value={age} changeValue={changeAge} type="text" /> 
            </div>
            <div className="input-section">
                <DropDownMenu duties={duties}/>
            </div>
        </PopUp>
    );
}
export default AddFamilyPopup;