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

/*     //could be unnecessary - not sure of the behaviour if props.id is null
    const personId = props.id;
    if(personId === null) {
        return (
            <div>Add Contact Member Button</div>
        )
    } */

    return ( 
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
 {/*                    <div className="preferred-duties">
                    <p><b>Preferred duties</b></p>
                        <p>{duties[0]}</p>
                        <p>{duties[1]}</p>
                        <p>{duties[2]}</p>
                    </div> */}
                </div>
            </div>
        </LongCard>
    )
}

export default ContactPersonCard;