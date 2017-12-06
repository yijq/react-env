import React from 'react'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
    this._handleClick = this._handleClick.bind(this)
  }

  _handleClick() {
    this.setState((prevState)=>({
      count: ++prevState.count
    }))
  }

  render() {
    return (
      <div>
        <h2>Home</h2>
        <div>当前计数{this.state.count}</div>
        <div>
            <button onClick={this._handleClick}>increment</button>
        </div>
      </div>
    )
  }
}

export default Home