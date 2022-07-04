import React from 'react'
import { useEffect } from 'react';
import axios from "axios";

function Wallet() {
  const data = sessionStorage.getItem("data")?JSON.parse(sessionStorage.getItem("data")):null;
  const ide = data&&data.ide
  const email = data&&data.email
  const verified = data&&data.verified
  const cy = data&&data.cryptoAddress
  const runCheck =()=>{
    if(verified == false){
      if(localStorage.getItem("done")){
        window.location = `/otp-verify/${ide}/${email}`
      }else{
        window.location = "/auth/signin"
      }
    }
  }
 
  useEffect(()=>{
      if(data==null){
          window.location = "/auth/signin";
      }else{
        runCheck()
      }
  },[]);
  const getPriceInUsd=(name)=>{
    const URLs = "https://api.coingecko.com/api/v3/simple/price?ids="+name+"&vs_currencies=usd";
             axios.get(URLs).then(response=>{
          const  is = response.data[name].usd.toString()
           return is
})  
  }
  const getTokenAmount=(name,address)=>{
    const use = {name,address}
    axios.post("https://test-beeaxh.herokuapp.com/user/balanceOf",use).then(response=>{
      console.log(response.data.data)
      return response.data.data
    })
  }
  const eth_amount =  getTokenAmount("eth",cy);
  const usdc_amount =  getTokenAmount("usdc",cy);
  const bnb_amount =  getTokenAmount("bnb",cy);
  const busd_amount =  getTokenAmount("busd",cy);
  const dai_amount =  getTokenAmount("dai",cy);
  const eth_price =  getPriceInUsd("ethereum")
  const bnb_price =  getPriceInUsd("binancecoin")
 // const usdc_price =  getPriceInUsd("binance-usd")
  const busd_price =  getPriceInUsd("binance-usd")
  const dai_price =  getPriceInUsd("dai")
  const copy=()=>{
    if(data){
      navigator.clipboard
          .writeText(data&&data.cryptoAddress)
          .then(
              success => console.log("text copied"), 
              err => console.log("error copying text")
          );
    }
  }
  return ( 
  <div>
    <div class="min-w-screen min-h-screen bg-gray-200 flex items-center justify-center px-5 py-5" style={{textAlign:"center"}}>
    <div class="bg-white text-gray-800 rounded-xl shadow-lg overflow-hidden relative flex" style={{width:"414px"}}>
        <div class="bg-white h-full w-full px-5 pt-6 pb-20 overflow-y-auto">
            <div class="relative pt-6 px-4 sm:px-6 lg:px-8">
<nav class="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global" >
<div class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">

</div>

<div class="">
<div class="group inline-block">
<button class="outline-none focus:outline-none  px-3 py-1  flex items-center min-w-32">
<span>
Hello {data&&data.username}
</span>
</button>
</div>
</div>
</nav>
</div><br />

<center>
<div id="empty-cover-art" class="shadow-md py-5 h-28 rounded w-56 bg-blue-100 text-center opacity-50 md:border-solid md:border-2 md:border-blue-800">
  <center>
  <img src='https://bscscan.com/token/images/ethereum_32.png' alt=''/>
  </center>
</div>
{eth_amount} ETH
<br />
<br/>

<center>
<div class="">
    <span class="font-mono bg-white rounded">{data&&data.cryptoAddress.length>6?data.cryptoAddress.substring(0,3)+"..."+data.cryptoAddress.substring(data.cryptoAddress.length-4,data.cryptoAddress):data.cryptoAddress}</span>
    <span onClick={copy} style={{fontSize:"12px",cursor:"pointer"}}>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
</svg></span>
    <br/>
    <small>1eth ~ ${eth_price}</small>
  </div>
</center>

</center>

<center>
<div id="empty-cover-art" class="shadow-md py-5 h-28 rounded w-56 bg-blue-100 text-center opacity-50 md:border-solid md:border-2 md:border-blue-800">
  <center>
  <img src='https://bscscan.com/token/images/binance_32.png' alt=''/>
  </center>
</div>
{bnb_amount} BNB
<br />
<br/>

<center>
<div class="">
    <span class="font-mono bg-white rounded">{data&&data.cryptoAddress.length>6?data.cryptoAddress.substring(0,3)+"..."+data.cryptoAddress.substring(data.cryptoAddress.length-4,data.cryptoAddress):data.cryptoAddress}</span><br/>
    <span onClick={copy} style={{fontSize:"12px",cursor:"pointer"}}>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
</svg></span>
    <small>1BNB ~ ${bnb_price}</small>
  </div>
</center>

</center>

{/* {<center>
<div id="empty-cover-art" class="shadow-md py-5 h-28 rounded w-56 bg-blue-100 text-center opacity-50 md:border-solid md:border-2 md:border-blue-800">
  <center>
  <img src='https://bscscan.com/token/images/centre-usdc_28.png' alt=''/>
  </center>
</div>
{usdc_amount} USDC
<br />
<br/>
<center>

<div class="">
    <span class="font-mono bg-white rounded">{data&&data.cryptoAddress.length>6?data.cryptoAddress.substring(0,3)+"..."+data.cryptoAddress.substring(data.cryptoAddress.length-4,data.cryptoAddress):data.cryptoAddress}</span><br/>
    <span onClick={copy} style={{fontSize:"12px",cursor:"pointer"}}>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
</svg></span>
    <small>1USDC ~ ${usdc_price}</small>
  </div>
</center>

</center>} */}

<center>
<div id="empty-cover-art" class="shadow-md py-5 h-28 rounded w-56 bg-blue-100 text-center opacity-50 md:border-solid md:border-2 md:border-blue-800">
  <center>
  <img src='https://bscscan.com/token/images/busd_32.png' alt=''/>
  </center>
</div>
{busd_amount} BUSD
<br />
<br/>
<center>
<div class="">
    <span class="font-mono bg-white rounded">{data&&data.cryptoAddress.length>6?data.cryptoAddress.substring(0,3)+"..."+data.cryptoAddress.substring(data.cryptoAddress.length-4,data.cryptoAddress):data.cryptoAddress}</span><br/>
    <span onClick={copy} style={{fontSize:"12px",cursor:"pointer"}}>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
</svg></span>
    <small>1BUSD ~ ${busd_price}</small>
  </div>
</center>

</center>

<center>
<div id="empty-cover-art" class="shadow-md py-5 h-28 rounded w-56 bg-blue-100 text-center opacity-50 md:border-solid md:border-2 md:border-blue-800">
  <center>
  <img src='https://bscscan.com/token/images/dai_32.png' alt=''/>
  </center>
</div>
{dai_amount} DAI
<br />
<br/>
<center>
<div class="">
    <span class="font-mono bg-white rounded">{data&&data.cryptoAddress.length>6?data.cryptoAddress.substring(0,3)+"..."+data.cryptoAddress.substring(data.cryptoAddress.length-4,data.cryptoAddress):data.cryptoAddress}</span><br/>
    <span onClick={copy} style={{fontSize:"12px",cursor:"pointer"}}>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
</svg></span>
    <small>1DAI ~ ${dai_price}</small>
  </div>
</center>

</center>

</div>
    </div>
    </div>
  </div>
  )
}

export default Wallet