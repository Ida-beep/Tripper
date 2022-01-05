import React, { useState, useEffect } from "react";
import LongInput from "../Cards/LongInput";
import Footer from "../Navigation/Footer";
import DescriptionInput from "../Cards/DescriptionInput";
import ExtraLongInput from "../Cards/ExtraLongInput";
import ExcursionAPI from "../API/ExcursionAPI";
import ContactMemberAPI from "../API/ContactMemberAPI";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

/**
 * @public This component is responsible for creating an
 * excursion, along with it's initial organiser.
 *
 */

function CreateExcursion() {
  const [excursionName, setExcursionName] = useState();
  const [fromDate, setFromDate] = useState();
  const [toDate, setToDate] = useState();
  const [location, setLocation] = useState();
  const [description, setDescription] = useState();

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [isOrganiser, setIsOrganiser] = useState(true);
  const [excursionID, setExcursionID] = useState();

  const navigate = useNavigate();

  function excursionNameChange(e) {
    setExcursionName(e.target.value);
  }

  function fromDateChange(e) {
    setFromDate(e.target.value);
  }

  function toDateChange(e) {
    setToDate(e.target.value);
  }

  function locationChange(e) {
    setLocation(e.target.value);
  }

  function descriptionChange(e) {
    setDescription(e.target.value);
  }

  function usernameChange(e) {
    setUsername(e.target.value);
  }

  function passwordChange(e) {
    setPassword(e.target.value);
  }

  function emailChange(e) {
    setEmail(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("create excursion handle submit called");
    /* let excursionID = ""; */

    ExcursionAPI.createExcursion({
      excursionName,
      fromDate,
      toDate,
      location,
      description,
    }).then(
      (excursion) => {
        setExcursionID(excursion.id);
      },
      (error) => {
        console.log("failed to create excursion OR set excursionID of user");
      }
    );
  }

  /**This useEffect ensures that an organiser is never signed up
   * before an excursion is created. This ensures that the contact
   * member is always associated with an excursion.
   */
  useEffect(() => {
    if (excursionID) {
      ContactMemberAPI.signUp({
        username,
        password,
        email,
        isOrganiser,
        excursionID,
      }).then(
        (loggedInUser) => {
          navigate(`/`);
          console.log("succes in signup");
        },
        (error) => {
          console.log("Didn't login with error code: ", error.code);
        }
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [excursionID]);

  function disable() {
    if (
      !excursionName ||
      !fromDate ||
      !toDate ||
      !location ||
      !description ||
      !username ||
      !password ||
      !email
    ) {
      return true;
    }
    return false;
  }

  return (
    <>
      <div className="page-container">
        <div className="create-excursion">
          <div className="">
            <form onSubmit={handleSubmit}>
              <h4 style={{ color: "#1ea774" }}>Create Excursion </h4>
              <p style={{ color: "#1ea774" }}>Contact Information</p>

              <div className="input-section">
                <LongInput
                  title="Username"
                  value={username}
                  type="text"
                  changeValue={usernameChange}
                />
                <LongInput
                  title="Password"
                  value={password}
                  type="password"
                  changeValue={passwordChange}
                />
                <LongInput
                  title="Email"
                  value={email}
                  type="text"
                  changeValue={emailChange}
                />
              </div>
              <p style={{ color: "#1ea774", marginTop: "50px" }}>
                Excursion Information
              </p>
              <div className="input-section">
                <ExtraLongInput
                  title="Excursion Name"
                  value={excursionName}
                  type="text"
                  changeValue={excursionNameChange}
                />
                <LongInput
                  title="Location"
                  value={location}
                  type="text"
                  changeValue={locationChange}
                />
              </div>
              <div className="input-section">
                <LongInput
                  title="From"
                  value={fromDate}
                  type="date"
                  changeValue={fromDateChange}
                />
                <LongInput
                  title="To"
                  value={toDate}
                  type="date"
                  changeValue={toDateChange}
                />
              </div>
              <div className="input-section">
                <DescriptionInput
                  title="Description"
                  value={description}
                  type="text"
                  changeValue={descriptionChange}
                />
              </div>

              <button
                className="button-secondary-extra-small"
                type="submit"
                variant="primary"
                disabled={disable()}
                style={{ marginLeft: "0px", marginTop: "15px" }}
              >
                Create Excursion &amp; User
              </button>
              <p style={{ textAlign: "left", marginTop: "30px" }}>
                <Link to="/OrganiserLogin">
                  {" "}
                  Want to login or plan existing excursion?{" "}
                  <p style={{ color: "#1ea774", marginBottom: "30px" }}>
                    Login Here!
                  </p>{" "}
                </Link>
              </p>
              <p style={{ textAlign: "left" }}>
                <Link to="/Home">
                  {" "}
                  <p style={{ color: "#1ea774" }}>Go To Home Page</p>{" "}
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CreateExcursion;
