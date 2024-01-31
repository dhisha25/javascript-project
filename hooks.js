import React, { Component } from "react";
import './barchart.css';
import './hooks.css';
 import axios from "axios";
const ip="http://localhost:3000";
class Hook extends Component{
    constructor(props){
        super(props);
        this.state={
         count:0,
         email:"",
         password:"",
         gender:"",
         username:""
        
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
      postcall = async () => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${this.state.accesstoken}`,
    };
    const Checkdata = {
      email:this.state.email,
      password:this.state.password,
    };
 const res = await axios
      .post(`${ip}/post`, Checkdata, {
        headers: headers,
      })
      .then((res) => {
      
if (res.status === 401) {
          alert(" Eligibility Successfully Checked");
        }
      })

      .catch((err) => {
        if(err.res){
          if(err.res.status===401){
            alert("401 error")
          }
        }
      });
  };
  putcall = async () => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${this.state.accesstoken}`,
    };
    const Checkdata = {
      username:this.state.username,
      gender:this.state.gender,
    };
 const res = await axios
      .put(`${ip}/put`, Checkdata, {
        headers: headers,
      })
      .then((res) => {
      
if (res.status === 401) {
          alert(" Eligibility Successfully Checked");
        }
      })

      .catch((err) => {
        if(err.res){
          if(err.res.status===401){
            alert("401 error")
          }
        }
      });
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
                <br></br>
                <div class="mb-3 mt-3">
      <label for="email">Email:</label>
      <input type="email" class="form-control"  placeholder="Enter email" value={this.state.email} onChange={(e) =>
                        this.setState({ email: e.target.value })
                      }/>
    </div>
    <div class="mb-3">
    <label for="pwd" class="form-label">Password:</label>
    <input type="password" class="form-control"  placeholder="Enter password" value={this.state.password} onChange={(e) =>
    this.setState({ password: e.target.value})}/>
    <button onClick={this.postcall} class="btn btn-info">Submit</button>
  </div>
  <br></br>
  <div class="mb-3 mt-3">
      <label for="username">Username:</label>
      <input type="username" class="form-control"  placeholder="Enter username" value={this.state.username} onChange={(e) =>
                        this.setState({ username: e.target.value })
                      }/>
    </div>
  <div class="mb-3">
    <label for="gender" class="form-label">Gender:</label>
    <input type="gender" class="form-control"  placeholder="Enter gender" value={this.state.gender} onChange={(e) =>
    this.setState({ gender: e.target.value})}/>
    <button onClick={this.putcall} class="btn btn-primary" >Submit</button>
  </div>
  

            </div>
        )
    }

    
}
export default Hook;