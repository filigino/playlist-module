import React from 'react';
import { connect } from 'react-redux'
import { addSong } from '../redux/ActionCreators'
import AddMediaButton from '../imgs/Add Media Button.svg'

// neither presentational nor container component
// not purely presentational bc of dispatch
let AddSong = ({dispatch}) => {
    let artist
    let title
    let duration
    return (
        <div className='row'>
            <div className='col add-media-headings'>
                Media Info
            </div>
            <div className='col add-media-placeholders'>
                <input ref={node => {artist = node}} placeholder={'Artist Name'} />
            </div>
            <div className='col add-media-placeholders'>
                <input ref={node => {title = node}} placeholder={'Song Name'} />
            </div>
            <div className='col add-media-placeholders'>
                <input ref={node => {duration = node}} placeholder={'Song Duration'} />
            </div>
            <div className='col add-media-headings'>
                Thumbnail
            </div>
            <div className='col add-media-placeholders'>
                <button onClick={() => {
                }}>
                    Choose File
                </button>
            </div>
            <div className='col add-media-placeholders'>
                No file chosen.
            </div>
            <div className='col'>
                <button onClick={() => {
                    // input validation
                    if (artist.value !== '' && title.value !== '' && duration.value !== '') {
                        dispatch(addSong(artist.value, title.value, duration.value))
                        artist.value = ''
                        title.value = ''
                        duration.value = ''
                    }
                }} className='button'
                >
                    <img src={AddMediaButton} alt='Add Media' />
                </button>
            </div>
        </div>
    )
}
// no args makes component that doesn't subscribe to store and that injects dispatch as prop
AddSong = connect()(AddSong)

export default AddSong
