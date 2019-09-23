import React, { Component } from 'react'
import CounterOutput from '../../components/CounterOutput'
import CounterControl from '../../components/CounterControl'
import { connect } from 'react-redux'

class Counter extends Component {
  render () {
    return (
      <div>
        <CounterOutput count={this.props.counter}/>
        <CounterControl label='Increment' />
        <CounterControl label='Decrement' />
        <CounterControl label='Add 10' />
        <CounterControl label='Subtract 10' />
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    counter: state.counter
  }
}

export default connect(mapStateToProps)(Counter)