import React from 'react';
import ShoppingAPI from '../API/ShoppingAPI';

function ShoppingPopUp(props) {

    console.log("props: " + props.data);
    console.log("item: " + props.data[0]);

    function handleSubmit(e) {
        e.preventDefault();
        console.log("handleSubmit called")
        
        ShoppingAPI.addShoppingItem(props);
    }
    
    return (
        <form className="popup" onSubmit={handleSubmit}>
            <div className="popup-content">
                <p className="popup-title">{props.title}</p>
                {props.children}
                <div className="popup-button-footer">
                    <button className="button-extra-small" onClick={props.editState}>Cancel</button>
                    <button className="button-extra-small">Delete</button>
                    <button className="button-extra-small">Add</button>
                </div>
            </div>
        </form>
    );
}

export default ShoppingPopUp;