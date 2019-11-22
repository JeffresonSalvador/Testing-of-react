import React, { Component } from 'react'

class PureRegComp extends Component {
    render() {
        console.log('*******Reg Comp Render****')
        return (
            <div>
                Regular Component {this.props.name}
            </div>
        )
    }
}

export default PureRegComp
