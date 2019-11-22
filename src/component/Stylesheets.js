import React from 'react'
import '../StyleMy.css'

function Stylesheets(props) {
    let className = props.primary ? 'primary' : ''
    return (
        <div>
            <h1 className = {`${className} font-x1`} >stylesheet</h1>
        </div>
    )
}

export default Stylesheets
