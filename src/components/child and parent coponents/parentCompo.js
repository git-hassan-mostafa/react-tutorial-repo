import React, { Component } from 'react'
import Childo from './childCompo'

// methods as props 
class parentCompo extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:'hello my visitors'
      }
      this.greeting=this.greeting.bind(this)
    }
    greeting(child){
        alert(`${this.state.message} from ${child}`)
    }
    
  render() {
    return (
      <div>
        <Childo greethandler={this.greeting} />
      </div>
    )
  }
}

export default parentCompo
