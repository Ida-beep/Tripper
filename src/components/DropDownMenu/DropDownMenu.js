import React from 'react';
import {useState, useEffect } from 'react';
import DropDown from './DropDown';
import API from '../API/API.js';
import DropDownItem from './DropDownItem';

/**
 * @public DropDownMenu takes all duties from backend and displays them as DropDownItems.
 * You can select an amount of Duties that will be saved as you preferred duties (selectedDuties).
 */
function DropDownMenu(props){
    const [selectedDuties, setselectedDuties] = useState([]);
    let displayedDuties = [];

    useEffect(()=> {
        let result = [];
        
        function addToArr(name){
            if(selectedDuties.length < 3){
                setselectedDuties((prevState)=> [...prevState,name])
            }
        }

        function removeDuty(name){
            console.log(selectedDuties);
            let index = selectedDuties.indexOf(name);
            selectedDuties.splice(index,1);
            console.log(selectedDuties);
        }

        function mapDuties(fetchedDutyList){
            console.log("mapping duties.. : " + fetchedDutyList.length)
            for(let i = 0; i < fetchedDutyList.length;i++){
                displayedDuties.push(
                    <DropDownItem duties={selectedDuties}
                    key={fetchedDutyList[i].name}
                    name={fetchedDutyList[i].name}
                    removeDuty={()=>removeDuty(fetchedDutyList[i].name)}
                    addToArr={()=>addToArr(fetchedDutyList[i].name)}/>);
        }}  
            async function fetchData(){
                result = await API.getDuties();
                return result;
            }
        fetchData().then(()=>{
            mapDuties(result);
        })
    }, []);

    
    return(
        <DropDown>
            {displayedDuties}
        </DropDown>
    )
}

export default DropDownMenu;