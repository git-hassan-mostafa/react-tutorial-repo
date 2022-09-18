import React, { Component } from 'react'

export class condtionRen extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isNew: true
        }
    }
    converse() {
        this.setState({
            isNew: !this.state.isNew
        })
    }
    render() {
        // if else rendering 
        // if(this.state.isNew){
        //     return <div>hello dear </div>
        // }
        // else {
        //     return <div>hello again </div>
        // }

        // variables rendering 
        // let isnew 
        // if( this.state.isNew) isnew=<div>hello</div>
        // else isnew=<div>hello again</div>
        // return <div>
        //     {isnew}
        //     <button onClick={this.converse.bind(this)}>click</button>
        //     </div>

        // operator condition 
        // return this.state.isNew ?
        // (
        //     <div>hello</div>
        // )
        // :(
        //     <div>hello again</div>
        // )

        // shor circuit operator 
        return this.state.isNew && <div>hello hassan</div>
        // return (
        //   <div>
        //     hello world
        //   </div>
        // )
    }
}

export default condtionRen
