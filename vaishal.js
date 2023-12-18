import React, { Component } from "react";
import nature from "../images/nature.jpg";
import dog from "../images/dog.jpg";
import dog1 from "../images/dog1.jpg";
import user1 from "../images/user1.jpeg";
import flower1 from "../images/flower1.jpeg";
import flower2 from "../images/flower2.jpeg";
import flower3 from "../images/flower3.jpeg";
import { Icon } from "@iconify/react";


export default class Dhisha extends Component  {
    constructor(props){
        super(props);
        this.state={
                   js:["react.js"],
                   image:[flower1,flower2,flower3],currentImageIndex: 0,
               }
    }
    nextImage = () => {
      this.setState((prevState) => ({
        currentImageIndex: (prevState.currentImageIndex + 1) % 4,
      }));
    };
    prevImage = () => {
      this.setState((prevState) => ({
        currentImageIndex:
          prevState.currentImageIndex === 0 ? 3 : prevState.currentImageIndex - 1,
      }));
    };
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
        <th rowSpan={2}>Firstname</th>
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
  <table>
  <tr>
    <th>Name</th>
    <td>Jack</td>
  </tr>
  <tr>
    <th rowspan="2">Phone</th>
    <td>52322</td>
  </tr>
  <tr>
    <td>555-8745</td>
  </tr>
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
  <ul class="pagination pagination-sm justify-content-end">
  <li class="page-item"><a class="page-link" href="#">Previous</a></li>
  <li class="page-item disabled"><a class="page-link" href="#">1</a></li>
  <li class="page-item active"><a class="page-link" href="#">2</a></li>
  <li class="page-item"><a class="page-link" href="#">3</a></li>
  <li class="page-item"><a class="page-link" href="#">Next</a></li>
</ul>
<ul class="pagination pagination-sm justify-content-center">
  <li class="page-item"><a class="page-link" href="#">Previous</a></li>
  <li class="page-item disabled"><a class="page-link" href="#">1</a></li>
  <li class="page-item active"><a class="page-link" href="#">2</a></li>
  <li class="page-item"><a class="page-link" href="#">3</a></li>
  <li class="page-item"><a class="page-link" href="#">Next</a></li>
</ul>
<ul class="pagination">
  <li class="page-item"><a class="page-link" href="#">Previous</a></li>
  <li class="page-item disabled"><a class="page-link" href="#">1</a></li>
  <li class="page-item active"><a class="page-link" href="#">2</a></li>
  <li class="page-item"><a class="page-link" href="#">3</a></li>
  <li class="page-item"><a class="page-link" href="#">Next</a></li>
</ul>
<div class="dropup">
    <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">
      Dropdown button
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Link 1</a></li>
      <li><a class="dropdown-item" href="#">Link 2</a></li>
      <li><a class="dropdown-item" href="#">Link 3</a></li>
      <li><hr class="dropdown-divider"/></li> 
    </ul>
    
    
    

  </div>
 

</div>
<ul class="nav nav-pills">
  <li class="nav-item">
    <a class="nav-link" href="#">Link1</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link2</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link3</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#">Disabled</a>
  </li>
 <li class="nav-item dropdown">
  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Dropdown</a>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Link</a></li>
    <li><a class="dropdown-item" href="#">Another link</a></li>
    <li><a class="dropdown-item" href="#">A third link</a></li>
  </ul>
</li>
</ul>
<div>
  <nav class="navbar navbar-expand-sm bg-danger navbar-dark fixed-top" style={{position:"fixed"}}>
  <div class="container-fluid">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link active" href="#">Active</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
    <form class="d-flex">
        <input class="form-control me-2" type="text" placeholder="Search"/>
        <button class="btn btn-primary" type="button">Search</button>
      </form>
  </div>
  </nav>
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item">
      <a class="nav-link " data-bs-toggle="tab" href="#home">Home</a>
    </li>
    <li class="nav-item">
      <a class="nav-link active" data-bs-toggle="tab" href="#menu1">Menu 1</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" data-bs-toggle="tab" href="#menu2">Menu 2</a>
    </li>
  </ul>
  <div class="tab-content">
    <div id="home" class="container tab-pane fade"><br/>
      <h3>HOME</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
    <div id="menu1" class="container tab-pane active"><br/>
      <h3>Menu 1</h3>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
    <div id="menu2" class="container tab-pane fade"><br/>
      <h3>Menu 2</h3>
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
    </div>
  </div>
  </div>
  <div>
  <ul class="nav nav-pills" role="tablist">
    <li class="nav-item">
      <a class="nav-link active" data-bs-toggle="pill" href="#home">Home</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" data-bs-toggle="pill" href="#menu1">Menu 1</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" data-bs-toggle="pill" href="#menu2">Menu 2</a>
    </li>
  </ul>
  <div class="tab-content">
    <div id="home" class="container tab-pane active"><br/>
      <h3>HOME</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
    <div id="menu1" class="container tab-pane fade"><br/>
      <h3>Menu 1</h3>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
    <div id="menu2" class="container tab-pane fade"><br/>
      <h3>Menu 2</h3>
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
    </div>
  </div>
  <br></br>

 
<div class="container">
          <div class="row justify-content-center">
            <div class="col-10">
              <div className="image-slider text-center">
                <h4
                  className="skillnew"
                  align="center"
                  style={{ color: "rgb(32, 43, 93)", fontWeight: "700" }}
                >
                  Flowers
                </h4>

                <Icon
                  icon="fa-solid:less-than"
                  color="gray"
                  style={{ cursor: "pointer" }}
                  onClick={this.prevImage}
                  className="lefti"
                />

<img
                  className="conimgnew equal-width-image"
                  src={this.state.image[this.state.currentImageIndex]}
                  alt={`Image ${this.state.currentImageIndex + 1}`}
                />
<Icon
                  icon="fa-solid:greater-than"
                  color="gray"
                  onClick={this.nextImage}
                  style={{ cursor: "pointer" }}
                  className="righti"
                />
</div>
            </div>
  </div>
  </div>
  <div class="mb-3 mt-3">
      <label for="email">Email:</label>
      <input type="email" class="form-control" id="email" placeholder="Enter email" name="email"/>
    </div>
    <div class="mb-3">
    <label for="pwd" class="form-label">Password:</label>
    <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd"/>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
<br></br>
  <br></br>
  <form>
  <label for="fname">First name:</label>
<input type="text" id="fname" name="fname" />
        <br />
        <label for="lname">Last name:</label>
        <br />
        <input type="text" id="lname" name="lname" value="Kumar" />
        <br /> <br />
<input type="radio" id="html" name="fav_language" value="HTML1" />
        <label for="html">HTML</label>
        <br />
        <input type="radio" id="css" name="fav_language" value="CSS" />
        <label for="css">CSS</label>
        <br />
        <input type="radio" id="js" name="fav_language" value="JS" />
        <label for="javascript">JavaScript</label>
        <br />
        <br />
        <input type="checkbox" value="Apple1" id="apple1" name="fruit" />
        <label> I have an Apple</label>
        <br />
        <input type="checkbox" value="Orange1" id="orange1" name="fruit" />
        <label> I have an Orange</label>
        <br />
        <input type="checkbox" value="Grapes1" id="grapes1" name="fruit" />
        <label> I have a Grapes</label>
        <br />
        <label for="phone number">Phone number:</label>
<input type="number" id="phone number" name="phone number" />
<br></br>
        {/* input for type="submit" it will appear as button */}
        <input type="submit" value="Submit" />
        <br></br>
        <label for="comment">Comments:</label>
<textarea class="form-control" rows="5" id="comment" name="text"></textarea>
        </form>


  </div>

</div>
  
        )
    }}
            
            
            

    

        

 