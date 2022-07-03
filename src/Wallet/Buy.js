import React, { useEffect,useState } from 'react'
import axios from "axios";
function Buy() {
const[amount,setAmount]=useState("");
const[recieve,setRecieve]=useState("");
const user = sessionStorage.getItem("data")?JSON.parse(sessionStorage.getItem("data")):null
useEffect(()=>{
  if(user==null){
    window.location = "/auth/signin"
  }
},[])
const getAmount=()=>{
}
useEffect(()=>{
  getAmount()
},[amount])
const ToBuy=()=>{
  const data = {}
  axios.post("/",data).then(response=>{
    alert("response")
  }).catch((err)=>{
    alert(err)
  })
}
// function makePayment() {
//   FlutterwaveCheckout({
//     public_key: "FLWPUBK_TEST-SANDBOXDEMOKEY-X",
//     tx_ref: "titanic-48981487343MDI0NzMx",
//     amount: 54600,
//     currency: "NGN",
//     payment_options: "card, banktransfer, ussd",
//     redirect_url: "https://glaciers.titanic.com/handle-flutterwave-payment",
//     meta: {
//       consumer_id: 23,
//       consumer_mac: "92a3-912ba-1192a",
//     },
//     customer: {
//       email: "email",
//       phone_number:"phone",
//       name:"username",
//     },
//     // customizations: {
//     //   title: "The Titanic Store",
//     //   description: "Payment for an awesome cruise",
//     //   logo: "https://www.logolynx.com/images/logolynx/22/2239ca38f5505fbfce7e55bbc0604386.jpeg",
//     // },
//   });
// }
  return (
    <div>
      <div class="buyAndSell">
      <div class="flexBuyAndSell">
        <h3 class="buy">Buy</h3>
        <h3 class="sell">Sell</h3>
      </div>
      <div class="p-3">
        <div class="form-group">
          <label for="exampleInputEmail1">I want to pay</label>
          <input
            type="number"
            value={amount}
            onChange={(e)=>setAmount(e.target.value)}
            class="form-control"
            id="exampleInputEmail1"
            
            placeholder="Enter amount"
          />
        </div>
        <div class="form-group mt-3">
          <label for="receive">I will receive</label>
          <input type="number" value={recieve} class="form-control" id="receive" />
        </div>
        <br />

        <p class="referencePrice">Reference Price NGN 0</p>

        <div class="d-grid">
          <button type="click" class="btn buyBtn btn-block text-light">
            Buy with 0 Fee
          </button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Buy