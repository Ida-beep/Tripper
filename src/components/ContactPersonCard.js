import React from 'react';
import Image from '../assets/noun_upload photo_1337310 1.png';

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
                            <h4>{props.data.name}</h4>
                        </div>
                        <div className="AddressAndEmail">
                            <p>{props.data.address.street}</p>
                            <p>{props.data.address.zip}</p>
                            <p>{props.data.email}</p>
                        </div>
                        <div className="MobileInfo">
                            <p>(Mobile) {props.data.mobile}</p>
                            <p>(Phone) {props.data.phone}</p>
                            <p>(Work) {props.data.workphone}</p>
                        </div>
                    </div>
                    <div className="ContactMemberImage">
                        <img className="ContactMemberImage-1" src={Image} alt="upload"/>
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