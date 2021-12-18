import { Parse } from 'parse';

//Think this one adds a new object
function editExcursion({excursionTitle, fromDate, toDate, location, description}) {
    try {
        const Excursion = Parse.Object.extend("Excursion");

        const excursion = new Excursion();
        excursion.set("excursionTitle", excursionTitle);
        excursion.set("fromDate", fromDate);
        excursion.set("toDate", toDate);
        excursion.set("location", location);
        excursion.set("description", description);

        excursion.save().then((excursion)=> {
            alert("Excursion was edited: " + excursion.excursionTitle);
        }, (error) => {
            alert("Failed to edit object, error code: " + error.message)
        })
        console.log("Updated excursion information");
    } catch(error) {
        console.log(error);
    }
}

const fetchExcursionFromDB = async () => {
    
    const User = Parse.User.current();
    const queryUser = new Parse.Query("User");
    const user = await queryUser.get(User.id);
    const contactMember = await queryUser.get(user.id);
    const excursionID = contactMember.get("excursionID");

    const query = new Parse.Query("Excursion");
    let excursions = await query.find();


    let excursionInfo = {}
    
    for (let i = 0; i < excursions.length; i++) { 
        try {
            const excursion = await query.get(excursions[i].id);
            
            if (excursion.id === excursionID) {
                const excursionTitle = excursion.get("excursionTitle");
                const fromDate = excursion.get("fromDate");
                const fromDateString = fromDate.toLocaleDateString()
                const toDate = excursion.get("toDate");
                const toDateString = toDate.toLocaleDateString();
                const location = excursion.get("location");
                const description = excursion.get("description");
                
                const excursionObject = {
                    id: excursionID,
                    excursionTitle: excursionTitle,
                    fromDate: fromDateString,
                    toDate: toDateString,
                    location: location,
                    description: description
                };
                excursionInfo = excursionObject;

            }
            
        } catch (error) {
            alert("FAILED to retrieve the Excursion entry entry. Error: " + error.message);
          }
    } 
    return excursionInfo
}

export default {editExcursion:editExcursion,
    fetchExcursionFromDB:fetchExcursionFromDB};