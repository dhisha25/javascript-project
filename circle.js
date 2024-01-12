import React, { Component } from 'react';

class GraphWithCircles extends Component {
  constructor(props) {
    super(props);
    this.state = {
        circles: [
          { id: 1, cx: 50, cy: 50, radius: 40, color: 'blue' },
          { id: 2, cx: 150, cy: 100, radius: 30, color: 'green' },
          { id: 3, cx: 250, cy: 150, radius: 25, color: 'red' },
        ],
      };
    }


render() {
  return (
    <div>
      <h1>Graph with Circles</h1>
      <svg width="500" height="300">
        {this.state.circles.map(circle => (
          <circle
            key={circle.id}
            cx={circle.cx}
            cy={circle.cy}
            r={circle.radius}
            fill={circle.color}
            stroke="black"
            strokeWidth="2"
          />
))}
      </svg>
    </div>
  );
}
}

export default GraphWithCircles;  