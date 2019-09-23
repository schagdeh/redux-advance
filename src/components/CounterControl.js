import React, { Component } from 'react'

class CounterControl extends Component {
  render () {
    return (
      <div style={{width: '150px', padding: 20, margin: 16, border: '1px solid black', textAlign: 'center', cursor: 'pointer', display: 'inline-block'}} onClick={this.props.clicked}>
        {this.props.label}
      </div>
    )
  }
}

export default CounterControl