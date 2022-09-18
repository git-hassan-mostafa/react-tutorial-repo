import React, { Component } from 'react'

export class refs extends Component {
    constructor(props) {
        super(props)
        this.inpRef = React.createRef()
        this.cbRef=null;
        this.setCbRef=e=>{
            this.cbRef=e
        }
    }
    componentDidMount = () => {
        // this.inpRef.current.focus()
        if(this.cbRef) this.cbRef.focus()
    }
    alertValue=()=>{
        alert(this.inpRef.current.value)
    }

    render() {
        return (
            <div>
                <input type='text' ref={this.inpRef} />
                <input type='text' ref={this.setCbRef} />
                
                <button onClick={this.alertValue}>click</button>
            </div>
        )
    }
}

export default refs

