import React, { Component } from 'react'
// event handler in class 
export class classEvent extends Component {
    clicked() {
        console.log('clicked class')
    }
    render() {

        return (
            <div>
                <button onClick={this.clicked}>click me class</button>
            </div>
        )
    }
}

export default classEvent
