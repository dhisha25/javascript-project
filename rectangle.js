import React, { Component } from 'react';

class BarChart extends Component {
  constructor(props) {
    super(props);

    // Initial state containing bar data
    this.state = {
      user1:[],
      user:5,
      name:[],
      name1:['Ari', 'Bob', 'Charlie', 'David', 'Eswar'],
      bars: [
        { id: 1, x: 20, y: 150, width: 30, height: 100, color: 'blue' },
        { id: 2, x: 70, y: 120, width: 30, height: 130, color: 'green' },
        { id: 3, x: 120, y: 80, width: 30, height: 170, color: 'red' },
      ],
    };
  }
render() {
  const numberOfItems = 5;
    const items = [];

    for (let i = 1; i <=this.state.user; i++) {
      this.state.user1.push(<li key={i}>Item {i}</li>);
    }
    const users = ['Ari', 'Bob', 'Charlie', 'David', 'Eswar'];

    const userListItems = [];
    for (let i = 0; i < this.state.name1.length; i++) {
    this.state.name.push(<li key={i}>{users[i]}</li>);
    }
    return (
      <div>
        <h2>list</h2>
        <ul>{this.state.user1}</ul>
        <h2>User List:</h2>
        <ul>{this.state.name}</ul>
        <h1>Bar Chart</h1>
        <svg width="200" height="200">
          {this.state.bars.map(bar => (
            <rect
              key={bar.id}
              x={bar.x}
              y={bar.y}
              width={bar.width}
              height={bar.height}
              fill={bar.color}
              stroke="black"
              strokeWidth="2"
            />
          ))}
        </svg>
      </div>
    );
  }
}

export default BarChart;