import React, { useReducer } from 'react'

function MultipleReducer() {
    const initialState = 0
    const reducer = (state, action) => {
        switch (action) {
            case 'increment':
                return state + 1;
            case 'decrement':
                return state - 1;
            case 'reset':
                return initialState;
            default:
                return state;

        }
    }
    const [count1, setCount1] = useReducer(reducer, initialState)
    const [count2, setCount2] = useReducer(reducer, initialState)
    return (
        <div>
            count 1 : {count1} <br />
            <button onClick={() => setCount1('increment')}>increment</button>
            <button onClick={() => setCount1('decrement')}>decrement</button>
            <button onClick={() => setCount1('reset')}>reset</button><br/>
            count 2: {count2} <br/>
            <button onClick={() => setCount2('increment')}>increment</button>
            <button onClick={() => setCount2('decrement')}>decrement</button>
            <button onClick={() => setCount2('reset')}>reset</button>
        </div>
    )
}

export default MultipleReducer
