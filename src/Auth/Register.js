import React, { useState } from 'react'
import {BaseFile} from "../BaseFile"
function Register() {

    const[email,setEmail]=useState("");
    const[phone,setPhone]=useState("");
    const[fullname,setFullname]=useState("");
    const[username,setUsername]=useState("");
    const[password,setPassword]=useState("");
    const[c_password,setC_password]=useState("")
    const HandleSubmit=(e)=>{
        e.preventDefault();
        const data = {
            username,
            fullname,
            email,
            phone_number:phone,
            password,
            c_password
        }
        BaseFile.post("/user/register",data).then(response=>{
            alert(response.data.message);
            window.location = `/otp-verify/${response.data.dev_id}/${email}`;
        }).catch(err=>{
            alert(err)
        })
    }
    const ClearEmail=()=>{
        setEmail("")
    }
  return (
    <div className='main'>
      <br/>
      <br/>
       <h1 class="signUpH1">Beeaxh</h1>
      <h5 class="signUpText">create your account</h5>
      <p class="signUpText">Email</p>
      <input
        type="email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        placeholder="Enter your email address"
        class="signUpEmail"
      /><br />
      <input
        type="number"
        value={phone}
        onChange={(e)=>setPhone(e.target.value)}
        placeholder="Enter your email address"
        class="signUpEmail"
      /><br />
       <h5 class="signUpText">Personal information</h5>
      <p class="signUpText">
        Please ensure the details are correct as they will be used for
        verification
      </p>
      <div class="flex">
        <div class="flexItem">{email}</div>
        <div class="flexItem">
          <a onClick={ClearEmail} class="signUpLogin">Change Email</a>
        </div>
      </div>
      <p class="signUpText">Full Name</p>
      <input
        type="text"
        value={fullname}
        onClick={(e)=>setFullname(e.target.value)}
        placeholder="Enter your Full name"
        class="signUpFirstName"
      /><br />
      <p class="signUpText">User Name</p>
      <input
        type="text"
        value={username}
        onClick={(e)=>setUsername(e.target.value)}
        placeholder="Enter your User Name"
        class="signUpFirstName"
      /><br />
      <input
        type="password"
        value={password}
        onClick={(e)=>setPassword(e.target.value)}
        placeholder="Enter your Password"
        class="signUpFirstName"
      /><br />
      <input
        type="password"
        value={c_password}
        onClick={(e)=>setC_password(e.target.value)}
        placeholder="Confirm Password"
        class="signUpFirstName"
      /><br />
      <button onClick={(e)=>HandleSubmit(e)} class="continueBtn">
        <a  class="continueBtnLink">Sign Up</a>
      </button>





      <p class="signUptext">
        Have an account? <a href="/auth/signin" class="signUpLogin">Log in</a>
      </p> 
    </div>
  )
}

export default Register