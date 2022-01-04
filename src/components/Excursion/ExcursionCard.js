import React, { useState, useEffect } from "react";
import LongCard from "../Cards/LongCard.js";
import ExcursionAPI from "../API/ExcursionAPI.js";
import { Parse } from "parse";

function ExcursionCard(props) {
  const [selected, setSelected] = useState([]);
  const [excursionInfo, setExcursionInfo] = useState([]);
  const [totalParticipants, setTotalParticipants] = useState(0);
  const [avgAge, setAvgAge] = useState(0);
  const [amountUnderEighteen, setAmountUnderEighteen] = useState(0);

  function totalParticipantsCloud() {
    let prevTotal = totalParticipants;

    console.log("prevtotal is: ", prevTotal);
    const user = Parse.User.current().excursionID;
    const params = { user: user };
    let num = 0;
    Parse.Cloud.run("totalParticipants", params).then(
      (result) => {
        console.log("current total is: ", result);
        num = result;
        if (prevTotal > num || prevTotal < num) {
          setTotalParticipants(num);
          console.log("changed total");
        }
      },
      (error) => {
        console.log(error.code);
      }
    );
  }
  totalParticipantsCloud();

  function averageAge() {
    let prevTotal = avgAge;
    const user = Parse.User.current().excursionID;
    const params = { user: user };
    let num = 0;
    Parse.Cloud.run("avgAge", params).then(
      (result) => {
        num = result;
        if (prevTotal > num || prevTotal < num) {
          setAvgAge(num);
          console.log("changed avg age: ");
        }
      },
      (error) => {
        console.log(error.code);
      }
    );
  }
  averageAge();

  /*   function amountUnderEighteenCloud() {
    let prevTotal = amountUnderEighteen;
    const user = Parse.User.current().excursionID;
    const params = { user: user };
    let num = 0;
    Parse.Cloud.run("underEighteen", params).then(
      (result) => {
        num = result;
        if (prevTotal > num || prevTotal < num) {
          setAmountUnderEighteen(num);
          console.log("changed amount under eighteen: ", amountUnderEighteen);
        }
      },
      (error) => {
        console.log(error.code);
      }
    );
  }
  amountUnderEighteenCloud(); */

  useEffect(() => {
    async function fetchData() {
      setExcursionInfo(await ExcursionAPI.fetchExcursionFromDB());
    }
    fetchData();
    console.log("excursionCard useEffect called");
  }, []);

  useEffect(() => {
    console.log("Value of show shopping is:", props.showShopping);
  }, [props.showShopping]);

  function closeShopping() {
    props.setShowShopping(false);
  }

  function openShopping() {
    props.setShowShopping(true);
  }

  let subtitle =
    excursionInfo.fromDate +
    " - " +
    excursionInfo.toDate +
    ", " +
    excursionInfo.location;

  return (
    <LongCard active={props.active}>
      <div className="excursion-card">
        <div className="excursion-card-main-content">
          <h4 style={{ fontSize: "20px" }}>{excursionInfo.excursionTitle}</h4>
          <p style={{ fontSize: "16px" }} className="subtitle">
            {subtitle}
          </p>
          <p>{excursionInfo.description}</p>
          <br></br>
          <div className="statistics">
            <div className="statistics-item">
              <p>Participants:</p>
              <p style={{ fontSize: "20px", color: "#0c6d4a" }}>
                <b>{totalParticipants}</b>
              </p>
            </div>
            <div className="statistics-item">
              <p>Average Age: </p>
              <p style={{ fontSize: "20px", color: "#0c6d4a" }}>
                <b>{avgAge}</b>
              </p>
            </div>
          </div>
          {/*          <p>Amount under 18: {amountUnderEighteen}</p> */}
        </div>
      </div>
      <div className="edit-button-container">
        <button
          className="button-secondary-extra-small"
          onClick={closeShopping}
        >
          Duties
        </button>
        <button className="button-secondary-extra-small" onClick={openShopping}>
          Shopping
        </button>
        <button disabled={true} className="button-secondary-extra-small">
          Send Out Invite!
        </button>
        <button className="button-primary-extra-small" onClick={props.active}>
          Edit
        </button>
      </div>
    </LongCard>
  );
}

export default ExcursionCard;
