import React from 'react';
import AddFamilyItem from './AddFamilyItem.js';

/**
 * @public AddFamily is a pop-up window that lets the user add a person as family
 *         It renders the AddFamilyItems on the condition that it's showPopup as a popup
 *         It also handles the connection to the backend. 
 * @param {*} props   
 *  - ListOfDuties should be mapped to a dropdown menu
 *  - Should there be a boolean contactPerson=false?
 *    Or should they each be mapped to a single contactPerson
 *  - key as firstName should be changed to unique id
 */
function AddFamily(props){
    const addFamilyItem = <AddFamilyItem showPopup={props.showPopup} togglePopup={props.togglePopup}/>;

    return (
        <> {props.showPopup && addFamilyItem}</>
    );
}

export default AddFamily;