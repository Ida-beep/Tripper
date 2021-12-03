import React, {useState} from 'react';
import DropDownMenu from './DropDownMenu/DropDownMenu';
import PopUp from './PopUp';
import API from './API';
import LongInput from './LongInput';
import ShortInput from './ShortInput';

/**
 * @public EditContactPerson defines the content of the popup to
 * edit contact person information, using its parent Popup.js
 * 
 * TO DO
 * - All mobile numbers are not mandatory, change this
 * - How to prevent overwriting of data when editing contact member information
 */

function EditContactPerson(props) {
    const [firstName,setFirstName] = useState();
    const [lastName,setLastName] = useState();
    const [email,setEmail] = useState();
    const [street, setStreet] = useState();
    const [zip, setZip] = useState();
    const [city, setCity] = useState();
    const [mobile, setMobile] = useState();
    const [phone, setPhone] = useState();
    const [work, setWorkNumber] = useState();
    const [duties,setDuties]=useState([]);
    
    const contactPersonData = [firstName, lastName, email, street, zip, city, mobile, phone, work, duties]

    function changeFirstName(e) {
        e.preventDefault();
        setFirstName(e.target.value);
    }

    function changeLastName(e) {
        e.preventDefault();
        setLastName(e.target.value);
    }

    function changeEmail(e) {
        e.preventDefault()
        setEmail(e.target.value);
    }

    function changeStreet(e) {
        e.preventDefault();
        setStreet(e.target.value);
    }

    function changeZip(e) {
        e.preventDefault();
        setZip(e.target.value);
    }

    function changeCity(e) {
        e.preventDefault();
        setCity(e.target.value);
    }

    function changeMobile(e) {
        e.preventDefault();
        setMobile(e.target.value);
    }

    function changePhone(e) {
        e.preventDefault();
        setPhone(e.target.value);
    }

    function changeWorkNumber(e) {
        e.preventDefault();
        setWorkNumber(e.target.value);
    }

    const contactPersonID = null; //Add data source

    function handleSubmit(e) {
        e.preventDefault();
        if (!firstName){
            setFirstName(e.target.value = "missing first name")
        }
        if (!lastName){
            setLastName(e.target.value = "missing last name")
        }
        if (!email) {
            setEmail(e.target.value = "missing email")
        }
        if (!street){
            setStreet(e.target.value = "missing street")
        }
        if (!zip){
            setZip(e.target.value = "missing zip")
        }
        if (!mobile){
            setMobile(e.target.value = "missing mobile number")
        }
        if (!phone){
            setPhone(e.target.value = "missing phone number")
        }
        if (!work){
            setWorkNumber(e.target.value = "missing work number")
        }
        if (!duties){
            setDuties(e.target.value = "missing duties")
        }
        if (firstName && lastName && email && street && zip && city && mobile && phone && work && duties) {
            if (contactPersonID === null) { 
                console.log("handleSubmit called")
                API.addContactPerson(firstName, lastName, street, zip, city, mobile, phone, work, duties);
                console.log("submit handles with " + firstName, lastName, street, zip, city, mobile, phone, work, duties);
            }
            else {
                
                console.log("handleSubmit called")
                API.editContactMember(firstName, lastName, street, zip, city, mobile, phone, work, duties);
                console.log("submit handles with " + firstName, lastName, street, zip, city, mobile, phone, work, duties);
            }
        }
    }

    return (props.showEditContactMember) && (
        <PopUp editState={props.toggleContactMember} title={props.title} data={contactPersonData}
            submitChanges={handleSubmit} leftButton="Cancel" rightButton="Save">
            
            <div className="input-section">
                <LongInput title="First Name" value={firstName} changeValue={changeFirstName} type="text"/>
                <LongInput title="Last Name" value={lastName} changeValue={changeLastName} type="text" />
                <LongInput title="Email" value={email} changeValue={changeEmail} type="text" />
            </div>
            <div className="input-section">
                <LongInput title="Street" value={street} changeValue={changeStreet} type="text" />
                <ShortInput title="Zip" value={zip} changeValue={changeZip} type="text" />
                <LongInput title="City" value={city} changeValue={changeCity} type="text" />
            </div>
            <div className="input-section">
                <LongInput title="Mobile" value={mobile} changeValue={changeMobile} type="text" />
                <LongInput title="Phone" value={phone} changeValue={changePhone} type="text" />
                <LongInput title="Work" value={work} changeValue={changeWorkNumber} type="text" />
            </div>
            <div className="popup-drop-down">
                <DropDownMenu duties={duties}/>
            </div>
        </PopUp>
    );
}

export default EditContactPerson;