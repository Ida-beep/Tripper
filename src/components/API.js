import { Parse } from 'parse';

function initialize(){
    Parse.initialize(process.env.REACT_APP_APP_KEY, process.env.REACT_APP_JS_KEY);
    Parse.serverURL = process.env.SERVER_URL;
}

function addFamilyMember({firstName, lastName, age, duties}){
    try{
        const FamilyMember = Parse.Object.extend("familyMember");
        const familyMember = new FamilyMember();
        familyMember.set("firstName",firstName);
        familyMember.set("lastName",lastName);
        familyMember.set("age",age);
        familyMember.set("duties",duties);

        familyMember.save()
        .then((familyMember)=>{
            alert("A Family Member was submitted: " + familyMember.firstName); 
        }, (error)=> {
            alert("Failed to create object, error code: " + error.message);
        });
        console.log("saved family member")

    } catch(error){
        console.log(error);
    }
}

export default {initialize:initialize,addFamilyMember:addFamilyMember};