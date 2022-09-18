import React, { Component } from 'react'

export class refChild extends Component {
    constructor(props) {
        super(props)
        this.childRef=React.createRef()
    }
    focusInp=()=>{
        this.childRef.current.focus()
    }

    render() {
        return (
            <>
                <input ref={this.childRef} />
            </>
        )
    }
}

export default refChild
