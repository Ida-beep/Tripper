import React, { useState } from 'react';
import LongCard from '../Cards/LongCard';
import ContactMemberAPI from '../API/ContactMemberAPI.js';

function ContactPersonCard(props) {
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email,setEmail] = useState();
    const [mobile,setMobile] = useState();
    const [phone,setPhone] = useState();
    const [workPhone,setWorkPhone] = useState();
    const [address,setAddress] = useState();
    const [zip, setZip] = useState();
    const [city, setCity] = useState();

     ContactMemberAPI.fetchContactMemberFromDB()
    .then((userObject)=>{
        console.log("ContactMember fetch called");
        setFirstName(userObject.firstName);
        setLastName(userObject.lastName);
        setEmail(userObject.email);
        setMobile(userObject.mobilePhone);
        setPhone(userObject.phone);
        setWorkPhone(userObject.workPhone);
        setAddress(userObject.street);
        setZip(userObject.zip);
        setCity(userObject.city);
    }) 

    const personId = "84757"; //Connect to database

    return (personId) ? ( 
        <LongCard active={props.active}>
            <div className="contact-person-card">
                <div className="contact-member-image">
                    <img className="contact-member-image-1" src={props.ContactImage} alt="upload"/>
                </div>
                
                <div className="contact-member-info">
                    <div className="contact-member-name">
                        <h4>{firstName + " " + lastName}</h4>
                    </div>
                    <div className="address-and-email">
                        <p><b>Contact Information</b></p>  
                        <p>{address}</p>
                        <p>{zip + " " + city}</p>
                        <p>{email}</p>
                    </div>
                    <div className="mobile-info">
                        <p>(Mobile) {mobile}</p>
                        <p>(Phone) {phone}</p>
                        <p>(Work) {workPhone}</p>
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