import React, { Component } from 'react'
import PureC from './pureComponent'
import Regc from './regularComponents'
import MemoC from './memoComponent'
class pureParent extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           message:'hassan'
        }
      }
      componentDidMount(){
        let i=0;
          setInterval(()=>{
            i++;
            this.setState({
                message:`hassan`
            })
          },2000)
      }
      
  render() {
    console.log('parent')
    return (
      <div>
        pure component
        <PureC name={this.state.message} sr={'hello'} />
        regular component
        <Regc name={this.state.message} />
        memo component 
        <MemoC name={this.state.message} />
      </div>
    )
  }
}

export default pureParent
