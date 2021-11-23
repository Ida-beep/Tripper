import React from 'react';
import DropDownMenu from '../DropDownMenu/DropDownMenu.js';
import { useState } from 'react';
import API from '../API.js';


/**
 * @public AddFamilyItem defines the content of the popup AddFamily.js
 * TODO
 * - code repetition from line 55-75, should be refactored. 
 */
function AddFamilyItem(props){
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

    return(
        <form className="Popup" onSubmit={handleSubmit}>
        <div className="Popup-content">
            <p className="TitleNewMember">New Family Member</p>
            <div className="Inputs">
            <div className="addFirstName">
                <label>
                    <p>First Name</p>
                    <input type="text" value={firstName}
                    onChange={changeFirstName} />
                </label>
            </div>
            <div className="addLastName">
                <label>
                    <p>Last Name</p>
                    <input type="text" value={lastName}
                    onChange={changeLastName} />
                </label>
            </div>
            <div className="addAge">    
                <label>    
                    <p>Age</p>
                    <input type="text" value={age}
                    onChange={changeAge} />
                </label> 
            </div>
            </div> 
            <div className="DropDownSecondLine">
                <DropDownMenu duties={duties}/>
                <button className="ButtonExtraSmall" id="AddFamBack" type="button" onClick={props.togglePopup}>Back</button>
                <button className="ButtonExtraSmall" id="AddFamAdd" type="submit">Add</button>
            </div> 
        </div>
        </form>
    );
}
export default AddFamilyItem;