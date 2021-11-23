import React from 'react';
import Card from './Card';

/**
 *  @public OverviewCard defines all Cards that are made for making overviews - i.e. people, duties or shopping.
 */

function OverviewCard(props) {
    
    return (
        <div className="OverviewCard">
            <Card content={props.content} header={props.header} rightbutton={props.rightbutton} leftbutton={props.leftbutton} togglePopup={props.togglePopup}/>
        </div>
    );
}

export default OverviewCard;
