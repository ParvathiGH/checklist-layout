import React, { Component } from "react";
import {Link,BrowserHistory} from 'react-router-dom';
import Dashboard from "./Dashboard";
import { withRouter } from 'react-router-dom';

 class Login extends Component { 
  
  constructor(props){
    super(props)
  } 
 
  render() {
    {
      console.log(this.props)}
    return (
      <div className="button">
        <button onClick={this.props.history.goBack} >Back</button>
      </div>
    
    );
  }
}

export default withRouter(Login) ;
