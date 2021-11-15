import React from 'react';
import {useState} from 'react';
import dutyList from '../data/dutyList';
import DropDown from './DropDown';
import DropDownItem from './DropDownItem';

/**
 *  - buttons "back" and "add" need some more styling
 *  - From Backend: should the duties be stored as state-object in DropDownMenu?
 *  - The Array remove/add works, but the color is not following!
 */


function DropDownMenu(props){
    const [dutyArr, setDutyArr] = useState([]);
    const duties = dutyList.map(duty => <DropDownItem duties={dutyArr} key={duty.name} name={duty.name} removeDuty={()=>removeDuty(duty.name)} addToArr={()=>addToArr(duty.name)}/>);

    function addToArr(name){
        if(dutyArr.length < 3){
            setDutyArr((prevState)=> [...prevState,name])
        }
    }

    function removeDuty(name){
        console.log(dutyArr);
        let index = dutyArr.indexOf(name);
        dutyArr.splice(index,1);
        console.log(dutyArr);
    }
    
    return(
        <DropDown >
            {duties}
        </DropDown>
    )
}

export default DropDownMenu;