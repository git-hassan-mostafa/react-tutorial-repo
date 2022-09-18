import React, { Component } from 'react'

class regularComponents extends Component {
  render() {
    console.log('regular')
    return (
      <div>
        {this.props.name}
      </div>
    )
  }
}

export default regularComponents
