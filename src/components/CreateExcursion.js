import React, {useState} from 'react';
import LongInput from './Cards/LongInput';
import Footer from './Footer';
import DescriptionInput from './Cards/DescriptionInput';
import ExtraLongInput from './Cards/ExtraLongInput';
import DropDownMenu from './DropDownMenu/DropDownMenu';
import ExcursionAPI from './API/ExcursionAPI';
import ContactMemberAPI from './API/ContactMemberAPI';
import { useNavigate } from 'react-router-dom';

function CreateExcursion() {
    const [excursionName, setExcursionName] = useState();
    const [fromDate, setFromDate] = useState();
    const [toDate, setToDate] = useState();
    const [location, setLocation] = useState();
    const [description, setDescription] = useState();

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [email, setEmail] = useState();
    // const [firstName, setFirstName] = useState();
    // const [lastName, setLastName] = useState();
    // const [age, setAge] = useState();
    const [isOrganiser, setIsOrganiser] = useState(true);

    const navigate = useNavigate();

    function excursionNameChange(e) {
        setExcursionName(e.target.value);
    }

    function fromDateChange(e) {
        setFromDate(e.target.value);
    }

    function toDateChange(e) {
        setToDate(e.target.value);
    }

    function locationChange(e) {
        setLocation(e.target.value);
    }

    function descriptionChange(e) {
        setDescription(e.target.value);
    }

    function usernameChange(e) {
        setUsername(e.target.value);
    }

    function passwordChange(e) {
        setPassword(e.target.value);
    }

    function emailChange(e) {
        setEmail(e.target.value);
    }

    // function firstNameChange(e) {
    //     setFirstName(e.target.value);
    // }

    // function lastNameChange(e) {
    //     setLastName(e.target.value);
    // }

    // function ageChange(e) {
    //     setAge(e.target.value);
    // }

    // function dutiesChange(e) {
    //     setDuties(e.target.value);
    // }

    async function handleSubmit(e) {
        e.preventDefault();
        console.log("create excursion handle submit called")
        const excursion = await ExcursionAPI.createExcursion(
            {excursionName, fromDate, toDate, location, description});
        const excursionID = excursion.id
        ContactMemberAPI.signUp({username, password, email, isOrganiser, excursionID});
    }

    function disable() {
        if (!excursionName || !fromDate || !toDate || !location || !description || !username || !password 
            || !email ) {
            return true;
        }
        return false;
    }

    return (
        <>
            <div className="create-excursion">
                <div className="">
                    <form onSubmit={handleSubmit}>
                        <h4 style={{color: '#1ea774'}} >Add Contact Information</h4>
                        <div className="input-section">
                            <LongInput title="Username" value={username} type="text" changeValue={usernameChange}  />
                            <LongInput title="Password" value={password} type="password" changeValue={passwordChange}  />
                            <LongInput title="Email" value={email} type="text" changeValue={emailChange}  />
                        </div>
                        <h4 style={{color: '#1ea774', marginTop: "50px"}} >Excursion Information</h4>
                        <div className="input-section">
                            <ExtraLongInput title="Excursion Name" value={excursionName} type="text" changeValue={excursionNameChange}  /> 
                            <LongInput title="Location" value={location} type="text" changeValue={locationChange}  />
                        </div>
                        <div className="input-section">
                            <LongInput title="From" value={fromDate} type="date" changeValue={fromDateChange}  />
                            <LongInput title="To" value={toDate} type="date" changeValue={toDateChange}  />
                        </div>
                        <div className="input-section">
                            <DescriptionInput title="Description" value={description} type="text" changeValue={descriptionChange}  />
                        </div>
                        
                        {/* <div className="input-section">
                            <LongInput title="First name" value={firstName} type="text" changeValue={firstNameChange}  />
                            <LongInput title="Last name" value={lastName} type="text" changeValue={lastNameChange}  />
                            <LongInput title="Age" value={age} type="number" changeValue={ageChange}  />
                        </div> */}
                    
                        <button className="button-primary-small" 
                            type="submit" variant="primary" 
                            disabled={disable()} onClick={() => {navigate("/Profile")}}>
                            Create Excursion &amp; User
                        </button>
                    </form>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default CreateExcursion;