import { Parse } from 'parse';

function initialize(){
    Parse.initialize(process.env.REACT_APP_APP_KEY, process.env.REACT_APP_JS_KEY);
    Parse.serverURL = process.env.SERVER_URL;
}

function editContactMember({firstName, lastName, street, zip, city, mobile, phone, workNumber, duties}) {
    //How to maintain unedited data?
    /** Not too sure what is happening here*/
    const ContactPerson = Parse.Object.extend("contactMember");

    const contactPerson = new ContactPerson();
    contactPerson.set("firstName",firstName);
    contactPerson.set("lastName",lastName);
    contactPerson.set("street",street);
    contactPerson.set("zip", zip);
    contactPerson.set("city", city);
    contactPerson.set("mobile", mobile);
    contactPerson.set("phone", phone);
    contactPerson.set("workNumber", workNumber);
    contactPerson.set("duties",duties);

    contactPerson.save().then((contactPerson)=>{
        alert("Contact information was saved."); 
    }, (error)=> {
        alert("Failed to update object, error code: " + error.message);
    })
    console.log("Updated contact information")
}

function addFamilyMember({firstName, lastName, age, duties}){
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
}

//Create a function for editing Contact and Excursion Information

export default {initialize:initialize,addFamilyMember:addFamilyMember, editContactMember:editContactMember};