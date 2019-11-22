import React from 'react'

function MemoComponent({name}) {
    console.log('Recndering Components')
    return (
        <div>
            {name}
        </div>
    )
}

export default React.memo(MemoComponent)
