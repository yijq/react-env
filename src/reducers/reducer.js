import handle from './handleReducer'
import async from "./asyncReducer";
import { combineReducers } from 'redux'

export default combineReducers({handle,async})