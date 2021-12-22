import React, {useState, useEffect} from 'react';
import LongInput from '../Cards/LongInput';
import PopUp from '../Cards/PopUp';
import FamilyMemberAPI from '../API/FamilyMemberAPI';
import ShortInput from '../Cards/ShortInput';
import DropDownMenu from '../DropDownMenu/DropDownMenu';

function EditFamilyMemberPopup(props) {
    const [familyM, setFamilyM] = useState([])
    const [firstName,setFirstName] = useState();
    const [lastName,setLastName] = useState();
    const [age,setAge] = useState();
    const [duties,setDuties]=useState([]);
    const personData = {firstName,lastName,age,duties};

    useEffect(() => {
        async function fetchData(){
            setFamilyM(await FamilyMemberAPI.fetchFamilyMembersFromDB());
            console.log("fetchFamilyMember called")
        };
        fetchData();
        console.log("EditFamilyMember useeffect called ");
    }, []); 

    useEffect(() => {
        setFirstName(familyM.firstName)
        setLastName(familyM.lastName)
        setAge(familyM.age)
        setDuties(familyM.duties)
    }, [familyM]);

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
        console.log("age was changed")
    }

    function handleSubmit(e) {
        e.preventDefault();
        FamilyMemberAPI.updateFamilyMember(personData, props.selected);
    }

    function disable() {
        if (!firstName || !lastName || !age) {
            return true;
        }
        return false;
    }

    const buttons = [
        <button className="button-secondary-extra-small" onClick={props.editState}>Cancel</button>,
        <button className="button-secondary-extra-small" onClick={props.editState}>Finish</button>
    ]

    //
    return (props.editFMActive) && (
        <PopUp data={personData} title="Add Family Member" submitChanges={handleSubmit} buttons={buttons}>
            <div className="input-section">
                <LongInput title="First Name" value={firstName} changeValue={changeFirstName} type="text"/>
                <LongInput title="Last Name" value={lastName} changeValue={changeLastName} type="text" />
                <ShortInput title="Age" value={age} changeValue={changeAge} type="text" /> 
            </div>
            <div className="input-section">
                <DropDownMenu duties={duties}/>
                <button className="button-secondary-extra-small" style={{marginTop:"50px"}}
                    disabled={disable()}>Save</button>
            </div>
        </PopUp>
    );
}

export default EditFamilyMemberPopup;