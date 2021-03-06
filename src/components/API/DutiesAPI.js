import { Parse } from "parse";

/**
 * DutiesAPI handles all API calls related to the Duties table
 * in the DB, such as fetching, deleting, update and add.
 * */


//Fetches duties from current excursion
const fetchDutiesFromDB = async () => {
  
  const User = Parse.User.current();
  const queryUser = new Parse.Query("User");
  const user = await queryUser.get(User.id);
  const contactMember = await queryUser.get(user.id);
  const excursionID = contactMember.get("excursionID");
  const dutyCollection = [];
  const query = new Parse.Query("Duties");
  let allDutiesFromDB = await query.find();

  for (let i = 0; i < allDutiesFromDB.length; i++) {
    try {
      const duty = await query.get(allDutiesFromDB[i].id);
      if (duty.get("excursionID") === excursionID) {
        const id = allDutiesFromDB[i].id;
        const name = duty.get("name");
        const minRequired = duty.get("minRequired");
        const peopleAssigned = duty.get("peopleAssigned");

        const dutyObject = {
          id: id,
          name: name,
          minRequired: minRequired,
          peopleAssigned: peopleAssigned,
        };
        dutyCollection.push(dutyObject);
      }
    } catch (error) {
      console.log(`Failed to retrieve the duty entry. Error: ${error.message}`);
    }
  }
  return dutyCollection;
};

/*Fetches and returns duties from previous excursions. 
 The excursion ID is passed in as a parameter.*/
const fetchPreviousDutyFromDB = async (id) => {
  const dutyCollection = [];
  const query = new Parse.Query("Duties");

  let allDutiesFromDB = await query.find();
  for (let i = 0; i < allDutiesFromDB.length; i++) {
    try {
      const duty = await query.get(allDutiesFromDB[i].id);
      if (duty.get("excursionID") === id) {
        const dutyID = allDutiesFromDB[i].id;
        const name = duty.get("name");
        const minRequired = duty.get("minRequired");

        const dutyObject = {
          id: dutyID,
          name: name,
          minRequired: minRequired,
        };
        dutyCollection.push(dutyObject);
      }
    } catch (error) {
      alert(`Failed to retrieve the duty entry. Error: ${error.message}`);
    }
  }
  return dutyCollection;
};

//Adds duty to current excursion
async function addDuty(data) {
  try {
    //Fetches current excursion ID
    const User = Parse.User.current();
    const queryUser = new Parse.Query("User");
    const user = await queryUser.get(User.id);
    const contactMember = await queryUser.get(user.id);
    const excursionID = contactMember.get("excursionID");

    //Assigns and cleans up data passed as argument
    const dutyName = data.name;
    const minRequired = parseInt(data.minRequired);
    const Duty = Parse.Object.extend("Duties");
    const duty = new Duty();

    duty.set("name", dutyName);
    duty.set("minRequired", minRequired);
    duty.set("excursionID", excursionID);
    duty.set("peopleAssigned", 0);

    duty.save().then(
      (duty) => {
        alert("A duty was submitted: " + dutyName);
      },
      (error) => {
        alert("Failed to create object, error code: " + error.message);
      }
    );
  } catch (error) {
    console.log("Failed to add duty:", error.code);
  }
}

/*Adds multiple duties passed as list
  using addDuty()*/
async function addMultipleDuties(list) {
  for (let i = 0; i < list.length; i++) {
    addDuty(list[i]);
  }
}

//Deletes duty passed as parameter
async function deleteDuty(duty) {
  if (typeof duty !== "undefined") {
    const dutyID = duty.id;
    const Duties = Parse.Object.extend("Duties");
    const query = new Parse.Query(Duties);

    query.equalTo("objectId", dutyID);
    let result = await query.find();

    result = result[0];
    result.destroy().then(
      () => {
        alert("Duty successfully deleted ");
      },
      (error) => {
        alert("failed to delete with error-code : " + error.code);
      }
    );
  }
}

const DutiesAPI = {
  fetchPreviousDutyFromDB,
  deleteDuty,
  addDuty,
  fetchDutiesFromDB,
  addMultipleDuties,
};

export default DutiesAPI;
