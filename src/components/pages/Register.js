import { lightGreen } from "@mui/material/colors";
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./Register.css";

const Register = () => {
  var [user, setuser] = useState({});
  let navigate = useNavigate();

  function getData(e) {
    var name = e.target.name;
    var value = e.target.value;
    setuser((oldData) => {
      return {
        ...oldData,
        [name]: value,
      };
    });
  }
  function postData(e) {
    console.log(
      `First Name = ${user.fname}\n Last Name= ${user.lname}\nemail = ${user.email}\nMobile number = ${user.mobile}\nCity = ${user.city}`
    );
  }

  const register = async () => {
    try {
      let response = await axios.post(
        "https://loanprojectapi.herokuapp.com/api/register",
        user
      );
      if(response.data.success){
        navigate(`/otpVerification?mobile=`+user.mobile)
      } else{
        console.log("unable to register")
      }
      console.log(response, "user register response");
    } catch (err) {
      console.log("register error", err);
    }
  };

  return (
    <div className="Test">
      <form>
        <div className="main">
          <div className="reg">
            <h2>Register</h2>
            <div className="typ">
              <input
                type="text"
                name="firstName"
                placeholder=" Enter your First Name"
                onChange={getData}
              />
              <br></br>
              <input
                type="text"
                name="lastName"
                placeholder=" Enter your Last Name"
                onChange={getData}
              />
              <br></br>
            </div>
            <div className="nam"></div>
            <div className="man">
              <input
                type="text"
                name="email"
                placeholder=" Enter your email "
                onChange={getData}
              />
              <br></br>
              <input
                type="text"
                name="mobile"
                placeholder="Enter your mobile number"
                onChange={getData}
              />
              <br></br>
              <input
                type="text"
                name="city"
                placeholder="Confirm  your city"
                onChange={getData}
              />
            </div>

            <div className="btn">
              <div className="btn1">
                <Link to="/Login">
                  <button onClick={register}>Register</button>
                </Link>
              </div>
              <div className="btn2">
                <Link to="/Login">
                  <button>
                    Already have an account{" "}
                    <span className="print">/Sign In</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
