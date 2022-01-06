import { Parse } from "parse";

/**
 * ContactMemberAPI handles all API calls related to the 
 * ContactMember table in the DB, such as fetching, 
 * deleting, update and add.
 * */

/**
 * Signs up user, assigns it to relevant
 * excursion and sets user type 
 * (organiser/non-organiser)
 */
const signUp = async ({
  username,password,email,
  isOrganiser,excursionID,
}) => {
  const user = new Parse.User();
  user.set("username", username);
  user.set("email", email);
  user.set("excursionID", excursionID);
  user.set("isOrganiser", isOrganiser);
  user.set("password", password);

  try {
    let userResult = await user.signUp();
    alert("User signed up", userResult);
  } catch (error) {
    alert("Error while signing up user" + error);
  }
};

//Fetches current user and its info from DB
const fetchContactMemberFromDB = async () => {
  const User = Parse.User.current();
  const id = User.id;
  const queryUser = new Parse.Query("User");
  const user = await queryUser.get(id);
  const contactMember = await queryUser.get(user.id);
  const firstName = contactMember.get("firstName");
  const lastName = contactMember.get("lastName");
  const age = contactMember.get("age");
  const email = contactMember.get("email");
  const street = contactMember.get("street");
  const zip = contactMember.get("zip");
  const city = contactMember.get("city");
  const mobilePhone = contactMember.get("mobilePhone");
  const phone = contactMember.get("phone");
  const workPhone = contactMember.get("workPhone");
  const duties = contactMember.get("duties");

  const contactMemberData = {
    firstName: firstName,
    lastName: lastName,
    age: age,
    email: email,
    street: street,
    zip: zip,
    city: city,
    mobilePhone: mobilePhone,
    phone: phone,
    workPhone: workPhone,
    duties,
  };

  return contactMemberData;
};

//Updates changed data about contact member to DB
const updateContactMemberFromDB = async ({
  firstName,lastName,age,duties,email,
  street,workPhone,phone,mobile,zip,city,
}) => {
  const User = new Parse.User();
  const query = new Parse.Query(User);

  try {
    const User = Parse.User.current();
    const id = User.id;
    let user = await query.get(id);

    user.set("email", email);
    user.set("street", street);
    user.set("zip", parseInt(zip));
    user.set("age", parseInt(age));
    user.set("workPhone", parseInt(workPhone));
    user.set("mobilePhone", parseInt(mobile));
    user.set("phone", parseInt(phone));
    user.set("duties", duties);
    user.set("firstName", firstName);
    user.set("lastName", lastName);
    user.set("city", city);
    try {
      let response = await user.save().then(
        () => {
          alert("Info successfully updated");
        },
        (error) => {
          alert("failed to update with error-code : " + error.code);
        }
      );
      console.log("Updated user", response);
    } catch (error) {
      console.error("Error while updating user", error);
    }
  } catch (error) {
    console.error("Error while retrieving user", error);
  }
};

const ContactMemberAPI = {
  signUp,
  fetchContactMemberFromDB,
  updateContactMemberFromDB,
};

export default ContactMemberAPI;
