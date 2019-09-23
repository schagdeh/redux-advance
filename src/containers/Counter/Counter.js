import React, { Component } from 'react'
import CounterOutput from '../../components/CounterOutput'
import CounterControl from '../../components/CounterControl'

class Counter extends Component {
  render () {
    return (
      <div>
        <CounterOutput />
        <CounterControl label='Increment' />
        <CounterControl label='Decrement' />
        <CounterControl label='Add 10' />
        <CounterControl label='Subtract 10' />
      </div>
    )
  }
}

export default Counter