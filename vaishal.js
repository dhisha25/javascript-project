import React, { Component } from "react";
export default class Project extends Component  {
    constructor(props){
        super(props);
        this.state={
            
        js:["react.js"],
        
        }
    }
    render(){

  
        return (
    <div>
        <h2>{this.state.js.map((a)=>(a))}</h2>
        </div>
        )
    }}
            
            
            

    

        

 