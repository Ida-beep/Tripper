import react, {useState} from 'react';
import CarsAPI from '../API/CarsAPI';
import LongInput from '../Cards/LongInput';
import PopUp from '../Cards/PopUp';

function AddCarPopup(props) {
    const [carModel, setCarModel] = useState();
    const [license, setLicense] = useState();
    const [color, setColor] = useState();
    const [seats, setSeats] = useState();
    const carData = [carModel, license, color, seats]

    function changeCarModel(e) {
        e.preventDefault();
        setCarModel(e.target.value);
    }

    function changeLicense(e) {
        e.preventDefault();
        setLicense(e.target.value);
    }

    function changeColor(e) {
        e.preventDefault();
        setColor(e.target.value);
    }

    function changeSeats(e) {
        e.preventDefault();
        setSeats(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log("handleSubmit called")
        CarsAPI.addCar(carData);
    }

    const buttons = [
        <button className="button-extra-small" onClick={props.toggleAddCar}>Cancel</button>,
        <button className="button-extra-small">Save</button>
    ]

    return (props.showCarPopup) && (
        <PopUp data={carData} title="Add Car" submitChanges={handleSubmit} buttons={buttons}>
            <div className="input-section">
                <LongInput title="Car Model" value={carModel} 
                    changeValue={changeCarModel} type="text" placeholder="Audi"/>
                <LongInput title="License Plate" value={license} 
                    changeValue={changeLicense} type="text" placeholder="DHF324"/>
                <LongInput title="Car Color" value={color} 
                    changeValue={changeColor} type="text" placeholder="Red"/>
            </div>
            <div className="input-section">
                <LongInput title="Number of Seats" value={seats} 
                    changeValue={changeSeats} type="text" placeholder="5"/>
            </div>
        </PopUp>
    );
}

export default AddCarPopup;