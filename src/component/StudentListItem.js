import React from 'react'


function StudentListItem({student:{name,id} } ){


    return(
        <div>
            <li>
            { name } {id}
            </li>
        </div>
    )

}
export default StudentListItem;