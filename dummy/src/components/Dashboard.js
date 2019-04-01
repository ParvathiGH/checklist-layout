
import React,{Component} from 'react'
import {Redirect} from 'react-router-dom';


class Dashboard extends Component {

    constructor(props) {
        super(props)
        console.log(props)

         this.redirectToTarget=this.redirectToTarget.bind(this);
        };
    
    redirectToTarget() {
        console.log("I was here")
           this.props.history.push(`/Login`)
           return (
            < Redirect to= {"/Login"} />
                  )
        }


    render() {
       
        return (
            <div>
        <button onClick={this.redirectToTarget}>GoToLogin</button>
        This is the dashboard
      </div>
               
               
        )};
        }
        
export default Dashboard;