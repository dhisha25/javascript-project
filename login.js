import React, { Component } from "react";

class Condition extends Component {
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
          <button onClick={this.handleLogout}>Logout</button>
        </div>
      );
    } else {
      // Render content for users who are not logged in
      return (
        <div>
          <h1>Please log in</h1>
          <button onClick={this.handleLogin}>Login</button>
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

export default Condition;