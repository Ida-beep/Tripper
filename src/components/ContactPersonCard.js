import React from 'react';
import Image from '../assets/noun_upload photo_1337310 1.png';
import '../index.css';
import LongCard from './LongCard';

function ContactPersonCard(props) {

    const personId = "84757"; //Connect to database

    return (personId) ? ( 
        <LongCard active={props.active}>
            <div className="contact-person-card">
                <div className="contact-member-image">
                    <img className="contact-member-image-1" src={props.ContactImage} alt="upload"/>
                </div>
                
                <div className="contact-member-info">
                    <div className="contact-member-name">
                        <h4>{props.data.name}</h4>
                    </div>
                    <div className="address-and-email">
                        <p><b>Contact Information</b></p>  
                        <p>{props.data.address.street}</p>
                        <p>{props.data.address.zip}</p>
                        <p>{props.data.email}</p>
                    </div>
                    <div className="mobile-info">
                        <p>(Mobile) {props.data.mobile}</p>
                        <p>(Phone) {props.data.phone}</p>
                        <p>(Work) {props.data.workphone}</p>
                    </div>
                    <div className="preferred-duties">
                    <p><b>Preferred duties</b></p>
                        <p>{props.data.dutypreferences[0]}</p>
                        <p>{props.data.dutypreferences[1]}</p>
                        <p>{props.data.dutypreferences[2]}</p>
                    </div>
                </div>
            </div>
            <div className="edit-button-container">
                <button className="button-extra-small" onClick={props.active}>Edit</button>
            </div>
        </LongCard>
    ) : (<LongCard active={props.active}>
            <div className="create-contact-member">
                <button className="button-extra-small" onClick={props.active}>Create Contact Member</button>
            </div>
        </LongCard>);
}

export default ContactPersonCard;