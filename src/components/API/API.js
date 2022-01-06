import { Parse } from "parse";

//Initializes connection with backedn Back4App
function initialize() {
  Parse.initialize(
    "OhOELNL2DIi2twPo5zX9Wmjq41sztP4RbJ8X3vmT",
    "EUdSgTiepN38EuGrsLAd6CHVhrafUNKppbLi8TaU"
  );
  Parse.serverURL = "https://parseapi.back4app.com/";
}

const API = {
  initialize
};

export default API;
