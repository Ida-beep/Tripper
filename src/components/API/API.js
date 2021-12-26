import { Parse } from 'parse';
import { createContext } from 'react';

/**
 *  @public initializes connection with backedn Back4App 
 */
function initialize(){
    Parse.initialize('EVjh0m8JGZyGxYoKbj11GNJlN6mJ1gOhJDbbpBQV', 'o2WBDuLkFJlnhJmgIRTVqG29hYuzttGxVibVzgs6');
    Parse.serverURL = 'https://parseapi.back4app.com/';
}
async function signup({username,password, email}){
    try {

        console.log("signup calledddddd")
        const ContactMember = Parse.Object.extend("User");
        const contactMember = new ContactMember();
        
        contactMember.set("username", username);
        contactMember.set("password", password);
        contactMember.set("email", email);
        
        contactMember.save()
        .then((contactMember)=>{
            alert("User was submitted: " + username); 
        }, (error)=> {
            alert("Failed to create object, error code: " + error.message);
        });

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
