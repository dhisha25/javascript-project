import React, { Component } from "react";
import nature from "../images/nature.jpg";
import dog from "../images/dog.jpg";
import dog1 from "../images/dog1.jpg";
export default class Dhisha extends Component  {
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
        <img src={nature} class="img-thumbnail" width="390" height="236"></img>
        <img src={dog} class="rounded" width="390" height="236"></img>
        <img src={dog1} class="rounded-circle" width="390" height="236"></img>
        <p class="text-success">I am dhisha and My hobby is reading books</p>
        <p class="text-info">apple</p>
        <p class="text-warning">banana</p>
        <p class="text-warning">orange</p>
        <p class="text-secondary">grapes</p>
        <p class="text-body">pineapple</p>
        <p class="text-body">kiwi</p>
        <p class="text-light">carrot</p>
        <p class="text-white">betroot</p>
        <p class="text-primary">beans</p>
        <br></br>
        <p class="text-bg-dark">tomato</p>
        <p class="text-bg-light">cabbage</p>
        <p class="text-bg-secondary">onion</p>
        <p class="text-bg-danger">broccoli</p>
        <p class="text-bg-warning">capsicum</p>
        <p class="text-bg-info">cauliflower</p>
        <p class="text-bg-success">corn</p>
        <p class="text-bg-primary">garlic</p>
        <p>bittergourd</p>
        <p>potato</p>
        <p>pumpkin</p>
        <p>mushroom</p>
        <p>brinjal</p>
        <div class="container mt-5">
  <div class="row">
    <div class="col-md-4">
      <h3>Column 1</h3>
      <p>elit...</p>
      <p>aboris...</p>
    </div>
    <div class="col-md-4">
      <h3>Column 2</h3>
      <p> elit...</p>
      <p>aboris...</p>
    </div>
    <div class="col-md-4">
      <h3>Column 3</h3>        
      <p> elit...</p>
      <p> laboris...</p>
    </div>
  </div>
  <table class="table table-bordered">
    <thead>
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>   
      </tr>
    </thead>
    <tbody>
      <tr 
      class="table-success">
        <td>John</td>
        <td>Doe</td>     
      </tr>
      <tr 
      class="table-active">
        <td>Mary</td>
        <td>Moe</td>   
      </tr>
      <tr
      class="table-dark">
        <td>July</td>
        <td>Dooley</td>     
      </tr>
      <tr
      class="table-light">
        <td>Dhisha</td>
        <td>Dhis</td>     
      </tr>
      <tr
      class="table-warning">
        <td>Deepika</td>
        <td>deepi</td>     
      </tr>
      <tr
      class="table-primary">
        <td>Joshna</td>
        <td>Josh</td>     
      </tr>
      <tr
      class="table-danger">
        <td>Janani</td>
        <td>Jana</td>
      </tr>
    </tbody>
  </table>
</div>
        </div>
        )
    }}
            
            
            

    

        

 