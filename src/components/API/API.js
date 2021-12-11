import { Parse } from 'parse';

/**
 *  @public initializes connection with backedn Back4App 
 */
function initialize(){
    Parse.initialize('cSqpSt87DAh7P1u7i99iciru7vSAbREic5H7Duxs', 'xnonzNu6x9RKtJ2OVytZmi2MlS9oPfrjlEVfmO1j');
    Parse.serverURL = 'https://parseapi.back4app.com/';
}
async function signup({username,password}){
    const user = new Parse.User();
    user.set("username", username);
    user.set("password", password);

    const ContactMember = Parse.Object.extend("contactMember");
    const contactMember = new ContactMember();
    contactMember.set("UserID",Parse.User.current().id);

    try {
        await user.signUp();
        await contactMember.save();
    } catch (error) {
    alert("Error: " + error.code + " " + error.message);
    }
}

export default {signup:signup, initialize:initialize};
