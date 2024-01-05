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
        img:[dog,dog1],
        store1:sessionStorage.getItem("storage"),
        align:["computerscience","mechanical","civil","electrical","information technology","chemical engineering"],
        dhisha:["chemistry","physics","english","bes","c language","maths"],
        num1:0,
        num2:0,
        result:0,
        color:"red"
      }
    }
    Num1Change = (e) => {
    this.setState({ num1: parseFloat(e.target.value, 10) || 0 });
  };
  Num2Change = (e) => {
    this.setState({ num2: parseFloat(e.target.value, 10) || 0 });
  };
  addNumbers = () => {
    const { num1, num2 } = this.state;
    const result = num1 / num2;
    this.setState({ result });
  };
  changeButtonColor = () => {
    const newColor = this.getRandomColor();
    this.setState({ color: newColor });
  };
  getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color1 = '#';
    for (let i = 0; i < 6; i++) {
      color1 += letters[Math.floor(Math.random() * 16)];
    }
    return color1;
  };
    
  // const fruit=["apple"," banana"," grapes"," watermelon"," pineapple"]
  // const fruit=[]
  render(){

  
    return (
<div>
    <p className="java">javascript</p>
    <h1>{this.state.store1}</h1>
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
<div className="row">
              {this.state.align.map((service, index) => (
                <div key={index} className="col-md-4 mb-4">
                  <div className="card d-flex h-100  hover-shadow">
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
            <div className="row">
              {this.state.dhisha.map((service, index) => (
                <div key={index} className="col-md-4 mb-4">
                  <div className="card d-flex h-100  align1">
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
            <div class="row">
    <div class="col-sm-6 bg-primary text-white p-3">
      first column
    </div>
    <div class="col-sm-6 bg-dark text-white p-3">
    second column
    </div>
    
  </div>
  <div class="row">
      <div class="col-sm-3 bg-primary text-white p-3">1 </div>
      <div class="col-sm-3 bg-dark text-white p-3">2 </div>
      <div class="col-sm-3 bg-primary text-white p-3">3 </div>
      <div class="col-sm-3 bg-dark text-white p-3">4 </div>
    </div>
    <div class="row">
      <div class="col-sm bg-primary text-white p-3">1 </div>
      <div class="col-sm bg-dark text-white p-3">2 </div>
      <div class="col-sm bg-primary text-white p-3">3 </div>
      
    </div>
    <div class="row">
      <div class="col-sm bg-primary text-white p-3">1 </div>
      <div class="col-sm bg-dark text-white p-3">2 </div>
      <div class="col-sm bg-primary text-white p-3">3 </div>
      <div class="col-sm bg-dark text-white p-3">4 </div>
      <div class="col-sm bg-primary text-white p-3">5 </div>
      <div class="col-sm bg-dark text-white p-3">6 </div>
    </div>
    <div class="row">
      <div class="col-sm-5 bg-primary text-white p-3">1 </div>
      <div class="col-sm-7 bg-dark text-white p-3">2 </div>
     
    </div>
    <div class="row">
      <div class="col-sm-3 col-md-6 bg-success text-white">
        
       first content
      </div>
      <div class="col-sm-9 col-md-6 bg-danger text-white">
     second content

      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div class="row">
      <div class="col-sm-5 bg-primary text-white p-3">1 </div>
      <div class="col-sm-7 bg-dark text-white p-3">2 </div>
    </div>
    <div class="row">
      <div class="col-sm-3 bg-info text-white p-3">3 </div>
      <div class="col-sm-9 bg-danger text-white p-3">4 </div>
    </div>
    <div class="row">
      <div class="col-sm-4 bg-secondary text-white p-3">5 </div>
      <div class="col-sm-8 bg-info text-white p-3">6 </div>
  </div>
  <div class="row">
      <div class="col-sm-6 bg-warning text-white p-3">7</div>
      <div class="col-sm-6 bg-success text-white p-3">8</div>
      </div>
    </div>
<div>
        <label>
          Number 1:
          <input type="text" value={this.state.num1} onChange={this.Num1Change} />
        </label>
        <br />
        <label>
          Number 2:
          <input type="text" value={this.state.num2} onChange={this.Num2Change} />
        </label>

<br />
        <button onClick={this.addNumbers}>Division</button>
        <br />
        <div>
          Result: {this.state.result}
        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button
          onClick={this.changeButtonColor}
          style={{ backgroundColor: this.state.color, padding: '10px', cursor: 'pointer' }}
        >
          Click me to change color
        </button>
      </div>
</div>
    );
}
}
