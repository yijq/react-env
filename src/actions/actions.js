import * as actionTypes from './actionTypes' 
import { setTimeout } from 'core-js/library/web/timers';

export const increment = () => ({
  type: actionTypes.INCREMENT
})

export const decrement = () => ({
  type: actionTypes.DECREMENT
})

export const reset = () => ({
  type: actionTypes.RESET
})

export const async_action = () => (dispatch,getState) => {
  setTimeout(()=>{console.log('async_action=====>',getState());dispatch({
    type: actionTypes.ASYNC_ATCION
  })},2000)
}