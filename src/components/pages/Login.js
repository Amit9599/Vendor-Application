import React, {useState} from 'react';
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';


const Login = () => {
  let navigate = useNavigate();
  var [user, setuser] = useState({});


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
      `Email = ${user.mobile}\n Password = ${user.pass}`
    );
  }
  const login = async () => {
    try {
      let response = await axios.post(
        "https://loanprojectapi.herokuapp.com/api/login",user
      );
      if(response.data.success){
        
        navigate(`/`)
      } else{
        console.log("unable to register")
      }
      console.log(response, "user register response");
    } catch (err) {
      console.log("register error", err);
    }
  };
  return (
    <>
    <div>
        <div className='frm' style={{width:"30%",textAlign:"center",justifyContent:"center",margin:"4% auto",border:"2px solid white", boxShadow:"0px 0px 20px gray", padding:"3% 3%"}}>
        <h2 class="fw-bold mb-5 fs-2">Sign in</h2> 
  <div class="form-outline mb-4">
    <input type="text" placeholder='User Id' name='mobile' className="form-control" onChange={getData} />
  </div>
  
  <div class="form-outline mb-4">
    <input type="password" placeholder='Password' name='pass' class="form-control" onChange={getData} />
  </div>

  <div class="row mb-4">
    <div class="col d-flex justify-content-center">
     
      <div class="form-check">
        <input class="form-check-input" type="checkbox" checked />
        <label class="form-check-label" > Remember me </label>
      </div>
    </div>

    <div class="col">
      <Link to='/MobileVerify'>Forgot password?</Link>
    </div>
  </div>

  
  <button type="button" class="btn btn-primary mb-3" onClick={login}>Sign in</button>

  <div class="text-center">
    <p>Not a member? <a href="/register">Register</a></p>
    </div>
        </div>
    </div>
    </>
  )
}

export default Login
