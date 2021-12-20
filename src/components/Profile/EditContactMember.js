import React, {useState} from 'react';
import { useEffect } from 'react';
import DropDownMenu from '../DropDownMenu/DropDownMenu';
import PopUp from '../Cards/PopUp';
import ContactMemberAPI from '../API/ContactMemberAPI';
import LongInput from '../Cards/LongInput';
import ShortInput from '../Cards/ShortInput';

/**
 * @public EditContactMembern defines the content of the popup to
 * edit contact person information, using its parent Popup.js
 * 
 * TO DO
 * - All mobile numbers are not mandatory, change this
 * - How to prevent overwriting of data when editing contact member information
 */

function EditContactMember(props) {
    const [contactP, setContactP] = useState([])
    
    useEffect(() => {
        async function fetchData(){
            setContactP(await ContactMemberAPI.fetchContactMemberFromDB())
        };
        fetchData();
        console.log("EditContactMember useeffect called ");
    }, []); 

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

    function changeDuties(e) {
        e.preventDefault();
        setDuties(e.target.value);
    }

   

    function handleSubmit(e) {
        e.preventDefault();
        // if (!firstName){
        //     setFirstName(e.target.value = "missing first name")
        // }
        // if (!lastName){
        //     setLastName(e.target.value = "missing last name")
        // }
        // if (!email) {
        //     setEmail(e.target.value = "missing email")
        // }
        // if (!street){
        //     setStreet(e.target.value = "missing street")
        // }
        // if (!zip){
        //     setZip(e.target.value = "missing zip")
        // }
        // if (!mobile){
        //     setMobile(e.target.value = "missing mobile number")
        // }
        // if (!phone){
        //     setPhone(e.target.value = "missing phone number")
        // }
        // if (!work){
        //     setWorkNumber(e.target.value = "missing work number")
        // }
        // if (!duties){
        //     setDuties(e.target.value = "missing duties")
        // }
        // if (firstName && lastName && email && street && zip && city && mobile && phone && work && duties) {
        //     if (contactPersonID === null) { 
        //         console.log("handleSubmit called")
        //         ContactMemberAPI.addContactPerson(firstName, lastName, street, zip, city, mobile, phone, work, duties);
        //         console.log("submit handles with " + firstName, lastName, street, zip, city, mobile, phone, work, duties);
        //     }
        //     else {
                
        //         console.log("handleSubmit called")
        //         ContactMemberAPI.editContactMember(firstName, lastName, street, zip, city, mobile, phone, work, duties);
        //         console.log("submit handles with " + firstName, lastName, street, zip, city, mobile, phone, work, duties);
        //     }
        // }
    }

    const buttons = [
        <button className="button-extra-small" onClick={props.toggleContactMember}>Cancel</button>,
        <button className="button-extra-small">Save</button>
    ]

    const contactPersonID = null; //Add data source

    return (props.showEditContactMember) && (
        <PopUp editState={props.toggleContactMember} title={props.title} data={contactP}
            submitChanges={handleSubmit} buttons={buttons}>
            
            <div className="input-section">
                <LongInput title="First Name" changeValue={changeFirstName} type="text" />
                <LongInput title="Last Name" changeValue={changeLastName} type="text" />
                <LongInput title="Email" changeValue={changeEmail} type="email" />
            </div>
            <div className="input-section">
                <LongInput title="Street" changeValue={changeStreet} type="text" />
                <ShortInput title="Zip" changeValue={changeZip} type="text" />
                <LongInput title="City" changeValue={changeCity} type="text" />
            </div>
            <div className="input-section">
                <LongInput title="Mobile" changeValue={changeMobile} type="text" />
                <LongInput title="Phone" changeValue={changePhone} type="text" />
                <LongInput title="Work" changeValue={changeWorkNumber} type="text" />
            </div>
            <div className="popup-drop-down">
                <DropDownMenu duties={duties} changeValue={changeDuties}/>
            </div>
        </PopUp>
    );
}

export default EditContactMember;