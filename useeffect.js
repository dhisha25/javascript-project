import React, { Component } from "react";

class Useeffect extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
  }
  fetchData = () => {
    // Simulating an asynchronous data fetch
    setTimeout(() => {
      const newData = "After 5 seconds Data is displayed here";
      this.setState({ data: newData });
    }, 3000);
  };

  componentDidMount() {
    // This is similar to the useEffect(() => {}, []) hook
    // It runs once after the component is mounted
    this.fetchData();
  }
componentDidUpdate(prevProps, prevState) {
    // This is similar to the useEffect(() => {}, [dependency]) hook
    // It runs whenever the component updates, but only if the specified dependency changes
    if (prevState.data !== this.state.data) {
      console.log("Data has been updated:", this.state.data);
    }
  }
  render() {
    return (
      <div>
        <h1>Use Effect Example</h1>
        <p>Data: {this.state.data}</p>
      </div>
    );
  }
}

export default Useeffect;