import { Parse } from 'parse';

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

export default {editExcursion:editExcursion};