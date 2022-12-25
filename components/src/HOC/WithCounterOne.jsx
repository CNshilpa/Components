import React, { Component } from 'react'
import WithCounter from './WithCounter'


export class WithCounterOne extends Component {
    
  render() {
    const {count, incrementCount} = this.props
         return (
       <button onClick={incrementCount}>HOvered {count} times</button>
         )
  }
}

export default WithCounter(WithCounterOne)