import React,{useEffect,useState} from 'react'

function UseEffectOnce() {
    const [x,setX]=useState(0)
    const [y,setY]=useState(0)
    const windowMouseClient=e=>{
        console.log('window move')
            setX(e.clientX)
            setY(e.clientY)
    }
    useEffect(()=>{
        console.log('mouse is moving')
        window.addEventListener('mousemove',windowMouseClient)
        return ()=>{
            console.log('event is unmounted')
            window.removeEventListener('mousemove',windowMouseClient)
        }
    },[])

    
    return (
        <div>
            Hooks X:{x},Y:{y}
        </div>
    )
}

export default UseEffectOnce
