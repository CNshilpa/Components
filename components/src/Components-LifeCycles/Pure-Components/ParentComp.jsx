import React, { Component } from 'react'
import PureComp from './PureComp'
import RegComp from './RegComp'

export class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name : 'Shilpa'
      }
    }
    componentDidMount(){
        setInterval(() => {
            this.setState({
                name : 'Shilpa'
            })
        }, 2000)
    }
  render() {
    return (
      <div>
        ParentComp
        <RegComp>{this.state.name}</RegComp>
        <PureComp>{this.state.name}</PureComp>
        </div>
    )
  }
}

export default ParentComp