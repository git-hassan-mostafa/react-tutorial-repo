import React, { Component } from 'react'

export class forms extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            comment: '',
            option: 'angular'

        }
    }
    inputChange = (e) => {
        this.setState({
            email: e.target.value
        })
    }
    commentChange = (e) => {
        this.setState({
            comment: e.target.value
        })
    }
    optionChange = (e) => {
        this.setState({
            option: e.target.value
        })
    }
    submitInfo = (e) => {
        e.preventDefault();
        alert(`${this.state.email} ${this.state.comment}
         ${this.state.option}`)
    }

    


    render() {
        const {email,comment,option}=this.state
        return (
            <form onSubmit={this.submitInfo}>
                {/* input handling  */}
                <div>
                    <label>email</label>
                    <br />
                    <input value={email} onChange={this.inputChange} />
                </div>
                <br />

                {/* textarea handling  */}
                <div>
                    <label>comments</label>
                    <br />
                    <textarea value={comment} onChange={this.commentChange} />
                </div>

                {/* select input handling  */}
                <div>
                    <label>choose one</label>
                    <br />
                    <select value={option} onChange={this.optionChange}>
                        <option>react</option>
                        <option>angular</option>
                        <option>vue</option>
                    </select>
                </div>
                <br />
                <button type='submit' >click me</button>


            </form>
        )
    }
}

export default forms
