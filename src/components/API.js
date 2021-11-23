import { Parse } from 'parse';

/**
 *  @public initializes connection with backedn Back4App 
 */
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
    try{
        const FamilyMember = Parse.Object.extend("FamilyMember");
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

    } catch(error){
        console.log(error);
    }
}

function addContçactPerson({firstName,lastName,age,duties,email,address,workphone,phone,mobile}){
    try{
        const ContactPerson = Parse.Object.extend("ContactPerson");
        const contactPerson = new ContactPerson();
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
/**
 * @public getFamilyMembers should retrive a certain family member based on contactPersonID
 * TODO:
 * - what should generate contactPersonID in the first place?
 * - how do I know what contactPersonID to retrieve?
 * - refactor this code to dynamic lists of element in UI (usability lecture)
 */
function getFamilyMembers(contactPersonID){
    const FamilyMember = Parse.Object.extend("FamilyMember");
    const query = new Parse.Query(FamilyMember);
    query.equalTo("contactPersonID",contactPersonID);
    const results = await query.find();
    if(results.length > 0){
        alert("family members " + results + " was retrieved");
    }
    
    query.get(contactPersonID)
    .then((familyMember)=>{
        alert("family member " + familyMember + " was retrieved");
        const firstName = familyMember.get("firstName");
        const lastName = familyMember.get("lastName");
        const age = familyMember.get("age");
        const duties = familyMember.get("duties");
        const {firstName, lastName, age, duties} = result.attributes;
    }, (error) => {
        alert(error.code);
    });
    
    console.log(result.attributes);
    return result.attributes;
}

//Create a function for editing Contact and Excursion Information

export default {initialize:initialize,addFamilyMember:addFamilyMember, editContactMember:editContactMember};