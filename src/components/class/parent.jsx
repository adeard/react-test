import React, { Component } from 'react'
import Child1 from './child1'
import Child2 from './child2'


export default class Parent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            stock : 15,
            disabled : false,
            btn : "Beli"
        }
    }
    beliProduk = (jumlah) => {
        this.setState({
            stock: this.state.stock - jumlah
        })

        if (this.state.stock === 1) {
            this.setState({
                disabled : true,
                btn : "Habis"
            })
        }
    }
  render() {
    return (
      <div>
        <Child1 
            fungsi={this.beliProduk.bind(this)} 
            stock={this.state.stock}
            btn={this.state.btn}
            disabled={this.state.disabled}
            >

        </Child1>
        <Child2 stock={this.state.stock}>

        </Child2>
        </div>
    )
  }
}
