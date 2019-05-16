import React from 'react'
import Score from './Score'
import Tracker from './Tracker'
import produce from 'immer'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [{ name: 'T' }, { name: 'L' }],
      input: 'input',
      input2: 'input2',
      counter: 0,
      isLoggedIn: true
    }
    // Second Approach
    // this.handleChange = this.handleChange.bind(this)
  }

  handleChange = (event) => {
    const value = event.target.value
    console.log(value)
    // this.state.input = value
    // Way 1: First Param is Object
    this.setState({
      input: value
    })
  }

  handleClick = () => {
    // // Way 1: First Param is Object
    // this.setState({
    //   counter: this.state.counter + 1
    // }, () => {
    //   console.log(this.state.counter)
    // })

    const newState = produce(this.state, (draft) => {
      draft.list[0].name = 'new name'
    })

    // this.setState({
    //   ...newState
    // })

    this.setState(() => newState)
  }

  handleLogout = () => {
    // this.setState({
    //   isLoggedIn: false
    // })
    console.log('Before')
    // Way 2: First Param is Function
    this.setState((state, props) => {
      console.log('inside')
      if (state.counter < 2) {
        return {
          ...state,
          isLoggedIn: false
        }
      } else {
        return state
      }
    }, () => {
      console.log(this.state.counter)
    })
    console.log('after')
  }

  render() {
    return (
      <div style={{
        padding: '10px',
        border: '2px solid black'
      }}>
        <pre>
          {JSON.stringify(this.state, null, 2)}
        </pre>
        Hello world Class {this.props.name}
        {this.state.isLoggedIn ? 'I am logged In' : 'I am logged out'}
        <input
          type="text"
          value={this.state.input}
          onChange={(e) => { this.handleChange(e, this.props.name) }}
        />
        <input type="text" value={this.state.input2} />
        <button
          onClick={this.handleClick}
        >
          Click me &nbsp;
          {this.state.counter}
        </button>
        <Score score={this.state.counter} />
        {this.state.isLoggedIn && <Tracker
          logoutCb={this.handleLogout}
          count={this.state.counter}
        />}
      </div>
    )
  }
}
