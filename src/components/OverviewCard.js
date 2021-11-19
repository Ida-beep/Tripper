import React from 'react';
import Card from './Card';
import '../index.css';

function OverviewCard(props) {
    
    return (
        <div className="OverviewCard">
            <Card content={props.content} header={props.header} rightbutton={props.rightbutton} leftbutton={props.leftbutton} togglePopup={props.togglePopup}/>
        </div>
    );
}

export default OverviewCard;
