import React, { Component } from 'react'
import FRChild from './FRChild'
export class FRParent extends Component {
    constructor(props) {
        super(props)
        this.FRref=React.createRef()
    }
    focused=()=>{
        this.FRref.current.focus();
        alert(this.FRref.current.value)
    }

    render() {
        return (
            <div>
                <FRChild ref={this.FRref}/>
                <button onClick={this.focused} >click me</button>
            </div>
        )
    }
}

export default FRParent
