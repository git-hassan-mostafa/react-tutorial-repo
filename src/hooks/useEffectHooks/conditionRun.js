import React, { useState, useEffect } from 'react'

function ConditionRun() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')
    useEffect(() => {
        console.log(count)
        document.title = `you clicked ${count}`
    },[count])
    return (
        <div>
            <input type={'text'} value={name} onChange={e=>setName(e.target.value)} />
            <button onClick={()=>setCount(count + 1)}>{count}</button>
        </div>
    )
}

export default ConditionRun
