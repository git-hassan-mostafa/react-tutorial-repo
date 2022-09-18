import React, { Component } from 'react'

class eventbinding extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:'hello'
      }
    //   binding in constructor 
    //   this.clicked=this.clicked.bind(this)
    }

    // binding by an arrow function 
    clicked =() => {
        this.setState({
            message:'goodbye'
        })
    }
    
    render() {
        return (
            <div>
                <h2> {this.state.message} </h2>
                {/* first approach event handler binding with bind method  */}
                {/* <button onClick={this.clicked.bind(this)}>click me</button> */}

                {/* second approach with arrow function  */}
                {/* <button onClick={()=>this.clicked()}>click me</button> */}

                {/* third approach with binding in constructor  */}
                {/* <button onClick={this.clicked}>click me</button> */}

                {/* binding by an arrow function  */}
                <button onClick={this.clicked}>click me</button>


            </div>
        )
    }
}

export default eventbinding
