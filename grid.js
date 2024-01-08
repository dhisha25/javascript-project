import nature from "../images/nature.jpg";
import dog from "../images/dog.jpg";
import dog1 from "../images/dog1.jpg";
import "../project/grid.css";
import React, { Component } from "react";
export default class Grid extends Component  {
    constructor(props){
        super(props);
        this.state={
            language:["Javascript","HTML","CSS","React","C language","Python"]
        }
    }
    render(){
        return (
        
            <div className="row">
            {this.state.language.map((service, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div className="card d-flex h-100  language1">
                  <div className="card-body d-flex flex-column">
                    {/* <h5 className="card-title">{service}</h5> */}
                    <p
                      className="card-text flex-fill"
                      style={{ fontSize: "20px" }}
                    >
                      {service}
                    </p>
                  </div>
                  </div>
              </div>
               ))}
          </div>
    
        )
    }
    }
        
                
        



        
    


  
    
