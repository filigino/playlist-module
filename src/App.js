import React from 'react'
import {Provider} from 'react-redux'
import store from './redux/store'
import Landing from './components/Landing'
import './App.css'

const App = () => {
    return (
        <Provider store={store}>
            <Landing />
        </Provider>
    )
}

export default App
