// import React from 'react';
// import ParticipantInfo from './ParticipantInfo';
// import participantData from './data/participantData.js';
// import OverviewCard from './OverviewCard';

// /**
//     @public YouAndYourFamilyCard shows all relevant participating members of a family
//  */

// function YouAndYourFamilyCard(props) {
//     const participantComponents = participantData.map(data => <ParticipantInfo key={data.id} name={data.name} age={data.age} dutypreferences={data.dutypreferences} carseat={data.carseat}/>);
//     const CardHeader = ["Name","Age","Duties","Carseat"];
//     const Rightbuttons = ["Add"];
//     const LeftButtons = ["Delete"];

//     return (
//         <div className="you-and-your-family">
//             <OverviewCard togglePopup={props.toggleFamilyItem} class="YouAndYourFamily" header={CardHeader} content={participantComponents} rightbutton={Rightbuttons} leftbutton={LeftButtons}/>
//         </div>
//     );
// }

import React,{ useEffect, useState } from 'react';
import TableScaffold from './ExDuty/TableScaffold';
import API_get from './API_get';



/**
    @public YouAndYourFamilyCard shows all relevant participating members of a family
 */

function YouAndYourFamilyCard(props) {
    const [memberAndFamiliy,setMemberAndFamily] = useState([])

    useEffect(async ()=> {
        setMemberAndFamily(await API_get.fetchFamilyMembersFromDB())
    }, [])

    return (   
        <div className="card-container">
            <h4 style={{fontSize:"20px"}}>You and Your Family</h4>
            <div className="table-container">
                <TableScaffold 
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
                <button className="button-extra-small">Delete</button>
                <button className="button-extra-small">Add</button>
            </div>       
        </div>
    )
}
export default YouAndYourFamilyCard;