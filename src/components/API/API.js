import { Parse } from "parse";

/**
 *  @public initializes connection with backedn Back4App
 */
function initialize() {
  Parse.initialize(
    "VHKvgZrf97Mkc0QqTfv4aWWhYFmQZiuqYjxIvJso",
    "n8myY0zcPwBbNv1lcuKm4e74aCKxPHXWcX59suCH"
  );
  Parse.serverURL = "https://parseapi.back4app.com/";
}
async function signup({ username, password, email }) {
  try {
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

const API = {
  signup,
  initialize
};

export default API;
