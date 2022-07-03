import React, { useEffect, useState } from 'react'
import {BaseFile }from "../BaseFile";
function Login() {
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("")
    const[pass,setPass]=useState("")
//     ###
// GET http://localhost:5099/user/generated-pass

// ###
// POST  http://localhost:5099/user/log-user/2466
// Content-Type: application/json

// {
//     "username":"Chimdindu",
//     "password":"common@2"
// }
// ###
const FindPass=()=>{
    BaseFile.get("/user/generated-pass").then(response=>{
        setPass(response.data.pass.pass)
    })
}
useEffect(()=>{
FindPass()
},[])
    const Login=()=>{
        const data = {email,password};
        if(pass!==""){
          BaseFile.post(`/user/log-user/${pass}`,data).then(response=>{
            alert(response.data.message);
            sessionStorage.setItem("data",JSON.stringify(response.data.data))
            window.location = "/wallet";
        }).catch((err)=>{
            alert(err);
        })
        }
        
    }
    useEffect(()=>{
        if(sessionStorage.getItem("data")){
            window.location = "/wallet";
        }
    },[])
  return (
    <div className='main'>
      <h1 class="signUpH1">Beeaxh</h1>
      <h5 class="signUpText">Sign In</h5>
      <p class="signUpText">Email</p>
      <input
        type="email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        placeholder="Enter your email address"
        class="signUpEmail"
      /><br />
            <p class="signUpText">Password</p>
      <input
        type="password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        placeholder="Enter your password"
        class="signUpEmail"
      /><br />      
      <button onClick={()=>Login()} class="continueBtn">
        <a  class="continueBtnLink">Continue</a>
      </button>
      <p class="signUptext">
       Don't have an account? <a href="/auth/signup" class="signUpLogin">Log in</a>
      </p>   
    </div>
  )
}

export default Login