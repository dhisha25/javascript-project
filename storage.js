import React, { Component } from 'react';

class Local extends Component {
  constructor(props) {
    super(props);

    // Initialize state with a value retrieved from local storage
    this.state = {
      storedValue: localStorage.getItem('myValue') || '', // Retrieve value from local storage or default to an empty string
    };
  }
  handleInputChange = (event) => {
    const newValue = event.target.value;

    // Update state and store the new value in local storage
    this.setState({ storedValue: newValue });
    localStorage.setItem('myValue', newValue);
  };
  render() {
    return (
      <div>
        <h1>Local Storage Example</h1>
        <label>
          Type something:
          <input
            type="text"
            value={this.state.storedValue}
            onChange={this.handleInputChange}
          />
        </label>

 <p>Stored Value: {this.state.storedValue}</p>
      </div>
    );
  }
}

export default Local;