import React,{useState} from 'react';
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";

export default function CreatePassword() {
  const [searchParams, setSearchParams] = useSearchParams();
  let navigate = useNavigate();
  let [pass, setPass] = useState("")
    function getData(event){
        setPass(event.target.value);
    }


  const submit = async () => {
    try {
      let response = await axios.post(
        "https://loanprojectapi.herokuapp.com/api/create/password",{mobile:searchParams.get("mobile"),otp:searchParams.get("otp"), password:pass}
      );
      if(response.data.success){
        navigate(`/login`)
      } else{
        console.log("mismatch password")
      }
      console.log(response, "user submit response");
    } catch (err) {
      console.log("verify error", err);
    }
  };
  return (
    <>
    <div className='main'>
     <div className='center'>
      <h2>Create Password</h2>
      <input className='form-control' type="password" name="password" placeholder='Enter new password'/>
      <input className='form-control' type="password" name="Cpassword" placeholder='Confirm password' onChange={getData}/>
      <div className='d-flex justify-content-center'>
      <button className='btn mt-3 btn-primary' onClick={submit}>Submit</button>
      </div>
      </div>
    </div>
    </>
  )
}
