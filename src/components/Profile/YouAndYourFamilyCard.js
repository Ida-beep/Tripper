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
import TableScaffold from '../Cards/TableScaffold';
import API_get from '../API/API_get';
import API from '../API/API';

/**
    @public YouAndYourFamilyCard shows all relevant participating members of a family
 */

function YouAndYourFamilyCard(props) {
    const [selected, setSelected] = useState([]);
    const [memberAndFamiliy,setMemberAndFamily] = useState([])

    function addElementToSelected(element){
        setSelected((prevState)=> [...prevState,element]);
        console.log(selected);
    }

/*     useEffect(()=> {
        async function fetchData(){setMemberAndFamily(await API_get.fetchFamilyMembersFromDB())};
        fetchData();
    }, []) */

   function handleAdd() {
        API.addFamilyMember({firstName:"Emil",lastName:"Løndeberg",age:"45",duties:["lala","blabla"]});
    } 

    async function handleDelete(e){
        e.preventDefault();
        API.deleteFamilyMember(selected).then(async () => {
            const refetchedList = await API_get.fetchFamilyMembersFromDB();
            setMemberAndFamily(refetchedList);
        });
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
                <button className="button-extra-small" onClick={handleDelete}>Delete</button>
                <button className="button-extra-small" onClick={handleAdd}>Add</button>
            </div>       
        </div>
    )
}
export default YouAndYourFamilyCard;