import { increment, decrement, reset } from '../actions/actions'
import store from './store'

const unsubscribe = store.subscribe(()=>{
    console.log(store.getState())
})

store.dispatch(increment())
store.dispatch(decrement())
store.dispatch(reset())

unsubscribe()