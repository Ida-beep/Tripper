import { Parse } from "parse";

/**
 * ExcursionAPI handles all API calls related to the 
 * Excursion table in the DB, such as fetching, 
 * deleting, update and add.
 * */


/**Creates excursion and saves in DB */
const createExcursion = async ({
  excursionName,fromDate,toDate,
  location,description,
}) => {
  const newExcursion = new Parse.Object("Excursion");
  newExcursion.set("excursionTitle", excursionName);
  newExcursion.set("fromDate", new Date(fromDate));
  newExcursion.set("toDate", new Date(toDate));
  newExcursion.set("location", location);
  newExcursion.set("description", description);

  try {
    const result = await newExcursion.save();
    alert("Excursion created", result);
    return result;
  } catch (error) {
    alert("error: " + error);
  }
};

/**
 * REST API call, it creates an excursion without dates
 */
async function creatExcursionREST({ excursionName, location, description }) {
  const data = {
    excursionName: excursionName,
    location: location,
    description: description,
  };

  try {
    const response = await fetch(
      "https://parseapi.back4app.com/parse/classes/Excursion",
      {
        method: "POST",
        headers: {
          "X-Parse-Application-Id": "BWRXJVmbqMoffsZkk8sZYB2RNFMYU6YtQWTFa9zz",
          "X-Parse-REST-API-Key": "Oo6W88C7LWuQehuIUUx4EVliOONWKjC1Knkub8Zj",
        },
        body: JSON.stringify(data),
      }
    );
    const content = await response.json();
    console.log("Succesfull response", response, content);
  } catch (error) {
    console.log("Could not do REST POST call: ", error.message);
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
  let excursionInfo = {};

  for (let i = 0; i < excursions.length; i++) {
    try {
      const excursion = await query.get(excursions[i].id);

      if (excursion.id === excursionID) {
        const excursionTitle = excursion.get("excursionTitle");
        const dateFrom = excursion.get("fromDate");
        const fromDate = new Date(dateFrom);
        const fromDateString = fromDate.toLocaleDateString();
        const dateTo = excursion.get("toDate");
        const toDate = new Date(dateTo);
        const toDateString = toDate.toLocaleDateString();
        const location = excursion.get("location");
        const description = excursion.get("description");

        const excursionObject = {
          id: excursionID,
          excursionTitle: excursionTitle,
          fromDate: fromDateString,
          toDate: toDateString,
          location: location,
          description: description,
        };
        excursionInfo = excursionObject;
      }
    } catch (error) {
      alert("Failed to retrieve the Excursion entry. Error: " + error.message);
    }
  }
  return excursionInfo;
};

/**Returns all excursions from DB */
const fetchAllExcursionsFromDB = async () => {
  const query = new Parse.Query("Excursion");
  let excursions = await query.find();
  let excursionArr = [];

  for (let i = 0; i < excursions.length; i++) {
    try {
      const excursion = await query.get(excursions[i].id);
      const excursionTitle = excursion.get("excursionTitle");
      const excursionObject = {
        id: excursion.id,
        excursionTitle: excursionTitle,
      };
      excursionArr.push(excursionObject);
    } catch (error) {
      alert("Failed to retrieve the Excursion entry. Error: " + error.message);
    }
  }
  return excursionArr;
};

/**Updates changed data to relevant excursion*/
const updateExcursion = async ({
  excursionTitle,dateFrom,dateTo,
  location,description,
}) => {
  const query = new Parse.Query("Excursion");

  try {
    const User = Parse.User.current();
    const queryUser = new Parse.Query("User");
    const user = await queryUser.get(User.id);
    const contactMember = await queryUser.get(user.id);
    const excursionID = contactMember.get("excursionID");
    const object = await query.get(excursionID);

    object.set("excursionTitle", excursionTitle);
    object.set("fromDate", new Date(dateFrom));
    object.set("toDate", new Date(dateTo));
    object.set("location", location);
    object.set("description", description);
    try {
      const response = await object.save().then(
        () => {
          alert("Info successfully updated", response);
        },
        (error) => {
          alert("failed to update with error-code : " + error);
        }
      );
    } catch (error) {
      console.error("Error while updating Excursion", error);
    }
  } catch (error) {
    console.error("Error while retrieving object Excursion", error);
  }
};

const ExcursionAPI = {
  createExcursion,
  updateExcursion,
  fetchAllExcursionsFromDB,
  fetchExcursionFromDB,
  creatExcursionREST,
};

export default ExcursionAPI;
