import React, { Component } from 'react'

export default class Child1 extends Component {
    
minBeli = 1
  render() {
    return (
        <div>
        <h2>Child Component</h2>
        <p>Stock : {this.props.stock}</p>
        <button 
          onClick={() => this.props.fungsi(this.minBeli)} 
          disabled={this.props.disabled}>
            {this.props.btn}
        </button>
      </div>
    )
  }
}
