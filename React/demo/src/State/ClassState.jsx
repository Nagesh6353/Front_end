import React, { Component } from 'react'
import ImageData from './ImageData';

export default class 
 extends Component {
    constructor(){
        super();
        this.state = {
            name : "Gaurav Kumavat",
            count : 0,
            Isimage : true
        }
    }
  render() {
    return (
      <div>
        <h1>Name: {this.state.name}</h1>
        <button onClick={()=> this.setState({name:"Nagesh Kumavat"})}>Change Name</button> <hr />

        <h1>Count: {this.state.count}</h1>
        <button onClick={()=> this.setState({count : this.state.count + 1})}>Increment</button>
        <button onClick={()=> this.setState({count : this.state.count - 1})}>Decrement</button>
        <button onClick={()=> this.setState({count : 0})}>Zero</button>
        <hr />

        {(this.state.Isimage)? <ImageData /> : false }
        <button onClick={()=> this.setState({Isimage: false})}>Hide</button>
        <button onClick={()=> this.setState({Isimage: true})}>Show</button>
        <button onClick={()=> this.setState({Isimage: !this.state.Isimage})}>Toggle</button>
        
      </div>
      
    )
  }
}
