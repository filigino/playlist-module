import {combineReducers, createStore} from 'redux'
import playlist from './reducers/playlist'

const store = createStore(
    combineReducers({
        playlist
    })
)

export default store
