import React, {useState} from 'react';
import Card from './Card';
import '../index.css';

function ContactPersonCard(props) {
    //create conditionals in case of empty state
    const personId = props.id;
    //const personId = null; //could be unnecessary - not sure of the behaviour if props.id is null
    if(personId === null) {
        return (
            <div>Add Contact Member Button</div>
        )
    }

    //Add card component

    return ( //fix styling and spacing
            <div className="Card">
                <div className="UpperSection">
                    <div className="ContactMemberInfo">
                        <div className="ContactMemberName">
                            <h2>{props.data.name}</h2>
                        </div>
                        <div className="AddressAndEmail">
                            <p>[street]</p>
                            <p>[zip, city]</p>
                            <p>[email]</p>
                        </div>
                        <div className="MobileInfo">
                            <p>(Mobile) [number]</p>
                            <p>(Phone) [number]</p>
                            <p>(Work) [number]</p>
                        </div>
                    </div>
                    <div className="ContactMemberImage">
                        <img src="" alt=""/>
                        <p> Image Placeholder</p>
                    </div>
                </div>
                <div className="PreferredDuties">
                    <p>Preferred duties</p>
                    <ul>
                        <li>{props.data.dutypreferences[0]}</li>
                        <li>{props.data.dutypreferences[1]}</li>
                        <li>{props.data.dutypreferences[2]}</li>
                    </ul>
                </div>
            </div>
    )
}

export default ContactPersonCard;