import React, { Component } from 'react';
import Axios from "axios";
//import Select from 'react-select';

class Search extends Component {

constructor(props) {
super(props);
this.state = {
query: null,
checklist_name: "",
checklistdata: [],
check: []
}
}

handleClick(a,b){
    console.log("fuyfyg")
    //  this.setState({
    //      check : check.push(event)
    //  })
    localStorage.setItem('checklist_id',a);
    localStorage.setItem('category',b);
}

componentDidMount() {
this.searchName(this.state.query);
}

async searchName (query){

await Axios.get(`https://d60cf602.ngrok.io/searchdata`,{
    body:{},
    params:{
        email:'parvathi.g@nineleaps.com'
    }
})
.then(async data => {
    if(query === null){
        query=""
    }

    
console.log(data.data)
let checklistdata = await data.data.searchdata.map(i =>{
    if(i.checklist_name.toLowerCase().includes(query.toLowerCase())){
        return (
        
            <ul key={i.checklist_id} category={i.category}>
            <li>{i.checklist_name}</li>
           {/* <button className="deco"  value = {i.checklist_name} onClick={(event) => this.handleClick(event.target.value)}> <li>{i.checklist_name}</li></button> */}
            </ul>
          )
    }
    else{
        return null
    } 
   
})
this.setState({checklistdata:checklistdata})
// localStorage.setItem('checklistName',checklistdata );
// console.log("status",this.state.checklistdata)
})
} 



onChange(e) {
this.setState({ query: e.target.value }, () => {
if (this.state.query && this.state.query.length > 1) {
if (this.state.query.length % 2 === 0) {
this.searchName(this.state.query);
}
} else {
this.searchName(this.state.query);
}
})
}


render() {
return (
    <div>
<form>
<input class="mainLoginInput" 
type="text" 
placeholder="&#61442;"
onChange={this.onChange.bind(this)}
/>

 </form>  
 
 {this.state.checklistdata.map(i=>{
    if(i !== null){
        console.log(i)
        return(<button className="deco" value={i.props.children.props.children} onClick={() => this.handleClick(i.key, i.props.category)}><li>{i.props.children.props.children}</li>
</button>)}
    })}


 </div>

)

}

}

export default Search;

