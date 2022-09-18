import React, { Component } from 'react'
import withCounter from './withCounter'
class hoverEvent extends Component {
  render() {
    const {increment}=this.props
    return (
      <div onMouseOver={increment}>
        counter {this.props.count}
      </div>
      
    )
  }
}

export default withCounter(hoverEvent,10)