import React, { Component } from 'react'

export class errorBoundry extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isHero:false
      }
    }
    static getDriveStateFromError(error){
        return {
            isHero:true
        }
    }
    // componentDidCatch=(props,error)=>{
    //   return {
    //     isHero:true
    // }
      
    // }
    
  render() {
    if(this.state.isHero) return <h1>not a hero </h1>
    return (
        this.props.children
    )
  }
}

export default errorBoundry
