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
            console.log(err)
        })
    }
    
  return (

  <div>
    <div>
       <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 " style={{textAlign:"center"}}>
        <div class="max-w-md w-full space-y-8">
          <div>
            <img class="mx-auto h-12 w-auto" src="https://res.cloudinary.com/axgura/image/upload/v1656950725/IMG-20220704-WA0004_ndqc8h.jpg" alt="Workflow" />
            <h2 class="mt-6 text-center text-3xl font-extrabold text-[#275ca4]">Create your Beeaxh account</h2>
            <p class="mt-2 text-center text-sm text-gray-600">
             </p>
          </div>
          <div class="mt-8 space-y-6" >
          <div class="rounded-md shadow-sm -space-y-px">
              <div>
                <label for="email-address" class="sr-only">Full name</label>
                <input id="email-address" value={fullname} onChange={(e)=>setFullname(e.target.value)} name="email" type="text"  required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Full name" />
              </div>
              <div>
                <label for="password" class="sr-only">Username</label>
                <input id="password" value={username} onChange={(e)=>setUsername(e.target.value)} name="password" type="text"  required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Username" />
              </div>
            </div>
            <div class="rounded-md shadow-sm -space-y-px">
              <div>
                <label for="email-address" class="sr-only">Email</label>
                <input id="email-address" value={email} onChange={(e)=>setEmail(e.target.value)} name="email" type="text"  required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" />
              </div>
              <div>
              <label for="email-address" class="sr-only">Phone Number</label>
                <input id="email-address" value={phone} onChange={(e)=>setPhone(e.target.value)} name="email" type="text"  required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Phone Number" />
              </div>
            </div>
            <div class="rounded-md shadow-sm -space-y-px">
              <div>
                <label for="email-address" class="sr-only">Password</label>
                <input id="email-address" value={password} onChange={(e)=>setPassword(e.target.value)} name="email" type="password"  required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
              </div>
              <div>
                <label for="password" class="sr-only">Confirm Password</label>
                <input id="password" value={c_password} onChange={(e)=>setC_password(e.target.value)} name="password" type="password"  required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Confirm Password" />
              </div>
            </div>
      
            <div class="flex items-center justify-between">
             
              <div class="text-sm">
                <a href="/auth/signin" class="font-medium text-[#275ca4]  text-indigo-600 hover:text-[#275ca4]"> Sign In instead ? </a>
              </div>
            </div>
      
            <div>
              <button onClick={(e)=>HandleSubmit(e)} type="click" style={{textAlign:"center"}} class="my-2 w-full flex justify-center py-2 px-4 border border-transparent text-md font-medium rounded-md text-white bg-[#275ca4] hover:bg-indigo-700 ">
               <p style={{textAlign:"center"}}>Sign Up</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Register