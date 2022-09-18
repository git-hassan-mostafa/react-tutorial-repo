import React, { Component } from 'react'
import { UserConsumer } from './userContext'

class userC extends Component {
  render() {
    return (
      <UserConsumer>
        {
            name=> <h1>  hello {name} </h1>
        }
      </UserConsumer>
    )
  }
}

export default userC
