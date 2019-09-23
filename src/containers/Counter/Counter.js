import React, { Component } from 'react'
import CounterOutput from '../../components/CounterOutput'
import CounterControl from '../../components/CounterControl'
import { connect } from 'react-redux'

class Counter extends Component {
  render () {
    return (
      <div>
        <CounterOutput count={this.props.counter}/>
        <CounterControl label='Increment' clicked={this.props.onIncrement} />
        <CounterControl label='Decrement' clicked={this.props.onDecrement} />
        <CounterControl label='Add 10' clicked={this.props.onAdd} />
        <CounterControl label='Subtract 20' clicked={this.props.onSubtract} />
        <button onClick={() => this.props.onStoreResult(this.props.counter)}>Store Results</button>
        {this.props.storeResult.map(result => (
          <li>{result}</li>
          )
        )}
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    counter: state.counter,
    storeResult: state.results
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onIncrement: () => dispatch({type: 'INCREMENT', val: 1}),
    onDecrement: () => dispatch({type: 'DECREMENT', val: 1}),
    onAdd: () => dispatch({type: 'ADD', val: 10}),
    onSubtract: () => dispatch({type: 'SUBTRACT', val: 20}),
    onStoreResult: (result) => dispatch({type: 'STORE_RESULTS', result: result})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)