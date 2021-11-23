import React from 'react';

function Card(props) {
    const header = props.header.map(line => (<p>{line}</p>))
    //Rename "line" to "buttonName"?
    const rightButtons = props.rightbutton.map(line=>(<button className="button-extra-small" onClick={props.togglePopup}>{line}</button>))
    const leftButtons = props.leftbutton.map(line=>(<button className="button-extra-small">{line}</button>))

    return (
        <div className="card"> 
            <div className="Header">{header}</div>
                {props.content}
            <div className="Footer">
                {/**Edit order so that "add" is to the right and maybe make it primary? */}
                <div className="Right">{rightButtons}</div>
                <div className="Left">{leftButtons}</div>
            </div>
        </div>
    );
}

export default Card;