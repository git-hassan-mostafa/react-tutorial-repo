import React, { Component } from 'react'
import UserC from './userC'
import UserContext from './userContext'
export class userB extends Component {
  static contextType = UserContext

  render() {
    return (
      <div>
        <UserC />
        {/* hello {this.context} */}
        hello {this.context}
      </div>
    )
  }
}
// userB.contextType=UserContext

export default userB
