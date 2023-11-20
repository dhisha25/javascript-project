import nature from "../images/nature.jpg";
import dog from "../images/dog.jpg";
import dog1 from "../images/dog1.jpg";
import "../project/project.css";
import React, { Component } from "react";
export default class Project extends Component  {
    constructor(props){
        super(props);
        this.state={
            fruit:["apple"," banana"," grapes"," watermelon"," pineapple"],
        age:[1,2,3,4],
        img:[dog,dog1]
        }
    }
    
  // const fruit=["apple"," banana"," grapes"," watermelon"," pineapple"]
  // const fruit=[]
  render(){

  
    return (
<div>
    <p className="java">javascript</p>
    <p className="java1">javascript is a programming language</p>
    <h1>hi good morning</h1>
    <h2>have a nice day</h2>
    {this.state.fruit.length>0 &&
    <h1 className="violet">total {this.state.fruit.length} fruits</h1>}
    <h2 className="green">{this.state.fruit.map((a)=>(a))}</h2>
    <h2>{this.state.age.map((a)=>(a))}</h2>
    {this.state.img.map((a)=>(
        <img className="dog"src={a}></img>
    )
    )}
    {this.state.fruit.length>0 ?(
 <h3 className="yellow">I have a {this.state.fruit.length} fruits</h3>
    ):(
        <h3>no fruits</h3>
    )
   }
    
<div>

     <img className="nature" src={nature}></img>
     <img className="dog" src={dog}></img>
    <picture> <img className="dog1" src={dog1}></img>
    </picture>
</div>
</div>
    );
}
}
