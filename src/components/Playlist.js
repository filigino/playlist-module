import React, { useState } from 'react';
import { connect } from 'react-redux'
import { Tooltip } from 'reactstrap'
import {
    sendToTop,
    bumpUp,
    sendDown,
    removeSong
} from '../redux/ActionCreators'
import SendToTopButton from '../imgs/Send to Top.svg'
import BumpUpButton from '../imgs/Bump Up.svg'
import SendDownButton from '../imgs/Send Down.svg'
import RemoveButton from '../imgs/Remove Icon.svg'

// presentational component
const Playlist = ({
    playlist, onSendToTopClick, onBumpUpClick, onSendDownClick, onRemoveClick
}) => {
    return (
        <ol className='numbers'>
            {playlist.map((song) =>
                <Song
                    {...song}
                    key={song.id}
                    onSendToTopClick={() => onSendToTopClick(song.id)}
                    onBumpUpClick={() => onBumpUpClick(song.id)}
                    onSendDownClick={() => onSendDownClick(song.id)}
                    onRemoveClick={() => onRemoveClick(song.id)}
                />
            )}
        </ol>
    )
}

// presentational component
const Song = ({
    artist, title, duration, id, onSendToTopClick, onBumpUpClick,
    onSendDownClick, onRemoveClick
}) => {
    const [sendToTopTooltipOpen, setSendToTopTooltipOpen] = useState(false)
    const [bumpUpTooltipOpen, setBumpUpTooltipOpen] = useState(false)
    const [sendDownTooltipOpen, setSendDownTooltipOpen] = useState(false)
    const [removeTooltipOpen, setRemoveTooltipOpen] = useState(false)

    const toggleSendToTopTooltip = () => setSendToTopTooltipOpen(!sendToTopTooltipOpen)
    const toggleBumpUpTooltip = () => setBumpUpTooltipOpen(!bumpUpTooltipOpen)
    const toggleSendDownTooltip = () => setSendDownTooltipOpen(!sendDownTooltipOpen)
    const toggleRemoveTooltip = () => setRemoveTooltipOpen(!removeTooltipOpen)

    return (
        <li>
            <div className='row'>
                <div className='col song-name'>
                    {artist} {title}
                </div>
                <div className='col numbers'>
                    {duration}
                </div>
                <div className='col'>
                    <button onClick={onSendToTopClick} id='sendToTop' className='button'>
                        <img src={SendToTopButton} alt='Send to Top' />
                    </button>
                    <Tooltip placement='bottom' isOpen={sendToTopTooltipOpen} target='sendToTop' toggle={toggleSendToTopTooltip}>
                        Send to Top
                    </Tooltip>
                    <button onClick={onBumpUpClick} id='bumpUp' className='button'>
                        <img src={BumpUpButton} alt='Bump Up' />
                    </button>
                    <Tooltip placement='bottom' isOpen={bumpUpTooltipOpen} target='bumpUp' toggle={toggleBumpUpTooltip}>
                        Bump Up
                    </Tooltip>
                    <button onClick={onSendDownClick} id='sendDown' className='button'>
                        <img src={SendDownButton} alt='Send Down' />
                    </button>
                    <Tooltip placement='bottom' isOpen={sendDownTooltipOpen} target='sendDown' toggle={toggleSendDownTooltip}>
                        Send Down
                    </Tooltip>
                    <button onClick={onRemoveClick} id='remove' className='button'>
                        <img src={RemoveButton} alt='Remove' />
                    </button>
                    <Tooltip placement='bottom' isOpen={removeTooltipOpen} target='remove' toggle={toggleRemoveTooltip}>
                        Remove Media
                    </Tooltip>
                </div>
            </div>
        </li>
    )
}

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
        onSendDownClick: (id) => {
            dispatch(sendDown(id))
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
