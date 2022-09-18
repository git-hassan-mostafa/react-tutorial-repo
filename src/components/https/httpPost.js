import React, { Component } from 'react'
import axios from 'axios'
export class httpPost extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userId: '',
      title: '',
      body: ''
    }
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: [e.target.value]
    })
  }
  submitHandler = (e) => {
    e.preventDefault()
    axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
    .then(req=>{console.log(req)})
    .then(error=>{console.log(error)})
  }

  render() {
    const { userId, title, body } = this.state
    return (
      <form onSubmit={this.submitHandler}>
        <input type={'text'} name={'userId'} value={userId} onChange={this.changeHandler} /><br />
        <input type={'text'} name={'title'} value={title} onChange={this.changeHandler} /><br />
        <input type={'text'} name={'body'} value={body} onChange={this.changeHandler} /><br />
        <button type='submit'>submit</button>
      </form>
    )
  }
}

export default httpPost
