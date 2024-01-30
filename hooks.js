import React, { Component } from "react";
import './barchart.css';
import './hooks.css';
 import axios from "axios";
const ip="http://localhost:3000";
class Hook extends Component{
    constructor(props){
        super(props);
        this.state={
         count:0
        }
    }
    increment=()=>{
        this.setState((login)=>({
            count:login.count+1
        }))
    }
    getcall = async () => {
        //api call to get all cpt data
        const headers = {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.state.accesstoken}`,
        };
        // eslint-disable-next-line
        const res = await axios
          .get(`${ip}/head`, { headers: headers })
          .then((res) => {
            this.setState({
              cptdata: res.data.cpt,
            });
          })
          .catch((err) => {});
      };
      deletecall = async () => {
        //api call to get all cpt data
        const headers = {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.state.accesstoken}`,
        };
        // eslint-disable-next-line
        const res = await axios
          .delete(`${ip}/delete`, { headers: headers })
          .then((res) => {
            this.setState({
              cptdata: res.data.cpt,
            });
          })
          .catch((err) => {});
      };
    decrement=()=>{
        this.setState((login)=>({
            count:login.count-1
        }))
        if(this.state.count<1){
            alert("Less than 0");
            this.setState((a)=>({
                count:a.count+1
            }))
        }
    }
    componentDidMount() {
        this.getcall();

    }
    render(){
        return(
            <div>
                <h1 className="update">Incerment using hooks</h1>
                <p className="circle">count:{this.state.count}</p>
                <button onClick={this.increment} className="project">Incerment</button>
                <br></br>
                <h1 className="online">Decrement using hooks</h1>
                <p className="chart-container">count:{this.state.count}</p>
                <button onClick={this.decrement} className="hook">Decrement</button>
            </div>
        )
    }

    
}
export default Hook;