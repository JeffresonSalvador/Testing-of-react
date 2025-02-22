import React ,{useState, useEffect} from 'react'

function HookMouse() {

    const [ x, setX] = useState(0)
    const [ y, setY] = useState(0)

    const logMousePosition = e => {
        console.log('Mouse Event')
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(()=>{
        console.log('useEffect Called')
        window.addEventListener('mousemove', logMousePosition)

        //unmounting or removing the subscription or the eventlisteners in the code 
        return () =>{
            console.log('component unmount')
            window.removeEventListener('mousemove',logMousePosition)
        }
        
    },[])

    return (
        <div>
            Hooks X - {x} Y- {y}

        </div>
    )
}

export default HookMouse
