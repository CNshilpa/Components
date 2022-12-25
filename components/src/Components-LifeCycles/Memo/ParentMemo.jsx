import React, { Component } from 'react'
import MemoDemo from './MemoDemo'

export class ParentMemo extends Component {
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
          <MemoDemo name={this.state.name}/>
          </div>
    )
  }
}

export default ParentMemo