import React, { Component } from 'react';

class Counter extends Component {

    state  = {
        counter: 0
    }

    state_test = {
        test: 1001
    }

    constructor(props)
    {
        super(props);
        this.handleDecrease = this.handleDecrease.bind(this);
        this.handleIncrease = this.handleIncrease.bind(this);
    }

    handleIncrease(){
        this.setState(state => ({
            counter: state.counter + 1
          }));
        this.setState(state => ({
            counter: state.counter + 1,
        }));
    }

    handleDecrease(){
        this.setState({
            counter: this.state.counter -1
         })
    }

  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.handleIncrease}>+1</button>
        <button onClick={this.handleDecrease}>-1</button>
      </div>
    );
  }
}

export default Counter;