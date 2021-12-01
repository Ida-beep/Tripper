import { Parse } from 'parse';

/**
 *  @public initializes connection with backedn Back4App 
 * 
 * TO DO
 * - Create AddExcursion function
 */

/**
 * @public getFamilyMembers should retrive a certain family member based on contactPersonID
 * TODO:
 * - what should generate contactPersonID in the first place?
 * - how do I know what contactPersonID to retrieve?
 * - refactor this code to dynamic lists of element in UI (usability lecture)
 * - getContactMember: in theory the email should be unique, but what happens if someone changes their email?
 *      Just assume that this wont be the case?
 */

function initialize(){
    Parse.initialize('cSqpSt87DAh7P1u7i99iciru7vSAbREic5H7Duxs', 'xnonzNu6x9RKtJ2OVytZmi2MlS9oPfrjlEVfmO1j');
    Parse.serverURL = 'https://parseapi.back4app.com/';
}

function editContactMember({firstName, lastName, street, zip, city, mobile, phone, workNumber, duties}) {
    try {
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
            alert("Contact information was saved: " + contactPerson.firstName); 
        }, (error)=> {
            alert("Failed to update object, error code: " + error.message);
        })
        console.log("Updated contact information");
    } catch(error) {
        console.log(error);
    }
}

function editExcursion({excursionTitle, fromDate, toDate, location, description}) {
    try {
        const Excursion = Parse.Object.extend("excursion");

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

function addFamilyMember({firstName, lastName, age, duties}){
    try{
        const familyMemberID = Math.floor(Math.random() * 100);
        const FamilyMember = Parse.Object.extend("FamilyMember");
        const familyMember = new FamilyMember();
        familyMember.set("familyMemberID",familyMemberID);
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

    } catch(error){
        console.log(error);
    }
}

function addContactPerson({firstName,lastName,age,duties,email,address,workphone,phone,mobile}){
    try{
        const contactPersonID = Math.floor(Math.random() * 100);
        const ContactPerson = Parse.Object.extend("ContactPerson");
        const contactPerson = new ContactPerson();
        contactPerson.set("contactPersonID",contactPersonID)
        contactPerson.set("firstName",firstName);
        contactPerson.set("lastName",lastName);
        contactPerson.set("age",age);
        contactPerson.set("duties",duties);
        contactPerson.set("email",email);
        contactPerson.set("address",address);
        contactPerson.set("workphone",workphone);
        contactPerson.set("phone",phone);
        contactPerson.set("mobile",mobile);

        contactPerson.save()
        .then((contactPerson)=>{
            alert("A Family Member was submitted: " + contactPerson.firstName); 
        }, (error)=> {
            alert("Failed to create object, error code: " + error.message);
        });

    } catch(error){
        console.log(error);
    }
}


export default {initialize:initialize,addFamilyMember:addFamilyMember, 
    editContactMember:editContactMember, editExcursion:editExcursion, addContactPerson:addContactPerson};