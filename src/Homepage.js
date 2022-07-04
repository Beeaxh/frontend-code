import React from 'react'
import {Link} from "react-router-dom";
function Homepage() {
    const Red=()=>{
        window.location = "/auth";
    }
  return (
    <div>
     
        <div class="row">
          <div class="col-lg-6 p-3">
            <h1 class="headerH1 text-[#275ca4] " style={{textAlign:"center",fontSize:"34px",fontWeight:700}}>
              Save Up for your Children's future in crypto
            </h1>
            <p class="headerP" style={{textAlign:"center",fontSize:"20px",fontWeight:390,marginBottom:"15px"}}>
              put your children on their way to financial independence with our
              secured smart contract wallet designed for children to show them
              how exciting saving can be.
            </p>
            
            <button type="button" style={{textAlign:"center",justifyContent:'center',alignItems:"center"}} class="btn my-2 mx-4 bg-[#275ca4]  btn-lg getStartedBtn">
              <a href="/auth/signup" class="getStartedBtnLink">
                Get Started <i class="fa-solid fa-angle-right"></i
              ></a>
            </button>
          </div>

          <div class="col-lg-6 p-3 headerImgDiv">
            <img src="img/headerImg.png" alt="" class="headerImg" />
            <div class="c1"></div>
            <div class="c2"></div>
            <div class="c3"></div>
          </div>
        </div>

        <section id="features">
      <div class="container">
        <h1 class="featuresH1 text-[#275ca4]">
          Join one of Africa's Best Child Investment platform
        </h1>
        <p class="featuresP">
          We have proven to be one of the best and most trusted platform to save
          for your children
        </p>
        <div class="row">
          <div class="col-lg-4 p-3">
            <div class="card cardFeatures">
              <div class="card-body card-bodyFeatures">
                <img src="img/Secure.svg" alt="" />
                <h4 class="card-title text-[#275ca4]">Secured Savings</h4>
                <p class="card-text">
                  Your money is secured with our Smart Contract Blockchain
                  System
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 p-3">
            <div class="card cardFeatures">
              <div class="card-body card-bodyFeatures">
                <img src="img/Time to Pay.svg" alt="" />
                <h4 class="card-title text-[#275ca4]">Added Profit</h4>
                <p class="card-text">
                  Save for some amount of time and get 40% added Profit to your
                  savings
                </p>
              </div>
            </div>
          </div>

          <div class="col-lg-4 p-3">
            <div class="card cardFeatures">
              <div class="card-body card-bodyFeatures">
                <img src="img/Insurance.svg" alt="" />
                <h4 class="card-title text-[#275ca4]">Insurance</h4>
                <p class="card-text">
                  You can get insurance for your children with our platform
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="section3">
      <div class="container">
        <div class="row">
          <div class="col-md-6 section3ImgDiv">
            <img src="img/education.png" alt="" class="section3imgEdu" />
          </div>
          <div class="col-md-6">
            <div class="card section3Card section3Card2">
              <div class="card-body">
                <h4 class="card-title">
                  Start Saving now for your Children's education
                </h4>
                <p class="card-text">
                  In few years from now, see your child's education paid in full
                  by the money you save with us.
                </p>
                <a href="/auth" class="card-link"
                  >Learn more <i class="fa-solid fa-angle-right"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 section3ImgDiv">
            <img src="img/boy.png" alt="" class="section3imgBoy" />
          </div>
          <div class="col-md-6">
            <div class="card section3Card">
              <div class="card-body">
                <h4 class="card-title">
                  Funds would be locked Till whenever needed
                </h4>
                <p class="card-text">
                  An agreement would be signed by you not to spend with the
                  funds you save in the crypto wallet uless it is very
                  important.
                </p>
                <a href="/auth" class="card-link"
                  >Learn more <i class="fa-solid fa-angle-right"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="section4">
      <div class="container">
        <div class="row">
          <div class="col-md-6 mt-5">
            <h2>Start Saving for your children's future today!</h2>
            <p>
              Are you Ready to get Started? Register with Beeaxh for free to
              start investing in your children's lives.
            </p>
            <button type="button" onClick={Red} class="btn btn-lg btn-light text-primary">
              Get Started
            </button>
          </div>
          <div class="col-md-6 section4ImgDiv">
            <img src="img/3d ill.png" alt="" />
          </div>
        </div>
      </div>
    </section>

    <section class="footer">
    <div class="container">
        <div class="row">
          <div class="col-md-6 mt-5">
            <h2>Beeaxh</h2>
            <p>
              Smart contract platform that helps parent create a solid financial
              foundation for their children's future. <br />
              <i class="fa-brands fa-facebook fa-3x ms-3"></i>
              <i class="fa-brands fa-instagram fa-3x ms-3"></i>
              <i class="fa-brands fa-twitter fa-3x ms-3"></i>
            </p>
            {
            //     <form class="d-flex">
            //     <input
            //       class="form-control me-2"
            //       type="search"
            //       placeholder="Search"
            //       aria-label="Search"
            //     />
            //     <button class="btn btn-primary" type="submit">Search</button>
            //   </form>
            }
          </div>
          <div class="col-md-6 mt-5">
            <div class="row">
              <div class="col-sm-6">
                <h3 class="ms-3">About Us</h3>
                <ul class="footerList">
                  <li>why choose us</li>
                  <li>Our patners</li>
                  <li>About Us</li>
                  <li>Contact Us</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
              <div class="col-sm-6">
                <h3 class="ms-3">Products</h3>
                <ul class='footerList'>
                  <li>Insurance</li>
                  <li>wallet</li>
                  <li>Earn</li>
                  <li>Contact Us</li>
                  <li>Buy Cryptocurrency</li>
                </ul>
              </div>
              </div>
            </div>
          </div>
        </div>
        <br/>
      <br/>
      <hr/>
      <p class="copyrightText"><i class="fa-solid fa-copyright"></i> 2022 Copyright Beeaxh</p>
   
    </section>
    </div>
  )
}

export default Homepage