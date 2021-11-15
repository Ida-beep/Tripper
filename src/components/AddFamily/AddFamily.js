import React from 'react';
import { useState } from 'react';
import AddFamilyItem from './AddFamilyItem.js';

/**
 * @public AddFamily is a pop-up window that lets the user add a person as family
 *         It renders the AddFamilyItems on the condition that it's active as a popup
 *         It also handles the connection to the backend. 
 * @param {*} props   
 *  - Are all the state relevant when we get to backend? We'll have to see.
 *  - the "submit" needs to be handled
 *  - ListOfDuties should be mapped to a dropdown menu
 *  - Should there be a boolean contactPerson=false?
 *    Or should they each be mapped to a single contactPerson
 *  - key as firstName should be changed to unique id
 *  - shoudl connection to backend be here or in AddFamilyItem? Imagine, you want to
 *    edit instead of initiating, then the fields should have the existing info.. then
 *    it might be a good idea to hoist the states even up to ContactPersonCard.js 
 */
function AddFamily(props){
    const [active,setActive] = useState(true);
    const addFamilyItem = <AddFamilyItem active={()=>setActive(!active)}/>;

    return (
        <> {props.active && addFamilyItem}</>
    );
}

export default AddFamily;