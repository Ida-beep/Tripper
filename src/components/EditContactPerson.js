import React, {useState} from 'react';
import DropDownMenu from './DropDownMenu/DropDownMenu';
import PopUp from './PopUp'

function EditContactPerson(props) {
    const [firstName,setFirstName] = useState();
    const [lastName,setLastName] = useState();
    const [street, setStreet] = useState();
    const [zip, setZip] = useState();
    const [city, setCity] = useState();
    const [mobile, setMobile] = useState();
    const [phone, setPhone] = useState();
    const [work, setWorkNumber] = useState();
    const [duties,setDuties]=useState([]);

    const contactPersonData = [firstName, lastName, street, zip, city, mobile, phone, work, duties]

    function changeFirstName(e) {
        e.preventDefault();
        setFirstName(e.target.value);
    }
    function changeLastName(e) {
        e.preventDefault();
        setLastName(e.target.value);
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

    return (props.trigger) ? (
        <PopUp editState={props.editState} title={props.title} data={contactPersonData}>
            <div className="input-section">
                <div className="long-input">
                    <label>
                        <p>First Name</p>
                        <input type="text" value={firstName}
                        onChange={changeFirstName} />
                    </label>
                </div>
                <div className="long-input">
                    <label>
                        <p>Last Name</p>
                        <input type="text" value={lastName}
                        onChange={changeLastName} />
                    </label>
                </div>
            </div>
            <div className="input-section">
                <div className="long-input">
                    <label>
                        <p>Street</p>
                        <input type="text" value={street}
                        onChange={changeStreet} />
                    </label>
                </div>
                <div className="short-input">
                    <label>
                        <p>Zip</p>
                        <input type="text" value={zip}
                        onChange={changeZip} />
                    </label>
                </div>
                <div className="long-input">
                    <label>
                        <p>City</p>
                        <input type="text" value={city}
                        onChange={changeCity} />
                    </label>
                </div>
            </div>
            <div className="input-section">
                <div className="long-input">
                    <label>
                        <p>Mobile</p>
                        <input type="text" value={mobile}
                        onChange={changeMobile} />
                    </label>
                </div>
                <div className="long-input">
                    <label>
                        <p>Phone</p>
                        <input type="text" value={phone}
                        onChange={changePhone} />
                    </label>
                </div>
                <div className="long-input">
                    <label>
                        <p>Work</p>
                        <input type="text" value={work}
                        onChange={changeWorkNumber} />
                    </label>
                </div>
            </div>
            <div class="popup-drop-down">
                <DropDownMenu duties={duties}/>
            </div>
        </PopUp>
    ) : "" ;
}

export default EditContactPerson;