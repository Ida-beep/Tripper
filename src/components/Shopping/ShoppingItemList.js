// import React, {useState, useEffect} from "react"
// import TableScaffold from "../Cards/TableScaffold"

// function ShoppingItemList(){    
    
//     const [allDuties, setAllDuties] = useState([])
    
//     // Renders DutyOverview from DB
//     /*
//     useEffect(async ()=> {
//         setAllDuties(await API_get.fetchItemsFromDB())
//     }, [])*/
      
//     return (
//         <div className="card-container">
//             <h4 style={{fontSize:"20px"}}>Shopping List Items</h4>
//             <div className="table-container" >
//                 <TableScaffold 
//                     // Pass the key name from database object in array matching headers 
//                     tkey={["itemname","amount", "unit"]}
//                     //Pass Real headers in array
//                     theaders={["Item","Amount, Unit"]} 
//                     // Pass object data source 
//                     tdata={allDuties}
//                 />
//             </div>
//                 <div className="button-container">
//                     <button className="button-secondary-extra-small">Delete</button>
//                     <button className="button-secondary-extra-small">Add Duty</button>
//                     <button className="button-secondary-extra-small">Find Previous</button>
//                 </div>
//         </div>    
//     )
// }

// export default ShoppingItemList