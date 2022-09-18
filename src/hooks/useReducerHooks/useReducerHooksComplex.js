import React, { useReducer } from 'react'
const initialState = {
        firstState:0,
        secondState:10
    }
    const reducer = (state, action) => {
        switch (action.type) {
            case 'increment':
                return {...state,firstState : state.firstState + action.num}
            case 'decrement':
                return {...state,firstState : state.firstState - action.num}
            case 'increment2':
                return {...state,secondState : state.secondState + action.num}
            case 'decrement2':
                return {...state,secondState : state.secondState - action.num}
            case 'reset1':
                return {...state,firstState: initialState.firstState};
            case 'reset2':
                return {...state,secondState :initialState.secondState};
            default:
                return state;

        }
    }
function UseReducerHooksComplex() {
    
    const [count, setCount] = useReducer(reducer, initialState)
    return (
        <div>
            count 1 : {count.firstState} <br />
            count 2: {count.secondState} <br/>
            <button onClick={() => setCount({type:'increment' ,num:1})}>increment 1</button>
            <button onClick={() => setCount({type:'decrement', num:1})}>decrement 1</button>
            <br/>
            <button onClick={() => setCount({type:'increment2' ,num:5})}>increment 2</button>
            <button onClick={() => setCount({type:'decrement2', num:5})}>decrement 2</button>
            <br/>
            <button onClick={() => setCount({type:'reset1'})}>reset 1</button>
            <button onClick={() => setCount({type:'reset2'})}>reset 2</button>

        </div>
    )
}

export default UseReducerHooksComplex
