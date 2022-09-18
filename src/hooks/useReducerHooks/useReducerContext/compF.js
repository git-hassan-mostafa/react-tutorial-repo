import React,{useContext} from 'react'
import {Context} from './main'
function CompF() {
    const useContextReducer = useContext(Context)
    return (
        <div>
            {useContextReducer.contextCount}
            <button onClick={() => useContextReducer.contextSetCount('increment')}>increment</button>
            <button onClick={() => useContextReducer.contextSetCount('decrement')}>decrement</button>
            <button onClick={() => useContextReducer.contextSetCount('reset')}>reset</button>
        </div>
    )
}

export default CompF
