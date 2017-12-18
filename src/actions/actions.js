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

export const getUserInfo = () => {
  return {
    types: [actionTypes.GET_USER_INFO_REQUEST, actionTypes.GET_USER_INFO_SUCCESS, actionTypes.GET_USER_INFO_FAIL],
    promise: client => client.get(`http://localhost:8080/api/user.json`)
  }
}

export const changeTitle = (title) => {
  return {
    type: actionTypes.CHANGE_TITLE,
    title: title
  }
}