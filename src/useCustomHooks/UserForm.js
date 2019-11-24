import React ,{useState} from 'react'
import UserInput from './UserInput'

function UserForm() {
    
    const[firstname, bindFirstName, resetFirstname] = UserInput('')
    const[lastname, bindLastName, resetLastname] = UserInput('')
    
    const submitHandler = (e) =>{
        e.preventDefault()
        alert(`Hello ${firstname} ${lastname}`)
        resetFirstname()
        resetLastname()
    }

    
    

    return (
        <div>
            <form >
                <div>
                    <label> Firstname</label>
                    <input 
                    
                    type="text"
                    
                    {...bindFirstName} />
                </div>
                
                <div>
                     <label> Lastname</label>
                    <input 
                    type="text"
                    
                    {...bindLastName}
                    />
                </div>
               
               <button type="submit" onClick={submitHandler}  > submit </button>
            </form>
        </div>
    )
}

export default UserForm
