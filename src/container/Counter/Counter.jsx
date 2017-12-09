import React from 'react'
// import Counter from '../../components/Counter/Counter.jsx'
import { connect } from 'react-redux'
import { decrement, increment, reset, async_action } from '../../actions/actions'

const Counter = ({ onDcrement, onIncrement, value, onReset, onAsync }) => (
	<div>
		<button onClick={onDcrement}> - </button>
		<div>{value}</div>
		<button onClick={onIncrement}> + </button><br />
		<button onClick={onReset}>reset</button><br />
    <button onClick={onAsync}>async_action</button>
	</div>
)

const mapState = ( state, ownProps ) => {
  return {
    value: state.handle.count
  }
}

const mapDispatch = ( dispatch, ownProps ) => {
  return {
    onDcrement: () => {dispatch(decrement())},
    onIncrement: () => {dispatch(increment())},
    onReset: () => {dispatch(reset())},
    onAsync: () => {dispatch(async_action())}
  }
}

export default connect( mapState, mapDispatch )(Counter)