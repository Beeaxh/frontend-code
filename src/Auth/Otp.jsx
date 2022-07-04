import React,{useState} from 'react'
import { useParams } from 'react-router-dom';
import { BaseFile } from '../BaseFile';

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
            localStorage.setItem("done",true)
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
       <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 " style={{textAlign:"center"}}>
        <div class="max-w-md w-full space-y-8">
          <div>
            <img class="mx-auto h-12 w-auto" src="https://res.cloudinary.com/axgura/image/upload/v1656950725/IMG-20220704-WA0004_ndqc8h.jpg" alt="Workflow" />
            <h2 class="mt-6 text-center text-3xl font-extrabold text-[#275ca4]">Enter otp sent to your email</h2>
          </div>
          <div class="mt-8 space-y-6" >
            <div class="rounded-md shadow-sm -space-y-px">
              <div>
                <label for="password" class="sr-only">Password</label>
                <input id="password" value={otp} onChange={(e)=>setOtp(e.target.value)} name="password" type="text"  required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Enter OTP" />
              </div>
            </div>
            <div class="flex items-center justify-between">
             
             <div class="text-sm">
               <a onClick={()=>ResendOtp()} class="font-medium text-[#275ca4]  text-indigo-600 hover:text-[#275ca4]">Resend</a>
             </div>
           </div>
            <div>
              <button onClick={()=>Verify()}  type="click" style={{textAlign:"center"}} class="my-2 w-full flex justify-center py-2 px-4 border border-transparent text-md font-medium rounded-md text-white bg-[#275ca4] hover:bg-indigo-700 ">
               <p style={{textAlign:"center"}}>Verify</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Otp