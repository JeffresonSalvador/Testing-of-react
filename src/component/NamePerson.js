import React from 'react'

function NamePerson({person}) {
    return (
        <div>
            <h2>I am {person.name}. I can {person.skill}</h2>
        </div>
    )
}

export default NamePerson
