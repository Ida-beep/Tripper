import React from 'react';
import Card from './Card';

/**
 *  @public OverviewCard defines all Cards that are made for making overviews - i.e. people, duties or shopping.
 */

//Redundant, can probably just name Card OverviewCard and delete this one?
function OverviewCard(props) {
    
    return (
<<<<<<< HEAD
        <div className="OverviewCard">
            <Card content={props.content} header={props.header} rightbutton={props.rightbutton} leftbutton={props.leftbutton} togglePopup={props.togglePopup}/>
=======
        <div className="overview-card">
            <Card content={props.content} header={props.header} rightbutton={props.rightbutton} leftbutton={props.leftbutton} active={props.active}/>
>>>>>>> feature_Ingrid
        </div>
    );
}

export default OverviewCard;
