import React, { Component } from 'react';

class BarChart extends Component {
  constructor(props) {
    super(props);

    // Initial state containing bar data
    this.state = {
      bars: [
        { id: 1, x: 20, y: 150, width: 30, height: 100, color: 'blue' },
        { id: 2, x: 70, y: 120, width: 30, height: 130, color: 'green' },
        { id: 3, x: 120, y: 80, width: 30, height: 170, color: 'red' },
      ],
    };
  }
render() {
    return (
      <div>
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