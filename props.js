
import React, { Component } from "react";

// Child component that receives a "name" prop
class Greeting extends Component {
  render() {
    // Access the "name" prop passed from the parent component
    const { name } = this.props;

    return <h1>Hello, {name}!</h1>;
  }
}
// Parent component that renders the Greeting component with a "name" prop
class Props extends Component {
    render() {
      return (
        <div>
          {/* Render the Greeting component and pass the "name" prop */}
          <Greeting name="Hari" />
          <Greeting name="Ajith" />
        </div>
      );
    }
  }
  
  export default Props;