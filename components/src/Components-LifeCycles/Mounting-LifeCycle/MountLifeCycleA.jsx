import React, { Component } from 'react'
import MountLifeCycleB from './MountLifeCycleB'

export class MountLifeCycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name : 'Shilpa'
      }
      console.log("MountLifeCycleA constructor")
    }
    static getDerivedStaticFromProps(props,state)
    {
        console.log("MountLifeCycleA getDerivedStaticFromProps")
        return null
    }
    componentDidMount(){
        console.log("MountLifeCycleA componentDidMount")
    }
  render() {
     
       console.log("MountLifeCycleA render") 
      return(
        <div>
      <div>MountLifeCycleA</div>
      <MountLifeCycleB/>
      </div>
      )
  }
}

export default MountLifeCycleA