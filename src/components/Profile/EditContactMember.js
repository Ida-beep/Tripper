import React, {useState} from 'react';
import { useEffect } from 'react';
import DropDownMenu from '../DropDownMenu/DropDownMenu';
import PopUp from '../Cards/PopUp';
import ContactMemberAPI from '../API/ContactMemberAPI';
import LongInput from '../Cards/LongInput';
import ShortInput from '../Cards/ShortInput';
import ExtraLongInput from '../Cards/ExtraLongInput';

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
            setContactP(await ContactMemberAPI.fetchContactMemberFromDB());
            console.log("fetchContactMember called")
        };
        fetchData();
        console.log("EditContactMember useeffect called ");
    }, []); 

    useEffect(() => {
        setFirstName(contactP.firstName)
        setLastName(contactP.lastName)
        setAge(contactP.age);
        setEmail(contactP.email)
        setStreet(contactP.street)
        setZip(contactP.zip)
        setCity(contactP.city)
        setMobile(contactP.mobilePhone)
        setPhone(contactP.phone)
        setWorkPhone(contactP.workPhone)
        setDuties(contactP.duties)
    }, [contactP]); 

    const [firstName,setFirstName] = useState();
    const [lastName,setLastName] = useState();
    const [age, setAge] = useState();
    const [email,setEmail] = useState();
    const [street, setStreet] = useState();
    const [zip, setZip] = useState();
    const [city, setCity] = useState();
    const [mobile, setMobile] = useState();
    const [phone, setPhone] = useState();
    const [workPhone, setWorkPhone] = useState();
    const [duties,setDuties]=useState([]);

    function disable() {
        if (!firstName || !lastName || !email || !age || !street || !zip || 
            !city || !mobile || !phone || !workPhone || !duties) {
            return true;
        }
        return false;
    }


    function changeFirstName(e) {
        e.preventDefault();
        setFirstName(e.target.value);
    }

    function changeLastName(e) {
        e.preventDefault();
        setLastName(e.target.value);
    }

    function changeAge(e) {
        e.preventDefault();
        setAge(e.target.value);
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

    function changeWorkPhone(e) {
        e.preventDefault();
        setWorkPhone(e.target.value);
    }

    function changeDuties(e) {
        e.preventDefault();
        setDuties(e.target.value);
    }


    function handleSubmit(e) {
        e.preventDefault();
        console.log("update ebing called")
        ContactMemberAPI.updateContactMemberFromDB({firstName,lastName, age, duties, 
            email, street, workPhone, phone, mobile, zip, city});
    }

    
    const buttons = [
        <button className="button-secondary-extra-small" onClick={props.toggleContactMember}>Cancel</button>,
        <button className="button-secondary-extra-small" disabled={disable()}>Save</button>,
        <button className="button-secondary-extra-small" onClick={props.toggleContactMember}>Finish</button>
    ]

    return (props.showEditContactMember) && (
        <PopUp editState={props.toggleContactMember} title={props.title} data={contactP}
            submitChanges={handleSubmit} buttons={buttons}>
            
            <div className="input-section">
                <LongInput title="First Name" value={firstName} changeValue={changeFirstName} type="text" />
                <LongInput title="Last Name" value={lastName} changeValue={changeLastName} type="text" />
                <ShortInput title="Age" value={age} changeValue={changeAge} type="text" />
            </div>
            <div className="input-section">
                <ExtraLongInput title="Email" value={email} changeValue={changeEmail} type="email" />
            </div>
            <div className="input-section">
                <LongInput title="Street" value={street} changeValue={changeStreet} type="text" />
                <LongInput title="City" value={city} changeValue={changeCity} type="text" />
                <ShortInput title="Zip" value={zip} changeValue={changeZip} type="text" />
            </div>
            <div className="input-section">
                <LongInput title="Mobile" value={mobile} changeValue={changeMobile} type="text" />
                <LongInput title="Phone" value={phone} changeValue={changePhone} type="text" />
                <LongInput title="Work" value={workPhone} changeValue={changeWorkPhone} type="text" />
            </div>
            <div className="popup-drop-down">
                <DropDownMenu duties={duties} changeValue={changeDuties}/>
            </div>
        </PopUp>
    );
}

export default EditContactMember;