import React, { Component } from 'react'
import RefsChild from './refChild'
export class refsParent extends Component {
    constructor(props) {
        super(props)
        this.refsParent=React.createRef()
    }
    focused=()=>{
        this.refsParent.current.focusInp()
    }

    render() {
        return (
            <div>
               <RefsChild ref={this.refsParent} />
               <button onClick={this.focused}>click </button> 
            </div>
        )
    }
}

export default refsParent
