import React, { Component } from 'react'

export default class Child2 extends Component {
    
  render() {
    return (
      <div>
        <h2>Child 2</h2>
        <p>{this.props.stock}</p>
        </div>
    )
  }
}
