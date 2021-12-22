import React, {useState, useEffect} from 'react'
import TableScaffold from '../Cards/TableScaffold.js'
import FamilyMemberAPI from '../API/FamilyMemberAPI.js'


function XGuestDutyCard () {
    // const partData = participantData.map(data => <XGuestDuty data={data}  />);
    const [allGuests,setAllGuests] = useState([])
    const [selected, setSelected] = useState([]);
    
    // Renders GuestsOverview from DB
    useEffect(()=> {
        async function fetchData(){
            setAllGuests(await FamilyMemberAPI.fetchFamilyMembersFromDB())
        };
        fetchData();
        console.log("guestdutycard called")
    }, []) 

    function addElementToSelected(element){
        setSelected((prevState)=> [...prevState,element]);
        console.log("selected: ", selected);
    }

    function disableAssignSelected() {
        if (selected.length < 1) {
            return true;
        }
        return false;
    }
    
    return (   
        <div className="card-container">
            <h4 style={{fontSize:"20px"}}>Participants and Prefered Duties</h4>
            <div className="table-container">
                <TableScaffold 
                    tkey={[
                        "firstName",
                        "age",
                        "duties"
                    ]}
                    theaders={[
                        "First Name",
                        "Age",
                        "Duty Preferences"
                    ]} 
                    tdata={allGuests}
                />
            </div>
            
            <div className="button-container">
                <button className="button-secondary-extra-small" 
                    disabled={disableAssignSelected()}>Assign Selected</button>
                <button className="button-secondary-extra-small">Auto Assign All</button>
            </div>       
        </div>
    )
}

export default XGuestDutyCard