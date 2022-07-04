//import logo from './logo.svg';
import './App.css';
import React from "react";
import {BrowserRouter,Routes,Route, Link} from "react-router-dom";
import Homepage from './Homepage';
import Main from './Auth/Main';
import Otp from './Auth/Otp';
import Buy from './Wallet/Buy';
import Wallet from './Wallet/Wallet';
function App() {
  return (
    <div>
       <section id="header">
      <div class="container header">
        <nav
          class="navbar navbar-expand-sm navbar-light justify-content-center"
        >
          <div class="container-fluid">
            <a class="navbar-brand" href="/">
              <img src="https://res.cloudinary.com/axgura/image/upload/v1656950725/IMG-20220704-WA0004_ndqc8h.jpg" alt="Logo" style={{width:"100px",height:"100px"}} class="rounded-pill" />
             </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsibleNavbar"
             
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="collapsibleNavbar">
              <ul class="navbar-nav ms-auto">
                {/* {<li class="nav-item me-3">
                  <a class="nav-link" href="#">Features</a>
                </li>
                <li class="nav-item me-3">
                  <a class="nav-link" href="#">About Us</a>
                </li>
                <li class="nav-item me-3">
                  <a class="nav-link" href="#">FAQs</a>
                </li>} */}
              </ul>
              <button type="button" style={{color:"white"}} class="btn bg-[#275ca4] text-white btn-outline-primary me-3">
                <a class="text-white" href="/auth/signin">sign in</a>
              </button>

              <button class="btn  bg-[#275ca4] btn-primary me-3" type="button">
                <a href="/auth/signup" class="headerSignUp"> sign up</a>
              </button>
            </div>
          </div>
        </nav>
        
      </div>
    </section>
      <BrowserRouter>
      
      <Routes>
        <Route path='/' exact element={<Homepage/>}/>
        <Route path="/auth/:name" element={<Main/>}/>
        <Route path="/otp-verify/:ide/:email" element={<Otp/>}/>
        <Route path="/buy/:name" element={<Buy/>}/>
        <Route path="/wallet" element={<Wallet/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
