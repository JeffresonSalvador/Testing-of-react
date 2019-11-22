import React, { Component } from 'react'
import LifeCycleB from './LifecycleB'

class LifecycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'jeff'
        }
        console.log('LifecycleA constructor')
    }
    
    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleA getDeriveStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('LifeCycleA did mount')
    }

    shouldComponentUpdate(){
        console.log('LifecycleA shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('LifeCycleA getsnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(){
        console.log('LifeCycleA componentDidUpdate')
    }

    changeState = event => {
        this.setState({
            name: 'codeEvolution'
        })
    }

    render() {
        console.log('lifeCycleA render')
        return (
            <div>
                <div>LifeCycle A</div>
                <button onClick={this.changeState}>Change State</button>
            <LifeCycleB/>
            </div>
        )
    }
}

export default LifecycleA
