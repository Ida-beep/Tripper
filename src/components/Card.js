import React from 'react';
import '../index.css';

function Card(props) {
    const header = props.header.map(line => (<p>{line}</p>))
    const rightButtons = props.rightbutton.map(line=>(<button className="ButtonExtraSmall" onClick={props.active}>{line}</button>))
    const leftButtons = props.leftbutton.map(line=>(<button className="ButtonExtraSmall">{line}</button>))

    return (//edit classname
        <div className="Card"> 
            <div className="Header">{header}</div>
            {props.content}
            <div className="Footer">
                <div className="Right">{rightButtons}</div>
                <div className="Left">{leftButtons}</div>
            </div>
        </div>
    );
}

export default Card;