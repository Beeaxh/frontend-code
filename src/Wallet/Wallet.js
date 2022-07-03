import React from 'react'
import { useEffect } from 'react';

function Wallet() {
    const data = sessionStorage.getItem("data")?JSON.parse(sessionStorage.getItem("data")):null;
    let username,verified,email,ContactIssue,cryptoAddress,ide,fullname
    const runCheck =()=>{
      if(!verified){
        window.location = `/otp-verify/${ide}/${email}`
      }
    }
    useEffect(()=>{
        if(data==null){
            window.location = "/auth/signin";
        }else{
          username = data.username
          verified = data.verified
          email = data.email
          ContactIssue = data.ContactIssue
          cryptoAddress = data.cryptoAddress
          ide = data.ide
          fullname = data.fullname
           runCheck()
        }
    },[]);
    
  return (
    <div>
        <div class="flexTop">
      <div class="topTextDiv"><h2>Dashboard</h2></div>
      <div class="topIconDiv">
        <i class="fa-solid fa-bell mt-3"></i>
        <i class="fa-solid fa-magnifying-glass mt-3"></i>
      </div>
    </div>
    <div class="container-fluid gridBodycontainer-fluid">
      <div class="gridBody">
        <div class="side ">
          <div class="sideTop mt-4">
            <i class="fa-solid fa-user fa-3x"></i>
            <h2>{data&&data.fullname}</h2>
            <p>{data&&data.email}</p>
            <p>{data&&data.cryptoAddress.length>6?data.cryptoAddress.substring(0,3)+"..."+data.cryptoAddress.substring(data.cryptoAddress.length-4,data.cryptoAddress):data.cryptoAddress}</p>
          </div>
          <div class="sideBottom">
            <ul class="sideBottomList">
              <li>
                <i class="fa-solid fa-gauge-high"></i> My Dashboard
              </li>
              <li class="mt-3"><i class="fa-solid fa-wallet me-3"></i>My wallet</li>
              <li  class="mt-3"><i class="fa-solid fa-circle-dollar-to-slot me-3"></i>Transaction</li>
            </ul>
          </div>
        </div>
        <div class="mainWallet mt-4 ms-3">
            <div class="mainTop">
                <p>Hello {data&&data.username}</p>
                <i class="fa-solid fa-hand-holding-dollar fa-2x"></i><span class="mainWalletText me-3" >Receive</span>
                {/* {<i class="fa-solid fa-paper-plane fa-2x"></i><span  class="mainWalletText me-3" >Send </span>
                <i class="fa-solid fa-retweet fa-2x"></i><span  class="mainWalletText me-3" >Swap</span>} */}
                {/* {<p>Your Total savings</p>
                <h5>$6,000.00</h5>} */}
            </div>
            <h3 class="tokensHead">Tokens</h3>
         <h1>ETH</h1><br/>
         <h1>USDC</h1><br/>
         <h1>DAI</h1><br/>
         <h1>BNB</h1><br/>
         <h1>BUSD</h1><br/>
        </div>
      </div>
   </div>
   </div>
  )
}

export default Wallet