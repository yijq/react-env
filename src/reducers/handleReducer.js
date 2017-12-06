import { INCREMENT, DECREMENT } from '../actions/actionTypes'

const handle = ( action, state = {count: 0} ) => {
  switch(action.type) {
    case INCREMENT:{
      return {...state,count: ++state.count}
    }
    case DECREMENT:{
      return {...state,count: --state.count}
    }
    default: {
      return state
    }
  }
}

export default handle