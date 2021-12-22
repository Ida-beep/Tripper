import React, {useState, useEffect} from 'react'
// import participantData from '../data/participantData.js'
import TableScaffold from './TableScaffold.js'
import API_get from '../API_get.js'




function XGuestDutyCard () {
    // const partData = participantData.map(data => <XGuestDuty data={data}  />);
    const [allGuests,setAllGuests] = useState([])
    
    // Renders GuestsOverview from DB
    useEffect(async ()=> {
        setAllGuests(await API_get.fetchGuestsFromDB())
    }, [])
    
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
                        "Duty Pref"
                    ]} 
                    tdata={allGuests}
                />
            </div>
            
            <div className="button-container">
                <button className="button-extra-small">Assign Selected</button>
                <button className="button-extra-small">Auto Assign All</button>
            </div>       
        </div>
    )
}

export default XGuestDutyCard