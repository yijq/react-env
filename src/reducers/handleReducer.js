import { INCREMENT, DECREMENT, RESET } from '../actions/actionTypes'

const handle = ( state = {count: 0}, action ) => {
  switch(action.type) {
    case INCREMENT: {
      return { ...state, count: ++state.count }
    }
    case DECREMENT: {
      return { ...state, count: --state.count }
    }
    case RESET: {
      return { ...state, count: 0 }
    }
    default: {
      return state
    }
  }
}

export default handle