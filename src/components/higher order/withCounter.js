import React from 'react'
const withCounter=(WrappedComponents,incrementNum)=>{
    
    class WithCounter extends React.Component {
        constructor(props) {
          super(props)
        
          this.state = {
             count:0
          }
        }
        increment=()=>{
            this.setState(prev=>{
               return{
                count : prev.count +incrementNum
               } 
            })
        }
        

      render() {
        // console.log(this.props.name)
        return (
          <WrappedComponents
           count={this.state.count}
           increment={this.increment}
           {...this.props} />
        )
      }
    }
    
    
    return WithCounter
}
export default withCounter