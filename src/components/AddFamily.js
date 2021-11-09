import React from 'react';
import { useState } from 'react';
import DropDownMenu from './DropDownMenu.js';

/** AddFamily is a pop-up window that lets the user add a person as family
 *  - Are all the state relevant when we get to backend? We'll have to see.
 *  - the "submit" needs to be handled
 *  - ListOfDuties should be mapped to a dropdown menu
 */

function AddFamily(props){
    const [firstName,setFirstName] = useState("First Name");
    const [lastName,setLastName] = useState("Last Name");
    const [age,setAge] = useState(0);
    const [active,setActive] = useState(true);

/*     useEffect((e)=>{
        setActive? null: e.target.style="display:none";
    }) */

    function changeFirstName(e) {
        setFirstName(e.target.value);
    }
    function changeLastName(e) {
        setLastName(e.target.value);
    }
    function changeAge(e) {
        setAge(e.target.value);
    }

    function handleSubmit(e) {
        alert("A Family Member was submitted: " + firstName + lastName + age);
        e.preventDefault();
    }

    return (
        <div> {props.active?
        <form className="Popup">
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
                <DropDownMenu/>
                <button className="ButtonExtraSmall" id="AddFamBack" onClick={()=>setActive(!active)}>Back</button>
                <button className="ButtonExtraSmall" id="AddFamAdd" type="submit" onSubmit={handleSubmit}>Add</button>
            </div> 
        </div>
        </form>
        : null}
        </div>
    );
}

export default AddFamily;