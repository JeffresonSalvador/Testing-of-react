import React from 'react'

function Title() {
    console.log('rendering title')
    return (
        <h2>
            UseCallback HOOK
        </h2>
    )
}

export default React.memo(Title)
