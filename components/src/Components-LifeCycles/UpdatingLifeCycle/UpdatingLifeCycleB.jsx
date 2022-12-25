import React, { Component } from 'react'

export class UpdatingLifeCycleB extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           name : 'Shilpa'
        }
        console.log("UpdatingLifeCycleB constructor")
      }
      static getDerivedStaticFromProps(props,state)
      {
          console.log("UpdatingLifeCycleB getDerivedStaticFromProps")
          return null
      }
      componentDidMount(){
          console.log("UpdatingLifeCycleB componentDidMount")
      }
    render() {
       
         console.log("UpdatingLifeCycleB render") 
        return<div>UpdatingLifeCycleB</div>
      
    }
  }

export default UpdatingLifeCycleB