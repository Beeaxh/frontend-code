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
    BaseFile.get("/user/generate-pass").then(response=>{
       setPass(response.data.pass)
       console.log(response.data.pass)
    })
}
useEffect(()=>{
FindPass()
},[])
    const Login=()=>{
        const data = {username:email,password};
        if(pass!==""){
          BaseFile.post(`/user/log-user/${pass}`,data).then(response=>{
            alert(response.data.message);
            console.log(response.data)
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
   
    <div>
       <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 " style={{textAlign:"center"}}>
        <div class="max-w-md w-full space-y-8">
          <div>
            <img class="mx-auto h-12 w-auto" src="https://res.cloudinary.com/axgura/image/upload/v1656950725/IMG-20220704-WA0004_ndqc8h.jpg" alt="Workflow" />
            <h2 class="mt-6 text-center text-3xl font-extrabold text-[#275ca4]">Sign in to your Beeaxh account</h2>
            <p class="mt-2 text-center text-sm text-gray-600">
             </p>
          </div>
          <div class="mt-8 space-y-6" >
            <div class="rounded-md shadow-sm -space-y-px">
              <div>
                <label for="email-address" class="sr-only">Username</label>
                <input id="email-address" value={email} onChange={(e)=>setEmail(e.target.value)} name="email" type="text"  required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Username" />
              </div>
              <div>
                <label for="password" class="sr-only">Password</label>
                <input id="password" value={password} onChange={(e)=>setPassword(e.target.value)} name="password" type="password"  required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
              </div>
            </div>
      
            <div class="flex items-center justify-between">
             
              <div class="text-sm">
                <a href="/auth/signup" class="font-medium text-[#275ca4]  text-indigo-600 hover:text-[#275ca4]"> Sign Up instead ? </a>
              </div>
            </div>
      
            <div>
              <button onClick={()=>Login()} type="click" style={{textAlign:"center"}} class="my-2 w-full flex justify-center py-2 px-4 border border-transparent text-md font-medium rounded-md text-white bg-[#275ca4] hover:bg-indigo-700 ">
               <p style={{textAlign:"center"}}>Sign in</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login