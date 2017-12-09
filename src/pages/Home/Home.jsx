import React from 'react'
import Counter from '../../container/Counter/Counter.jsx'
import style from './home.css'

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
        <h2 className={style.home}>Home123231</h2>
        <div>当前计数{this.state.count}</div>
        <div>
            <button onClick={this._handleClick}>increment</button>
        </div>
        <Counter />
      </div>
    )
  }
}

export default Home