import React from 'react'
import Score from './Score'
import Tracker from './Tracker'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
    this.setState({
      input: value
    })
  }

  handleClick = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  handleLogout = () => {
    this.setState({
      isLoggedIn: false
    })
  }

  render() {
    return (
      <div style={{ padding: '10px', border: '2px solid black' }}>
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
