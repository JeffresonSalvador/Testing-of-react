import React, { Component } from 'react'

class LifeCycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'jeff'
        }
        console.log('LifeCycleB constructor')
    }
    
    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleB getDeriveStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('LifeCycleB did mount')
    }

    
    shouldComponentUpdate(){
        console.log('LifeCycleB shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('LifeCycleB getsnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(){
        console.log('LifeCycleB componentDidUpdate')
    }



    render() {
        console.log('lifeCycleB render')
        return (
            <div>
                LifeCycle B
            </div>
        )
    }
}

export default LifeCycleB
