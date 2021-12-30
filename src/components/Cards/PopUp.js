import React from 'react';

function PopUp(props) {
    
    return (
        <form className="popup" onSubmit={props.submitChanges}>
            <div className="popup-content">
                <p className="popup-title">{props.title}</p>
                {props.children}
                <div className="popup-button-footer">
                    {props.buttons}
                </div>
            </div>
        </form>
    );
}

export default PopUp;