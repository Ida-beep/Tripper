import { Parse } from "parse";

//Initializes connection with backedn Back4App
function initialize() {
  Parse.initialize(
    "VHKvgZrf97Mkc0QqTfv4aWWhYFmQZiuqYjxIvJso",
    "n8myY0zcPwBbNv1lcuKm4e74aCKxPHXWcX59suCH"
  );
  Parse.serverURL = "https://parseapi.back4app.com/";
}

const API = {
  initialize
};

export default API;
