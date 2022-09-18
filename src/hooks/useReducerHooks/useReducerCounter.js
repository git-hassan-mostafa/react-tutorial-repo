import React, { useReducer } from 'react'

function useReducerCounter() {
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
    const [count, setCount] = useReducer(reducer, initialState)
    return (
        <div>
            count : {count} <br />
            <button onClick={() => setCount('increment')}>increment</button>
            <button onClick={() => setCount('decrement')}>decrement</button>
            <button onClick={() => setCount('reset')}>reset</button>
        </div>
    )
}

export default useReducerCounter
