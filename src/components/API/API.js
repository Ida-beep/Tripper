import { Parse } from 'parse';

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

    const ContactMember = Parse.Object.extend("ContactMember");
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
