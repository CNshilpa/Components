import React, { Component } from 'react'
import UpdatingLifeCycleB from './UpdatingLifeCycleB'

export class UpdatingLifeCycleA extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           name : 'Shilpa'
        }
        console.log("UpdatingLifeCycleA constructor")
      }
      static getDerivedStaticFromProps(props,state)
      {
          console.log("UpdatingLifeCycleA getDerivedStaticFromProps")
          return null
      }
      shouldComponentUpdate(){
        console.log("UpdatingLifeCycleA shouldComponentUpdate")
        return true
      }
      getSnapshotBeforeUpdate(){
        console.log("UpdatingLifeCycleA  getSnapshotBeforeUpdate")
        return null
      }
      componentDidMount(){
        console.log("UpdatingLifeCycleA componentDidMount")
    }
    changeState = ()=>
    this.setState({
        name : "xyz"
    })
    render() {
       
         console.log("UpdatingLifeCycleA render") 
        return(
          <div>
        <div>MountLifeCycleA</div>
       <button onClick={this.changeState}>Change State</button>
       <UpdatingLifeCycleB/>
        </div>
        )
    }
  }

export default UpdatingLifeCycleA