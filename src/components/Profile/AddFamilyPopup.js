import React from 'react';
import DropDownMenu from '../DropDownMenu/DropDownMenu.js';
import { useState } from 'react';
import FamilyMemberAPI from '../API/FamilyMemberAPI.js';
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
        FamilyMemberAPI.addFamilyMember(personData);
    }

    function disable() {
        if (!firstName || !lastName || !age) {
            return true;
        }
        return false;
    }

    const buttons = [
        <button className="button-extra-small" onClick={props.toggleFamilyItem}>Cancel</button>,
        <button className="button-extra-small" onClick={props.toggleFamilyItem}>Finish</button>
    ]

    return (props.showAddFamilyPopup) && (
        <PopUp data={personData} title="Add Family Member" submitChanges={handleSubmit} buttons={buttons}>
            <div className="input-section">
                <LongInput title="First Name" value={firstName} changeValue={changeFirstName} type="text"/>
                <LongInput title="Last Name" value={lastName} changeValue={changeLastName} type="text" />
                <ShortInput title="Age" value={age} changeValue={changeAge} type="text" /> 
            </div>
            <div className="input-section">
                <DropDownMenu duties={duties}/>
                <button className="button-extra-small" style={{marginTop:"50px"}}
                    disabled={disable()}>Add</button>
            </div>
        </PopUp>
    );
}
export default AddFamilyPopup;

//editState={props.toggleFamilyItem} toggleFamilyItem={props.toggleFamilyItem}