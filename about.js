import React, { Component } from "react";
import username from "../images1/username.jpg";
import girl1 from "../images1/girl1.jpg";
import js from "../images1/js.jpg";
import mongodb from "../images1/mongodb.jpg";
import nodejs from "../images1/nodejs.jpg";
import python from "../images1/python.jpg";
import react from "../images1/react.png";
import cprogram from "../images1/c program.jpg";
import handicon from "../images1/handicon.jpg";
import { Icon } from '@iconify/react';
import "../css/about.css"
function About (){
    
    return(
        <div className="about">

        <div className="row" style={{margin: "0px"}}>
            <div class="col-lg-6 col-md-6 col-12">
                <div className="about1">
                    <h3 className="login">
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                    Hi Everyone, I am <spaN className="about2">Dhisha </spaN> from <span className="about2">Chennai, India.</span>

                    </h3>
                    <p className="login1">
                    I am a First year student pursuing CSBS(Computer Science And Business System), Extremely motivated to work on my first project ,I am passionate about transforming innovative ideas into functional and user-friendly applications. Seeking opportunties to contribute my work and gain experience.


         </p>
                    
                   
                    <p className="login3">some other activities that <span className="pink"> I love to do!</span></p>
                     <li className="login5">
                        Playing Chess
                        
                    </li>
                    <li className="login5">
                        Reading Books
                    </li> 
                  

                   




               
                    <br></br>

                    <p className="about4">
                    "Build things that makes a difference"
                    </p>
                    <footer className="login4">
                        
                         -Dhisha
                    </footer>
                    </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-12">
                    <br></br>
        <br></br>
                <div className="img">
                  <img className='girl1'src={girl1}></img>
               

                   




                </div>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div>
               <h1 className="header">Professional <span className="green">Skillset</span></h1>
               <br></br>
               <br></br>

               <div className="row">
                <div className="col">
                <img className='js'src={js}></img>

                </div>
                <div className="col">
                <img className='mongodb'src={mongodb}></img>

                </div>
                <div className="col">
                <img className='nodejs'src={nodejs}></img>
                </div>


               </div>
               <br></br>
               <br></br>
               <div className="row">
                <div className="col">
                <img className='python'src={python}></img>

                </div>
                <div className="col">
                <img className='react'src={react}></img>

                </div>
                <div className="col">
                <img className='cprogram'src={cprogram}></img>
                </div>


               </div>
               <br></br>
               <br></br>
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
    )
}
export default About;

