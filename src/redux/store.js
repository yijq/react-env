import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from '../reducers/reducer'

import promiseMiddleware from './middleware/promiseMiddleware'

const store = createStore(reducer,applyMiddleware(thunk,promiseMiddleware))

export default store