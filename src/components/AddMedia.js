import React from 'react';
import {connect} from 'react-redux'
import {addSong} from '../redux/ActionCreators'

// neither presentational nor container component
// not purely presentational bc of dispatch
let AddSong = ({dispatch}) => {
    let input
    return (
        <div>
            <input ref={node => {
                input = node
            }} />
            <button onClick={() => {
                dispatch(addSong(input.value))
                input.value = ''
            }}>
                ADD MEDIA
            </button>
        </div>
    )
}
// no args makes component that doesn't subscribe to store and that injects dispatch as prop
AddSong = connect()(AddSong)

export default AddSong
