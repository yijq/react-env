import { ASYNC_ATCION, 
  GET_USER_INFO_SUCCESS, 
  GET_USER_INFO_FAIL, 
  GET_USER_INFO_REQUEST 
} from '../actions/actionTypes'

const asyncReducer = (state = {isLoaded: false}, action) => {
  switch(action.type) {
    case ASYNC_ATCION: {
      return {...state, isLoaded: true}
    }
    case GET_USER_INFO_SUCCESS: {
      console.log(JSON.stringify({
        ...state,
        isLoaded: true,
        userInfo: action.result.data,
        errorMsg: ''
      }))
      return {
        ...state,
        isLoaded: true,
        userInfo: action.result.data,
        errorMsg: ''
      }
    }
    default: {
      return state
    }
  }
}

export default asyncReducer