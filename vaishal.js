import React, { Component } from "react";
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
            
            
            

    

        

 