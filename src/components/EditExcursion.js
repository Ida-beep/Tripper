import React, {useState} from 'react';
import PopUp from './PopUp';

function EditExcursion(props) {

    /** 
     * - Change date input to short inputs once fixed
     * - Change description to big box
    */
    
    const [excursionTitle, setExcursionTitle] = useState();
    const [dateFrom, setDateFrom] = useState();
    const [dateTo, setDateTo] = useState();
    const [location, setLocation] = useState();
    const [description, setDescription] = useState();

    const excursionData = [excursionTitle, dateFrom, dateTo, location, description];

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
    
    return (props.trigger) ? (
        <PopUp editState={props.editState} title={props.title} data={excursionData }>
            <div className="input-section">
                <div className="long-input">
                    <label>
                        <p>Excursion Title</p>
                        <input type="text" value={excursionTitle}
                        onChange={changeExcursionTitle} />
                    </label>
                </div>
            </div>
            <div className="input-section">
                <div className="long-input">
                    <label>
                        <p>From (date)</p>
                        <input type="text" value={dateFrom}
                        onChange={changeDateFrom} />
                    </label>
                </div>
                <div className="long-input">
                    <label>
                        <p>To (date)</p>
                        <input type="text" value={dateTo}
                        onChange={changeDateTo} />
                    </label>
                </div>
                <div className="long-input">
                    <label>
                        <p>Location</p>
                        <input type="text" value={location}
                        onChange={changeLocation} />
                    </label>
                </div>
            </div>
            <div className="input-section">
                <div className="long-input">
                    <label>
                        <p>Description</p>
                        <input type="text" value={description}
                        onChange={changeDescription} />
                    </label>
                </div>
            </div>
        </PopUp>
    ) : "" ;
}

export default EditExcursion;