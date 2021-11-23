import React from 'react';
import Card from './Card';
import '../index.css';

//Redundant, can probably just name Card OverviewCard and delete this one?
function OverviewCard(props) {
    
    return (
        <div className="overview-card">
            <Card content={props.content} header={props.header} rightbutton={props.rightbutton} leftbutton={props.leftbutton} active={props.active}/>
        </div>
    );
}

export default OverviewCard;
