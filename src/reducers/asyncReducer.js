import { ASYNC_ATCION } from '../actions/actionTypes'

const asyncReducer = (state = {isLoaded: false}, action) => {
  switch(action.type) {
    case ASYNC_ATCION: {
      return {...state, isLoaded: true}
    }
    default: {
      return state
    }
  }
}

export default asyncReducer