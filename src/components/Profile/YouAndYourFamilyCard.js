// import React from 'react';
// import ParticipantInfo from './ParticipantInfo';
// import participantData from './data/participantData.js';
// import OverviewCard from './OverviewCard';


import React,{ useEffect, useState } from 'react';
import TableScaffold from '../Cards/TableScaffold';
import FamilyMemberAPI from '../API/FamilyMemberAPI';

/**
    @public YouAndYourFamilyCard shows all relevant participating members of a family
 */

function YouAndYourFamilyCard(props) {
    const [selected, setSelected] = useState([]);
    const [memberAndFamiliy,setMemberAndFamily] = useState([])
  

    function addElementToSelected(element){
        setSelected((prevState)=> [...prevState,element]);
        console.log("selected: ", selected);
    }

    useEffect(()=> {
        async function fetchData(){
            setMemberAndFamily(await FamilyMemberAPI.fetchFamilyMembersFromDB())
        };
        fetchData();
        console.log("You and your family useEffect called");
    }, []) 

     async function handleDelete(e){
        e.preventDefault();
        FamilyMemberAPI.deleteFamilyMember(selected).then(async () => {
            const refetchedList = await FamilyMemberAPI.fetchFamilyMembersFromDB();
            setMemberAndFamily(refetchedList);
        });
    } 

    function disable() {
        if (selected.length < 1) {
            return true;
        }
        return false;
    }
    
    return (   
        <div className="card-container">
            <h4 style={{fontSize:"20px"}}>You and Your Family</h4>
            <div className="table-container">
                <TableScaffold onSelection={(selected)=>addElementToSelected(selected)}
                    tkey={[
                        "firstName",
                        "lastName",
                        "age",
                        "duties"
                    ]}
                    theaders={[
                        "First Name",
                        "Last Name",
                        "Age",
                        "Duty Pref"
                    ]} 
                    tdata={memberAndFamiliy}
                />
            </div>
            
            <div className="button-container">
                <button className="button-secondary-extra-small" onClick={handleDelete}
                    disabled={disable()}>Delete</button>
                <button className="button-secondary-extra-small" onClick={props.editActive}
                    disabled={disable()}>Edit</button>
                <button className="button-primary-extra-small" onClick={props.toggleFamilyItem}>Add</button>
            </div>       
        </div>
    )
}
export default YouAndYourFamilyCard;