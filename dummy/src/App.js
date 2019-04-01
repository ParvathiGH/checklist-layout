import React,{Component} from 'react'
import Routes from "./routes"



class App extends Component{
constructor(){
  super()
}
render(){
  return(
    <div>
      <Routes />
    </div>
  )
}

}


export default App

























// export default class App extends React.Component {
//   render () {
//     return (
//       <BrowserRouter>
//         <Route path='/' component={App} />
//       </BrowserRouter>
//     )
//   }
// }
// export default class ParentComponent extends React.Component {
//   render () {
//     return <ChildComponent />
//   }
// }
// export default class ChildComponent extends React.Component {
//   static contextTypes = {
//     router: PropTypes.object
//   }
//   redirectToTarget = () => {
//     this.context.router.history.push(`/Login/`)
//   }
//   render () {
//     return (
//        <div>
//         {this.renderRedirect()}
//         <button onClick={this.redirectToTarget}>Redirect</button>
//        </div>   
//     )
//   }
// }