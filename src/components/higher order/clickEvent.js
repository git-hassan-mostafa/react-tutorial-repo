import React, { Component } from 'react'
import withCounter from './withCounter'
class clickEvent extends Component {
  
  render() {
    const {increment}=this.props
    return (
      <div>
        click counter {this.props.count} {this.props.name}
        <button onClick={increment} >click me</button>
      </div>
      
    )
  }
}

export default withCounter(clickEvent,5)
