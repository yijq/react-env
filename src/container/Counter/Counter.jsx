import React from 'react'
// import Counter from '../../components/Counter/Counter.jsx'
import { connect } from 'react-redux'
import { decrement, increment, reset } from '../../actions/actions'

const Counter = ({ onDcrement, onIncrement, value, onReset }) => (
	<div>
		<button onClick={onDcrement}> - </button>
		<div>{value}</div>
		<button onClick={onIncrement}> + </button><br />
		<button onClick={onReset}>reset</button>
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
    onReset: () => {dispatch(reset())}
  }
}

export default connect( mapState, mapDispatch )(Counter)