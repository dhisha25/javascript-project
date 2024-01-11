import React, { Component } from "react";
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
    render(){
        return(
            <div>
                <h1>Incerment using hooks</h1>
                <p>count:{this.state.count}</p>
                <button onClick={this.increment}>Incerment</button>
                <br></br>
                <h1>Decrement using hooks</h1>
                <p>count:{this.state.count}</p>
                <button onClick={this.decrement}>Decrement</button>
            </div>
        )
    }

    
}
export default Hook;