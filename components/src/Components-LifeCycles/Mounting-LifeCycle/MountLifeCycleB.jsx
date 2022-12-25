import React, { Component } from 'react'

export class MountLifeCycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name : 'Shilpa'
      }
      console.log("MountLifeCycleB constructor")
    }
    static getDerivedStaticFromProps(props,state)
    {
        console.log("MountLifeCycleB getDerivedStaticFromProps")
        return null
    }
    componentDidMount(){
        console.log("MountLifeCycleB componentDidMount")
    }
  render() {
     
       console.log("MountLifeCycleB render") 
      return<div>MountLifeCycleB</div>
    
  }
}

export default MountLifeCycleB