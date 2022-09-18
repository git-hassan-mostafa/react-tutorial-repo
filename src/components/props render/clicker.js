import React, { Component } from 'react'

export class clicker extends Component {
    render() {
        const { count, increment } = this.props
        return (
            <button onClick={increment}>
                clicker counter {count}
            </button>
        )
    }
}

export default clicker
