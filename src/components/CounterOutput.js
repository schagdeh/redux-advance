import React, { Component } from 'react'

class CounterOutput extends Component {
  render () {
    return (
      <div style={{height: '50px', background: 'orange', margin: 'auto', padding: '20px'}}>
        Counter output: {this.props.count}
      </div>
    )
  }
}

export default CounterOutput