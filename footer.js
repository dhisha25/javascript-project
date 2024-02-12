
import React, { Component } from "react";
export default class Footer extends Component  {
    constructor(props){
        super(props);
        this.state={
            
        }
    }
    render(){
        return (
            <div style={{backgroundColor:"skyblue"}}>
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div>
                            <h1>HOME</h1>
                            <h4>Vehicle</h4>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div>
                            <h1>About</h1>
                            <h4>vegtable</h4>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div>
                            <h1>Contact Us</h1>
                            <h4>Fruits</h4>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div>
                            <h1>Services</h1>
                            <h4>Cars</h4>
                        </div>
                    </div>

                </div>
            </div>
        )}}