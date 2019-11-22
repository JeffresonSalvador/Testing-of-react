import React, { Component } from 'react'
import ImplementingRefs from './ImplementingRefs'

class ImplementingFocusInput extends Component {
    constructor(props) {
        super(props)
    
       this.componentRef = React.createRef()
    }
    clickHandler = () => {
        this.componentRef.current.focusInput()
    }

    render() {
        return (
            <div>
                <ImplementingRefs ref={this.componentRef}/>
                <button onClick={this.clickHandler}>Focus Input</button>
            </div>
        )
    }
}
//Refs cannot implement in Functional Component

export default ImplementingFocusInput
