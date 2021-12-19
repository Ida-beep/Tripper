import React, {useState} from 'react';
import PopUp from '../Cards/PopUp';
import LongInput from '../Cards/LongInput';
import ExcursionAPI from '../API/ExcursionAPI';

function EditExcursion(props) {

    /**
     * @public EditExcursion renders the PopUp for editing excursions. Is a child of the component PopUp.s
     * 
     * TODO
     * - Change date input to short inputs once fixed
     * - Change description to big box
    */
    
    const [excursionTitle, setExcursionTitle] = useState();
    const [dateFrom, setDateFrom] = useState();
    const [dateTo, setDateTo] = useState();
    const [location, setLocation] = useState();
    const [description, setDescription] = useState();

    //const excursionData = [excursionTitle, dateFrom, dateTo, location, description];

    function changeExcursionTitle(e) {
        e.preventDefault();
        setExcursionTitle(e.target.value);
    }
    function changeDateFrom(e) {
        e.preventDefault();
        setDateFrom(e.target.value);
    }

    function changeDateTo(e) {
        e.preventDefault();
        setDateTo(e.target.value);
    }

    function changeLocation(e) {
        e.preventDefault();
        setLocation(e.target.value);
    }

    function changeDescription(e) {
        e.preventDefault();
        setDescription(e.target.value);
    }

    const excursionID = null; //Add data source

    /*The if-else statement determines whether data is currently there, 
    meaning it should overwrite data or add data */
    function handleSubmit(e) {
        if (excursionID === null) { 
            e.preventDefault();

            if (!excursionTitle){
                setExcursionTitle(e.target.value = "missing excursion title")
            }
            if (!dateFrom){
                setDateFrom(e.target.value = "missing starting date")
            }
            if (!dateTo){
                setDateTo(e.target.value = "missing ending date")
            }
            if (!location){
                setLocation(e.target.value = "missing location")
            }
            if (!description){
                setDescription(e.target.value = "missing description")
            }

            if(excursionTitle && dateFrom && dateTo && location && description) {
                console.log("handleSubmit called")
                ExcursionAPI.editExcursion(excursionTitle, dateFrom, dateTo, location, description);
                console.log("submit handles with " + excursionTitle, dateTo, dateFrom, location, description);
            }
        } else {
            
        }
    }

    const buttons = [
        <button className="button-extra-small" onClick={props.editState}>Cancel</button>,
        <button className="button-extra-small">Save</button>
    ]
    
    return (props.trigger) && ( 
        <PopUp editState={props.editState} title={props.title} 
            submitChanges={handleSubmit} buttons={buttons}>
            <div className="input-section">
                <LongInput title="Excursion Title" value={excursionTitle} changeValue={changeExcursionTitle} type="text" />
            </div>
            <div className="input-section">
                <LongInput title="From (date)" value={dateFrom} changeValue={changeDateFrom} type="date" />
                <LongInput title="To (date)" value={dateTo} changeValue={changeDateTo} type="date" />
                <LongInput title="Location" value={location} changeValue={changeLocation} type="text" />
            </div>
            <div className="input-section">
                <LongInput title="Description" value={description} changeValue={changeDescription} type="text" />
            </div>
        </PopUp>
    );
}

export default EditExcursion;