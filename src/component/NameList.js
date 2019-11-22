import React from 'react'
import  NamePerson  from  './NamePerson'
function NameList() {
    const names = ['bruce','clark','diana','bruce']
    const persons = [
        {
        id: 1,
        name : 'bruce',
        skill: 'react',
       },
       {
        id: 2,
        name : 'clark',
        skill: 'angular',
        },
        {
            id: 3,
            name : 'diana',
            skill: 'vue',
        },
       ]

    const nameList = names.map((name,index) => <h2 key={index}> {index} {name}</h2> )
    return (
    <div>{nameList}</div>
    )
   
    
}

export default NameList
