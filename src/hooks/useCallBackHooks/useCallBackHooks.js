import React, { useCallback, useState } from 'react'
import Count from './Count'
import Button from './IncrementButton'
import Title from './Title'



function UseCallBackHooks() {
    let [age, setAge] = useState(0)
    let [salary, setSalary] = useState(1000)

    let incrementAge = useCallback(() => {
        setAge(age + 1)
    },[age]) 
    let incrementSalary = useCallback(() => {
        setSalary(salary + 1000)
    },[salary]) 



    return (
        <div>
            <Title />
            <Count text={'age'} count={age} />
            <Button value='increment age' increment={incrementAge} />
            <Count text='salary' count={salary} />
            <Button value='increment salary' increment={incrementSalary} />

        </div>
    )
}

export default UseCallBackHooks
