import React, { useState, useEffect } from 'react'

function UseEffect() {
    const [count, setCount] = useState(0)
    useEffect(() => {
        document.title = `you clicked ${count}`
    })
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>{count}</button>
        </div>
    )
}

export default UseEffect
