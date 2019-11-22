import React, { Component } from 'react'
import PureRegComp from './PureRegComp'
import PureComp from './PureComp'
import MemoComponent from './MemoComponent'

class PureParentComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'jeff'
        }
    }
    componentDidMount(){
        setInterval(()=> {
            this.setState({
                name:'jeff'
            })
        }, 2000)
    }

    render() {
        console.log('*********Parent Component render ********')
        return (
            <div>
                Parent Component
                <MemoComponent name={this.state.name}/>
                {/* <PureRegComp name={this.state.name}/>
                <PureComp name = {this.state.name}/> */}
            </div>
        )
    }
}

export default PureParentComponent
