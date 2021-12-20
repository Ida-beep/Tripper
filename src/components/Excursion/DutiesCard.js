import React, {useState, useEffect} from "react"
import TableScaffold from "../Cards/TableScaffold"
import DutiesAPI from "../API/DutiesAPI"

function DutiesCard(props){    
    const [allDuties, setAllDuties] = useState([]);
    const [selected, setSelected] = useState([]);

    function addElementToSelected(element){
        setSelected((prevState)=> [...prevState,element]);
        console.log("selected: ", selected);
    }
    
     useEffect(()=> {
        async function fetchData(){
            setAllDuties(await DutiesAPI.fetchDutiesFromDB())
        };
        fetchData();
        console.log("DutiesCard useEffect called");
    }, []) 

    async function handleDelete(e){
        e.preventDefault();
        DutiesAPI.deleteDuty(selected).then(async () => {
            const refetchedList = await DutiesAPI.fetchDutiesFromDB();
            setAllDuties(refetchedList);
        });
    } 

    function disableDelete() {
        if (selected.length < 1) {
            return true;
        }
        return false;
    }
      
    return (
        <div className="card-container">
            <h4 style={{fontSize:"20px"}}>Excursion Duties</h4>
            <div className="table-container" >
                <TableScaffold onSelection={(selected)=>addElementToSelected(selected)}
                    // Pass the key name from database object in array matching headers 
                    tkey={["name","minRequired","peopleAssigned"]}
                    //Pass Real headers in array
                    theaders={["Duty","Min. guests","People Assigned"]} 
                    // Pass object data source 
                    tdata={allDuties}
                />
            </div>
            <div className="button-container">
                <button className="button-extra-small" onClick={handleDelete}
                    disabled={disableDelete()}>Delete</button>
                <button className="button-extra-small"onClick={props.active}>Add Duty</button>
                <button className="button-extra-small">Find Previous</button>
            </div>
        </div>    
    )
}

export default DutiesCard