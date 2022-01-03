import { Parse } from "parse";

/**
 *  @public initializes connection with backedn Back4App
 */
function initialize() {
  Parse.initialize(
<<<<<<< HEAD
    "txYcnk3LdCbPcDggqgiehGbHACOXlSMonSEMI3sa",
    "ddgb2A9EdCLwOOLtCJaVmnfxCdOpF5iKdYFdgiMt"
=======
    "BWRXJVmbqMoffsZkk8sZYB2RNFMYU6YtQWTFa9zz",
    "GAhsMf5ghBb1BHAimPuIw2oRv7sPGVmmvL1zg4rT"
>>>>>>> 927f219f2bc5e84c074355ef98f753c5887f4152
  );
  Parse.serverURL = "https://parseapi.back4app.com/";
}
async function signup({ username, password, email }) {
  try {
    console.log("signup called");
    const ContactMember = Parse.Object.extend("User");
    const contactMember = new ContactMember();

    contactMember.set("username", username);
    contactMember.set("password", password);
    contactMember.set("email", email);

    contactMember.save().then(
      (contactMember) => {
        alert("User was submitted: " + username);
      },
      (error) => {
        alert("Failed to create object, error code: " + error.message);
      }
    );
  } catch (error) {
    console.log(error);
  }
}

const getCurrentExcursion = async () => {
  let excursionID = "";
  try {
    const User = Parse.User.current();
    const queryUser = new Parse.Query("User");
    const user = await queryUser.get(User.id);
    const contactMember = await queryUser.get(user.id);
    excursionID = contactMember.get("excursionID");
  } catch (error) {
    console.log(error);
  }

  return excursionID;
};

//To keep in respective files for getting excursionID:
// import API from './components/API/API'
// import React, {useState, useEffect, createContext} from 'react'
// const [excursionID, setExcursionID] = useState();

//   async function getID() {
//       let currentEx = await API.getCurrentExcursion()
//       setExcursionID(currentEx);
//   }

//   useEffect(()=> {
//       getID()
//       console.log("excursionID", excursionID);
//   }, [excursionID]);

//   const currentExcursionID = createContext(excursionID);

export default {
  signup: signup,
  initialize: initialize,
  getCurrentExcursion: getCurrentExcursion,
};
