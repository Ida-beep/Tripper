import { Parse } from 'parse';

/**
 *  @public initializes connection with backedn Back4App 
 */
function initialize(){
    Parse.initialize(process.env.REACT_APP_APP_KEY, process.env.REACT_APP_JS_KEY);
    Parse.serverURL = process.env.SERVER_URL;
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

export default {initialize:initialize,addFamilyMember:addFamilyMember};