
import { Bar } from 'react-chartjs-2';

import './barchart.css'; // Import the CSS file
import React, { Component } from 'react';
class Rectangle extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        data: [65, 59, 80, 81, 56, 55, 40],
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      };
    }
  
    componentDidMount() {
      this.drawChart();
    }
  
    componentDidUpdate() {
      this.drawChart();
    }
  drawChart() {
      const canvas = this.refs.canvas;
      const ctx = canvas.getContext('2d');
  
      // Clear the canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
  
      // Draw the line chart
      ctx.beginPath();
      ctx.moveTo(50, 250); // Move to the starting point
  
      const data = this.state.data;
      const labels = this.state.labels;
      const dataLength = data.length;
 
  const interval = (canvas.width - 100) / (dataLength - 1);
  
      for (let i = 0; i < dataLength; i++) {
        const x = 50 + i * interval;
        const y = 250 - (data[i] * 2); // Adjusting scale for simplicity
  
        ctx.lineTo(x, y);
        ctx.arc(x, y, 3, 0, 2 * Math.PI); // Draw a small circle at each data point
        ctx.fillText(labels[i], x, 270); // Display labels
      }
  
      ctx.stroke();
    }
  render() {
      return (
        <div className="chart-container">
          <canvas ref="canvas" width={600} height={300}></canvas>
        </div>
      );
    }
  }
  
  export default Rectangle;