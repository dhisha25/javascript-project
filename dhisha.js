import icon from "../images/react.jpg"
import "../project/dhisha.css";
import React, { useState } from "react";
function Vaishal (){
    const [color, setColor] = useState("red");
    const day=["Monday", " Tuesday", " wednesday", " Thursday", " Friday", " saturday", " Sunday"]
    return(
        <div>
           <div><h1>My favorite color is {color}!</h1>
      <button
        type="button"
        onClick={() => setColor("blue")}
      >Blue</button>
      <button
        type="button"
        onClick={() => setColor("yellow")}
      >Yellow</button>
      <button
        type="button"
        onClick={() => setColor("green")}
      >Green</button>
      </div> 
      <br></br>
      <br></br>
      
            <img className="java2" src={icon}></img>
            <h2 className="java3">React js</h2>
            <a href="/project">React is a programming language</a>
            {day.length>0 &&
    <h1>total {day.length} days</h1>}  
    <h2 className="blue">{day.map((a)=>(a))}</h2>
    <br></br>
    <br></br>
    <div className="cardcontainer">
        <div className="cardcontainer1">
            <h1>one</h1>
        </div>
        <div className="cardcontainer2">
            <h1>two</h1>
        </div>
        <div className="cardcontainer3">
            <h1>three</h1>
        </div>
        <div className="cardcontainer4">
            <h1>four</h1>
        </div>
        <div className="cardcontainer5">
            <h1>five</h1>
        </div>
        <div className="cardcontainer6">
            <h1>six</h1>
            </div>
        <div className="cardcontainer7">
            <h1>seven</h1>
            </div>
        <div className="cardcontainer8">
            <h1>eight</h1>
        </div>
        
    </div>
    <div class="toast show">
    <div class="toast-header">
      <strong class="me-auto">Bootstrap</strong>
      <button type="button" class="btn-close" data-bs-dismiss="toast"></button>
    </div>
    <div class="toast-body">
      <p>Card,Input,Lable,Modal,Toast</p>
    </div>
    <div class="toast-footer">
        <button class="btn btn-warning" >close</button>
    </div>
  </div>
  <div class="footer_bg_one"></div>
        </div>
    )
}
export default Vaishal;