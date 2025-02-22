import React, {useState} from 'react'

function HookCounterThree() {
    
    const [name,setName] = useState({
        firstname: '',
        lastname: '',
    })

    return (
        <form>
            <label>First Name:</label>

            <input 
            type="text" 
            value={name.firstname} 
            onChange={(e)=> setName({...name , firstname: e.target.value})}/>

            <label>Last Name:</label>

            <input 
            type="text"
            value={name.lastname} 
            onChange={(e)=> setName({...name, lastname: e.target.value})}
            />

            <h2>Your first name is : {name.firstname}</h2>
            <h2>Your last name is : {name.lastname}</h2>
            <h2>{JSON.stringify(name)}</h2>
        </form>
    )
}

export default HookCounterThree
