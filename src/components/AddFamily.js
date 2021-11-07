/* import React from 'react';
import { useState } from 'react';
import dutyList from './data/dutyList.js'; */

/** AddFamily is a pop-up window that lets the user add a person as family
 *  - Are all the state relevant when we get to backend? We'll have to see.
 *  - the "submit" needs to be mapped to the final "add" button after filling out inputs
 *  - ListOfDuties should be mapped to a dropdown menu
 */

/* function AddFamily(){
    const [firstName,setFirstName] = useState("First Name");
    const [lastName,setLastName] = useState("Last Name");
    const [age,setAge] = useState(0);
    const [duties,setDuties] = useState([]);
    const ListOfDuties = dutyList.map(duty => <li>{duty.name}</li>);

    function handleChange(event) {
        setFirstName(event.target.value);
    }

    function handleSubmit(event) {
        alert("A Family Member was submitted: " + firstName + lastName + age);
        event.preventDefault();
    }

    return (
        <form className="Popup" onSubmit={handleSubmit}>
        <div className="Popup-content">
            <p className="TitleNewMember">New Family Member</p>
            <div className="Inputs">
            <label>
                <p>First Name</p>
                <input type="text" value={firstName}
                onChange={handleChange} />
            </label>
            <label>
                <p>Last Name</p>
                <input type="text" value={lastName}
                onChange={handleChange} />
            </label>
            <label>    
                <p>Age</p>
                <input type="text" value={age}
                onChange={handleChange} />
            </label>  
            </div>          
        </div>
        </form>
    );
}

export default AddFamily; */