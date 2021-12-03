import React, { useState } from 'react';
import LongCard from './LongCard';
import API from './API.js';

function ContactPersonCard(props) {

    
    let contactPersonData = {};
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [age,setAge] = useState();
    const [email,setEmail] = useState();
    const [mobile,setMobile] = useState();
    const [phone,setPhone] = useState();
    const [workPhone,setWorkPhone] = useState();
    const [address,setAddress] = useState();
    const [zip, setZip] = useState();
    const [city, setCity] = useState();
    const [duties, setDuties] = useState([]);

    API.getContactMember()
    .then((userObject)=>{
        console.log("Person: "+ userObject.firstName)
        contactPersonData = userObject;
        setFirstName(userObject.firstName);
        setLastName(userObject.lastName);
        setAge(userObject.age);
        setEmail(userObject.email);
        setMobile(userObject.mobile);
        setPhone(userObject.phone);
        setWorkPhone(userObject.workPhone);
        setAddress(userObject.address);
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