import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import { useParams } from 'react-router-dom'
import Login from './Login';
import Register from './Register';
export const ContextAuth = createContext({})
function Main() {
    const {name} = useParams();
    const[change,setChange]=useState(false);
    useEffect(()=>{
     if(name=="signup"){
        setChange(false)
     }else{
        setChange(true)
     }
    },[name])
  return (
    <div>
        <ContextAuth.Provider value={{setChange}}>
        {
            change?
            <Login/>
            :
            <Register/>
        }
        </ContextAuth.Provider>
    </div>
  )
}

export default Main