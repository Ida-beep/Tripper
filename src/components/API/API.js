import { Parse } from 'parse';
import { createContext } from 'react';

/**
 *  @public initializes connection with backedn Back4App 
 */
function initialize(){
    Parse.initialize('EVjh0m8JGZyGxYoKbj11GNJlN6mJ1gOhJDbbpBQV', 'o2WBDuLkFJlnhJmgIRTVqG29hYuzttGxVibVzgs6');
    Parse.serverURL = 'https://parseapi.back4app.com/';
}
async function signup({username,password}){
    const user = new Parse.User();
    user.set("username", username);
    user.set("password", password);

    const ContactMember = Parse.Object.extend("User");
    const contactMember = new ContactMember();
    contactMember.set("objectId",Parse.User.current().id);

    try {
        await user.signUp();
        await contactMember.save();
    } catch (error) {
        alert("Error: " + error.code + " " + error.message);
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
    } catch(error) {
        console.log(error);
    }
    
    return excursionID
}

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

export default {signup:signup, initialize:initialize,
    getCurrentExcursion:getCurrentExcursion};
