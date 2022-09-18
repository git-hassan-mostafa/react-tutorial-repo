import React, {Component} from 'react'
class Greet extends Component{

    
    constructor(){
        super()
        this.state={
            counter : 0,
        }
    }
    increment(){
        // set state object

        // this.setState({
        //     counter :this.state.counter +1
        // },()=>(console.log(this.state.counter)));

        // set state function
        this.setState((prev)=>({
            counter:prev.counter +1
        }))
        console.log(this.state.counter+1)
    }

    // in the state function the counter takes the value of previous function
    // but in state object the state take the same value of all the functions
    incrementFive(){
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }
            

    render(){
        // distructurting in class 
        // const {name,club}=this.props
        return (

            <div>
                {/* <h1> {name},{club}</h1> */}
                <h3>the value is {this.state.counter}</h3>
                <button onClick={()=>this.incrementFive()}>click</button>
            </div>
        )    
}
}
export default Greet