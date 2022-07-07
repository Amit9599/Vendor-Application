import React,{useState} from 'react';
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";

export default function MotpVerify() {
const [searchParams, setSearchParams] = useSearchParams();

let navigate = useNavigate();
let [otp, setOtp] = useState("")

    function getData(event){
        setOtp(event.target.value);
    }


const verify = async () => {
    try {
      let response = await axios.post(
        "https://loanprojectapi.herokuapp.com/api/verify/otp",{mobile:searchParams.get("mobile"), otp:otp, type:"forgotPass"}
      );
      if(response.data.success){
        navigate(`/McreatePass?mobile=${searchParams.get("mobile")}&type="forgotPass"`)
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
      <h2>OTP</h2>
      <input className='form-control' type="text" name="otp" placeholder='Enter OTP' onChange={getData}/>
     <div className='d-flex justify-content-center'>
     <button onClick={verify} className='btn mt-3 btn-primary'>Verify</button>
     </div>
      </div>
    </div>
    </>
  )
}
