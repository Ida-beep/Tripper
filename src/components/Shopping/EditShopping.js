import React, {useState} from 'react';
import API from '../API/API';
import ShoppingPopUp from './ShoppingPopUp';

function EditShopping(props) {

    
    const [item, setItem] = useState();
    const [amount, setAmount] = useState();
    const [unit, setUnit] = useState();
    


    const shoppingData = [item, amount, unit];

    function changeItem(e) {
        e.preventDefault();
        setItem(e.target.value);
    }
    function changeAmount(e) {
        e.preventDefault();
        setAmount(e.target.value);
    }

    function changeUnit(e) {
        e.preventDefault();
        setUnit(e.target.value);
    }

    
    return (props.trigger) ? (
        <ShoppingPopUp editState={props.editState} title={props.title} data={shoppingData }
        submitChanges={API.editShoppingL}>
  
            <div className="input-section">
                <div className="long-input">
                    <label>
                        <p>Add Shopping Item</p>
                        <input type="text" placeholder='Item' value={item}
                        onChange={changeItem} />
                    </label>
                </div>
                <div className="long-input">
                    <label>
                        <p>Amount</p>
                        <input type="number" placeholder='0' value={amount}
                        onChange={changeAmount} />
                    </label>
                </div>
                <div className="long-input">
                    <label>
                        <p>Unit</p>
                        <input type="text" placeholder='kg / L / pcs...' value={unit}
                        onChange={changeUnit} />
                    </label>
                </div>
            </div>
         
        </ShoppingPopUp>
    ) : "" ;
}

export default EditShopping;



