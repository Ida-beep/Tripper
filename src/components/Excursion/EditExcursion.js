import React, {useState, useEffect, useRef} from 'react';
import PopUp from '../Cards/PopUp';
import LongInput from '../Cards/LongInput';
import ExcursionAPI from '../API/ExcursionAPI';
import ExtraLongInput from '../Cards/ExtraLongInput';
import DescriptionInput from '../Cards/DescriptionInput';

function EditExcursion(props) {

    /**
     * @public EditExcursion renders the PopUp for editing excursions. Is a child of the component PopUp.s
     * 
     * TODO
     * - Change date input to short inputs once fixed
     * - Change description to big box
    */
    
    const [excursion, setExcursion] = useState();
    const [excursionTitle, setExcursionTitle] = useState();
    const [dateFrom, setDateFrom] = useState();
    const [dateTo, setDateTo] = useState();
    const [location, setLocation] = useState();
    const [description, setDescription] = useState();
    const notInitialRender = useRef(false);
    

    useEffect(() => {
        async function fetchData(){
            setExcursion(await ExcursionAPI.fetchExcursionFromDB());
            console.log("fetchExcursion called")
        };
        fetchData();
        console.log("Excursion useeffect called ");
    }, []); 


    useEffect(() => {
        if(notInitialRender.current) {
            setExcursionTitle(excursion.excursionTitle);
            setDateFrom(excursion.fromDate);
            setDateTo(excursion.toDate);
            setLocation(excursion.location);
            setDescription(excursion.description);
        } else {
            notInitialRender.current = true;
        }
    }, [excursion]); 

    

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

    function disable() {
        if (!excursionTitle || !dateFrom || !dateTo || !location || !description) {
            return true;
        }
        return false;
    }


    function handleSubmit(e) {
        e.preventDefault();
        console.log("haaandleee submit: " + excursionTitle, dateFrom, dateTo, location, description)
        ExcursionAPI.updateExcursion({excursionTitle, dateFrom, dateTo, location, description});
        console.log("submit handles with " + excursionTitle, dateTo, dateFrom, location, description);
    }

    const buttons = [
        <button className="button-secondary-extra-small" onClick={props.editState}>Cancel</button>,
        <button className="button-secondary-extra-small" onClick={props.editState}>Finish</button>
    ]
    
    return (props.trigger) && ( 
        <PopUp editState={props.editState} title={props.title} 
            submitChanges={handleSubmit} buttons={buttons}>
            <div className="input-section">
                <ExtraLongInput title="Excursion Title" value={excursionTitle} changeValue={changeExcursionTitle} type="text" />
            </div>
            <div className="input-section">
                <LongInput title="From (date)" value={dateFrom} changeValue={changeDateFrom} type="date" />
                <LongInput title="To (date)" value={dateTo} changeValue={changeDateTo} type="date" />
                <LongInput title="Location" value={location} changeValue={changeLocation} type="text" />
            </div>
            <div className="input-section">
                <DescriptionInput title="Description" value={description} changeValue={changeDescription} type="text" />
            </div>
            <div className="popup-button-footer">
                <button className="button-primary-extra-small" disabled={disable()}
                    style={{marginBottom:"-10px"}}>Save</button>
            </div>
        </PopUp>
    );
}

export default EditExcursion;