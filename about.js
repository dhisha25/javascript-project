import React, { Component } from "react";
import username from "../images1/username.jpg";
import girl1 from "../images1/girl1.jpg";
import { Icon } from '@iconify/react';
import "../css/about.css"
function About (){
    
    return(
        <div className="about">

        <div className="row" style={{margin: "0px"}}>
            <div class="col-lg-6 col-md-6 col-12">
                <div className="about1">
                    <h3 className="login">
                    Hi Everyone, I am <spaN className="about2">Dhisha </spaN> from <span className="about2">chennai, India.</span>

                    </h3>
                    <p className="login1">
                    I am a final year student pursuing CSBS(Computer Science And Business System), Extremely motivated to work on my first project ,I am passionate about transforming innovative ideas into functional and user-friendly applications. Seeking opportunties to contribute my work and gain experience.


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

            </div>

        </div>
    )
}
export default About;

