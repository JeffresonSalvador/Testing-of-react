import React from 'react'

// function ForwardingRefs() {
//     return (
//         <div>
//             <input type='text'/>
//         </div>
//     )
// }

// focus  para sa functional component

const ForwardingRefs = React.forwardRef((props, ref) => {
    return(
        <div>
            <input type='text' ref={ref}/>
        </div>
    )
})

export default ForwardingRefs
