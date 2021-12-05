import React from 'react';

function PopUp(props) {
    
    return (
        <form className="popup" onSubmit={props.handleSubmit}>
            <div className="popup-content">
                <p className="popup-title">{props.title}</p>
                {props.children}
                <div className="popup-button-footer">
                    <button className="button-extra-small" onClick={props.editState}>{props.leftButton}</button>
                    <button className="button-extra-small">{props.rightButton}</button>
                </div>
            </div>
        </form>
    );
}

export default PopUp;