import React, {useState} from 'react';
import PopUp from './PopUp';

function DeletePopup(props) {

    function handleSubmit(e) {
        e.preventDefault();
        //Add what to do when confirmed
    }

    const buttons = [
        <button className="button-secondary-extra-small" onClick={props.editState}>Cancel</button>,
        <button className="button-secondary-extra-small" >Confirm</button>
    ]

    
    return (props.trigger) && (
        <PopUp submitChanges={handleSubmit} buttons={buttons}>
            <div className="input-section">
                <p>Are you sure you want to delete [item]?</p>
            </div>
        </PopUp>
    );
}

export default DeletePopup;



