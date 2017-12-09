import React from 'react'

const Counter = ({ onDcrement, onIncrement, value, onReset }) => (
	<div>
		<button onClick={onDcrement}> - </button>
		<div>{value}</div>
		<button onClick={onIncrement}> + </button>
		<button onClick={onReset}></button>
	</div>
)

export default Counter