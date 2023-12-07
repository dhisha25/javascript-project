import React, { Component } from "react";
import nature from "../images/nature.jpg";
import dog from "../images/dog.jpg";
import dog1 from "../images/dog1.jpg";
import user1 from "../images/user1.jpeg";
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
        <img src={dog1} class="rounded" width="390" height="236"></img>
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
        <button type="button" class="btn">Basic</button>
        <button type="button" class="btn btn-primary">Primary</button>
        <button type="button" class="btn btn-secondary">Secondary</button>
        <button type="button" class="btn btn-success">Success</button>
        <button type="button" class="btn btn-info">Info</button>
        <button type="button" class="btn btn-warning">Warning</button>
        <button type="button" class="btn btn-danger">Danger</button>       
<button type="button" class="btn btn-dark">Dark</button>
<button type="button" class="btn btn-light">Light</button>
<button type="button" class="btn btn-link">Link</button>
<br></br>
<a href="#" class="btn btn-success">Link Button</a>
<button type="button" class="btn btn-outline-primary">Primary</button>
<button type="button" class="btn btn-outline-secondary">Secondary</button>
<button type="button" class="btn btn-outline-success">Success</button>
<button type="button" class="btn btn-outline-info">Info</button>
<button type="button" class="btn btn-outline-warning">Warning</button>
<button type="button" class="btn btn-outline-danger">Danger</button>
<button type="button" class="btn btn-outline-dark">Dark</button>
<button type="button" class="btn btn-outline-light text-dark">Light</button>
<button type="button" class="btn btn-primary btn-lg">Large</button>
<button type="button" class="btn btn-success" disabled>Default</button>
<button type="button" class="btn btn-info btn-sm">Small</button>
<button class="btn btn-primary" disabled>
  <span class="spinner-border spinner-border-sm"></span>
  Loading..
</button>
<button class="btn btn-success" >
  <span class="spinner-grow spinner-grow-sm"></span>
  Loading..
</button>
<div class="d-grid">
  <button type="button" class="btn btn-primary btn-block">Full-Width Button</button>
</div>
        
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
  <h1>Newdata<span class="badge bg-success">New</span></h1>
  <h1>Newdata<span class="badge rounded-pill bg-primary">New</span></h1>
  <h1>Newdata<span class="badge bg-secondary">New</span></h1>
  <h1>Newdata<span class="badge bg-info">New</span></h1>
  <h1>Newdata<span class="badge bg-dark">New</span></h1>
  <h1>Newdata<span class="badge bg-warning">New</span></h1>
  <h1>Newdata<span class="badge bg-danger">New</span></h1>
  <h1>Newdata<span class="badge bg-light">New</span></h1>
  <button type="button" class="btn btn-success">
    Notifications <span class="badge bg-dark">7</span>
  </button>
 <br></br>
 <br></br>
  <div class="spinner-grow text-muted"></div>
  <div class="spinner-border text-primary"></div>
  <div class="spinner-border text-secondary"></div>
  <div class="spinner-grow text-success"></div>
  <div class="spinner-border text-info"></div>
  <div class="spinner-border text-dark"></div>
  <div class="spinner-border text-warning"></div>
  <div class="spinner-border text-danger"></div>
  <div class="spinner-border text-light"></div>
</div>
<div class="progress">
  <div class="progress-bar" style={{width:"10%"}}></div>
</div>
<br></br>
<div class="progress">
  <div class="progress-bar progress-bar-striped  progress-bar-animated" style={{width:"20%"}}>20%</div>
</div>
<br></br>
<div class="progress">
  <div class="progress-bar bg-primary" style={{width:"30%"}}></div>
</div>
<br></br>
<div class="progress">
  <div class="progress-bar bg-dark" style={{width:"40%"}}></div>
</div>
<br></br>
<div class="progress">
  <div class="progress-bar bg-info" style={{width:"50%"}}></div>
</div>
<br></br>
<div class="progress">
  <div class="progress-bar bg-secondary" style={{width:"60%"}}></div>
</div>
<br></br>
<div class="progress">
  <div class="progress-bar bg-warning" style={{width:"70%"}}></div>
</div>
<br></br>
<div class="progress">
  <div class="progress-bar bg-danger" style={{width:"80%"}}></div>
</div>
<br></br>
<div class="progress">
  <div class="progress-bar progress-bar-striped  progress-bar-animated" style={{width:"90%"}}>90%</div>
</div>
<br></br>
<br></br>
<div class="card">
  <div class="card-header">Head</div>
  <div class="card-body">Content</div>
  <div class="card-footer">Foot</div>
</div>
<div class="card bg-primary text-white">
    <div class="card-body">Primary card</div>
  </div>
  
  <div class="card bg-secondary text-white">
    <div class="card-body">Apple</div>
  </div>
  <div class="card bg-info text-white">
    <div class="card-body">Orange</div>
  </div>
  <div class="card bg-warning text-white">
    <div class="card-body">banana</div>
  </div>
  <div class="card bg-dark text-white">
    <div class="card-body">grapes</div>
  </div>
  <div class="card bg-danger text-white">
    <div class="card-body">pineapple</div>
  </div>
  <div class="card bg-light text-dark">
    <div class="card-body">cherry</div>
  </div>
  <div class="card bg-success text-white">
    <div class="card-body">kiwi</div>
  </div>
  <br></br>
  <div class="card" style={{width:"400px"}}>
  <img src={user1}></img>
  <div class="card-body">
    <h4 class="card-title">Dhisha</h4>
    <p class="card-text">B Tech computer science and business system</p>
    <a href="home" class="btn btn-primary">See Profile</a>
  </div>
</div>
        </div>
        )
    }}
            
            
            

    

        

 