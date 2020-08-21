import React from 'react';
import {connect} from 'react-redux'
import {sendToTop, bumpUp, bumpDown, removeSong} from '../redux/ActionCreators'

// presentational component
const Playlist = ({playlist, onSendToTopClick, onBumpUpClick, onBumpDownClick, onRemoveClick}) => (
    <ol>
        {playlist.map((song) =>
            <Song
                // todo - id, text, completed (don't need id)
                // text={todo.text}
                {...song}
                key={song.id}
                onSendToTopClick={() => onSendToTopClick(song.id)}
                onBumpUpClick={() => onBumpUpClick(song.id)}
                onBumpDownClick={() => onBumpDownClick(song.id)}
                onRemoveClick={() => onRemoveClick(song.id)}
            />
        )}
    </ol>
)

// presentational component
const Song = ({text, id, onSendToTopClick, onBumpUpClick, onBumpDownClick, onRemoveClick}) => (
    <li>
        {id} {text}
        <button onClick={onSendToTopClick}>
            Send to Top
        </button>
        <button onClick={onBumpUpClick}>
            Bump Up
        </button>
        <button onClick={onBumpDownClick}>
            Bump Down
        </button>
        <button onClick={onRemoveClick}>
            Remove Media
        </button>
    </li>
)

// state is from store
const mapStateToProps = (state) => {
    return {
        playlist: state.playlist
    }
}

// dispatch is from store
const mapDispatchToProps = (dispatch) => {
    return {
        onSendToTopClick: (id) => {
            dispatch(sendToTop(id))
        },
        onBumpUpClick: (id) => {
            dispatch(bumpUp(id))
        },
        onBumpDownClick: (id) => {
            dispatch(bumpDown(id))
        },
        onRemoveClick: (id) => {
            dispatch(removeSong(id))
        }
    }
}

// generates container component, including subscribing to store
const VisiblePlaylist = connect(
    mapStateToProps,
    mapDispatchToProps
)(Playlist)
// ^2nd function call is presentational component to be connected to store

export default VisiblePlaylist
