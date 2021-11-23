import React from 'react';
import API from './API';

function PopUp(props) {

    function handleSubmit(e) {
        e.preventDefault();
        console.log("handleSubmit called")
        API.editContactMember(props.data);
        console.log(typeof(props.data[0]))
        console.log("submit handles with " + props.data);
    }
    
    return (
        <form className="popup" onSubmit={handleSubmit}>
            <div className="popup-content">
                <p className="popup-title">{props.title}</p>
                {props.children}
                <div className="popup-button-footer">
                    <button className="button-extra-small" onClick={props.editState}>Cancel</button>
                    <button className="button-extra-small">Save</button>
                </div>
            </div>
        </form>
    );
}

export default PopUp;