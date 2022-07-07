import React,{useState} from 'react';
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";

export default function MobileVerify() {
const [searchParams, setSearchParams] = useSearchParams();

let navigate = useNavigate();
let [mobile, setMobile] = useState("")

    function getData(event){
      setMobile(event.target.value);
    }


const verify = async () => {
    try {
      let response = await axios.post(
        "https://loanprojectapi.herokuapp.com/api/forgot",{mobile:mobile}
      );
      if(response.data.success){
        navigate(`/MotpVerify?mobile=${mobile}`)
      } else{
        console.log("wrong otp")
      }
      console.log(response, "user verify response");
    } catch (err) {
      console.log("verify error", err);
    }
  };
  return (
    <>
     <div className='main'>
      <div className='center'>
       <h2 className='mb-5 mt-4'>Mobile Verify</h2>
       <input className='form-control' type="number" name="mobile" placeholder='Enter register Number' onChange={getData}/>
      <div className='d-flex justify-content-center'>
      <button onClick={verify} className='btn mt-3 btn-primary'>Verify</button>
      </div>
       </div>
    </div>
    </>
  )
}






// import { lightGreen } from "@mui/material/colors";
// import axios from "axios";
// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// const MobileVerify = () => {
//   var [user, setuser] = useState({});
//   let navigate = useNavigate();

//   function getData(e) {
//     var name = e.target.name;
//     var value = e.target.value;
//     setuser((oldData) => {
//       return {
//         ...oldData,
//         [name]: value,
//       };
//     });
//   }
//   function postData(e) {
//     console.log(
//       `Mobile = ${user.mobile}`
//     );
//   }

//   const verify = async () => {
//     try {
//       let response = await axios.post(
//         "https://loanprojectapi.herokuapp.com/api/forgot",
//         user
//       );
//       if(response.data.success){
//         navigate(`/otpVerification?mobile=`+user.mobile)
//       } else{
//         console.log("unable to register")
//       }
//       console.log(response, "user register response");
//     } catch (err) {
//       console.log("register error", err);
//     }
//   };


//   return (
//     <>
//       <div className='main'>
//      <div className='center'>
//       <h2 className='mb-5 mt-4'>Mobile Verify</h2>
//       <input className='form-control' type="number" name="mobile" placeholder='Enter register Number' onChange={getData}/>
//      <div className='d-flex justify-content-center'>
//      <button onClick={verify} className='btn mt-3 btn-primary'>Verify</button>
//      </div>
//       </div>
//     </div>
//     </>
//   )
// }
// export default MobileVerify;
