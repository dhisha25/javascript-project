import React, { Component } from "react";
import username from "../images1/username.jpg";
import girl from "../images1/girl.png";
import { Icon } from '@iconify/react';
import "../css/new project.css"

import Python from "../javascript/header";
function Resume (){
    
    return(
      <div>
         <Python/>
         <br></br>
         <br></br>
         <br></br>
      <div className="name1">
       
        <div class="row" style={{margin: "0px"}}>
            <div class="col-lg-6 col-md-6 col-12">
                <div class="resume">
            <h1 class="heading">Hello There!</h1>
            <br></br>
            <h4 className="heading-name" >I'M DHISHA </h4>
            <span>
              <h5 className="name2">SOFTWARE DEVELOPER</h5>
            </span>
            </div>
            </div>
            <br></br>
            <br></br>
           
            <div class="col-lg-6 col-md-6 col-12">
              <br></br>
              <br></br>
              <div class="image">
                <br></br>

          <img  className='username'src={username}></img>
          </div>
          </div>
        
          <br></br>
          <div className="name3">
            <div class="row" style={{margin: "0px"}}>
            

      <div class="col-lg-6 col-md-4 col-12">
        <br></br>
        <br></br>
                <div className="image1">
                  <img className='girl'src={girl}></img>
                </div>

              </div>
              <br></br>
              <br></br>
              <div class="col-lg-4 col-md-8 col-12">
              <div className="resume1">
                <br></br>
                <br></br>
              <h1><span className="color1">LET ME</span><span className="color"> INTRODUCE MYSELF</span></h1>
              <br></br>
              <br></br>
              <p className="color3">
              I am currently pursuing CSBS in VelTechMultiTech Engineering College . Additionally, I've earned certification in FULL STACK WEB DEVELOPMENT, showcasing my commitment to staying current in the field. Committed to enhancing user interfaces and functionality.
              </p>
              <br></br>
              </div>
            </div>
            <br></br>
            <br></br>
            <div className="row">
              <div className="name4" col-md-12>
                <h1 className="find">
                  FIND ME ON
                </h1>
                <p className="icon3">
                  Feel free to
                  

                  <span className="purple" > Connect </span>
                  
                  with me
                </p>
            
                {/* <div className="row">
                  <div className="col">
                  <li className="social-icon">
                  <a href="https://github.com/dhisha25" target="_blank"
                   >
                     <Icon
                  icon="ri:github-fill"
                  style={{ color: "#b8b2b2" }}
                  className="icon1"
                />

                    </a>
                    
                  
 </li>
 </div>
 <div className="col">
 <li className="social-icon">
 <a href="https://www.linkedin.com/in/dhisha-pandian-702a57293/" target="_blank">
 <Icon
                  icon="ri:linkedin-fill"
                  style={{ color: "#b8b2b2" }}
                  className="icon2"
                  />
   </a>
 </li>
 </div>
 </div> */}
 <div class="logo-container">
              <a href="https://github.com/dhisha25" target="_blank">
                <Icon
                  icon="ri:github-fill"
                  style={{ color: "#b8b2b2" }}
                  className="icon1"
                />
              </a>
              &nbsp;&nbsp;
              <a href="https://www.linkedin.com/in/dhisha-pandian-702a57293/" target="_blank">
                <Icon
                  icon="ri:linkedin-fill"
                  style={{ color: "#b8b2b2" }}
                  className="icon2"
                  />
                  </a>
                  </div>

                
              </div>

            </div>
</div>
            
            </div>
           </div>
          </div>
          </div>
        
      
        

    )




}
export default Resume;
