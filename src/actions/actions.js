import * as actionTypes from './actionTypes' 

export const increment = () => ({
  type: actionTypes.INCREMENT
})

export const decrement = () => ({
  type: actionTypes.DECREMENT
})

export const reset = () => ({
  type: actionTypes.RESET
})