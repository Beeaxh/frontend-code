import React,{useState} from 'react'
import { useParams } from 'react-router-dom';
import { BaseFile } from '../BaseFile';
// ###
// POST http://localhost:5099/user/verify-otp
// Content-Type: application/json

// {
//     "otp":"236171",
//     "ide":"60871e1f-2e2e-4cdc-a4da-3a59107b9d3e"
// }

// ###
// POST http://localhost:5099/user/resendOtp
// Content-Type: application/json

// {
//     "id":"89d75649-c0cc-476b-9571-698d30c0e3df",
//     "email":"chimdi4332@gmail.com"
// }
function Otp() {
    const {ide,email} = useParams();
    const[otp,setOtp]=useState("");

    const Verify=()=>{
        const data = {otp,ide}
       if(otp == ""){
        alert("Please input a one time password")
       }else{
        BaseFile.post("/user/verify-otp",data).then(response=>{
            alert(response.data.message);
            window.location = "/auth/signin"
        }).catch((err)=>{
            alert(err)
        })
       }
    }
    const ResendOtp=()=>{
        const data = {id:ide,email}
        BaseFile.post("/user/resendOtp",data).then(response=>{
            alert(response.data.message)
        } ).catch(err=>{
            alert(err)
        })
    }
  return (
    <div>
        <p class="signUpText">Enter otp sent to your email</p>
      <input
        type="number"
        value={otp}
        onClick={(e)=>setOtp(e.target.value)}
        placeholder="Enterotp"
        class="signUpFirstName"
      /><br /> 
       <div class="flex">
        <div class="flexItem">
          <a onClick={()=>ResendOtp()}  class="signUpLogin">Resend otp</a>
        </div>
      </div>
      <button onClick={()=>Verify()} class="continueBtn">
        <a  class="continueBtnLink">Verify</a>
      </button>
    </div>
  )
}

export default Otp