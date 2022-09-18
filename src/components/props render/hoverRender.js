import React, { Component } from 'react'

export class Hoverer extends Component {
    render() {
        const { count, increment } = this.props
        return (
            <div onMouseOver={increment}>
                hover counter {count}
            </div>
        )
    }
}

export default Hoverer