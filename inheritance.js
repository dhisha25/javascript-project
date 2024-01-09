import React, { Component } from "react";
class Inheritance extends Component {
  render() {
    const { content } = this.props;
return <button> Recruitment:  {content}!</button>;
  }
}
class Test extends Component {
    render() {
      return (
        <div>
         
         <Inheritance content="Recruitment process involves acquisition of work force. Recruitment process begins with identification of vacancy in the organisation after which different steps are undertaken to fill up the vacant position."/>
        </div>
      );
    }
  }
  
  export default Test;