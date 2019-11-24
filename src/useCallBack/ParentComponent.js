import React,{useState, useCallback} from 'react'
import Title from './Title'
import Button from './Button'
import Count from './Count'

function ParentComponent() {
    const [age,setAge] = useState(25)
    const [salary,setSalary] = useState(50000)

    const incrementAge = useCallback(() => {
        setAge( prev => prev + 1)
    }, [age]) 

    const incrementSalary = useCallback(() => {
        setSalary( prev => prev + 1000)
    }, [salary]) 

    return (
        <div>
            <Title/>
            <Count text="Age" count={age}/>
            <Button handleClick={incrementAge}> Increment Age </Button>
            <Count text="salary" count={salary}/>
            <Button handleClick={incrementSalary}> Increment Salary</Button>

        </div>
    )
}

export default ParentComponent
