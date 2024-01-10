import React, { Component } from "react";
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false, // Assuming this state represents the user's login status
    };
  }
  render() {
    // Check the login status from the state
    if (this.state.isLoggedIn) {
      // Render content for logged-in users
      return (
        <div>
          <h1>Welcome, User!</h1>
          <button class="btn btn-danger" onClick={this.handleLogout}>Logout</button>
        </div>
      );
    } else {
      // Render content for users who are not logged in
      return (
        <div>
          <h1>Please log in</h1>
          <form>
        <input class="form-control me-2" type="text" placeholder="email"/>
        <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd"/>
        <input class="form-control me-2" type="number" placeholder="phone number"/>
        <h5>Gender</h5>
        <input type="radio" id="male"></input>
       <lable for="male">Male</lable>
       <br></br>
       
       <input type="radio" id="female"></input>
       <lable for="female">Female</lable>
       <br></br>
       <br></br>
    

        
        <button class="btn btn-primary" onClick={this.handleLogin}>Login</button>
    </form>
        </div>
      );

}
  }

  handleLogin = () => {
    // Logic to handle login
    this.setState({ isLoggedIn: true });
  };

  handleLogout = () => {
    // Logic to handle logout
    this.setState({ isLoggedIn: false });
  };
}

export default Index;