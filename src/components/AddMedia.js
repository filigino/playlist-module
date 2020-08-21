import React, { useState } from 'react';
import { connect } from 'react-redux'
import { addSong } from '../redux/ActionCreators'
import AddMediaButton from '../imgs/Add Media Button.svg'

// neither presentational nor container component
// not purely presentational bc of dispatch
let AddSong = ({dispatch}) => {
    const [file, setFile] = useState([])
    const handleChange = (event) => {
        // setFile(URL.createObjectURL(event.target.files[0]))
        file.push()
        setFile(event.target.files[0])
    }

    const validateArtist = (artist) => {
        artist = artist.trim()
        if (artist === '' || artist.length > 40) {
            return false
        }
        return true
    }

    const validateTitle = (title) => {
        title = title.trim()
        if (title === '' || title.length > 40) {
            return false
        }
        return true
    }

    const validateDuration = (duration) => {
        if (duration === '') {
            return false
        }

        if (!duration.includes(':')) {
            return false
        }

        let durationArr = duration.split(':')
        if (durationArr.length !== 2) {
            return false
        } else if (isNaN(Number(durationArr[0]))) {
            return false
        } else if (isNaN(Number(durationArr[1]))) {
            return false
        } else if (durationArr[0] < 0 || durationArr[0] > 59) {
            return false
        } else if (durationArr[1].length !== 2) {
            return false
        } else if (durationArr[1] < 0 || durationArr[1] > 59) {
            return false
        }

        return true
    }

    const trimLeadingZero = (duration) => {
        if (duration.charAt(0) === '0') {
            let durationArr = duration.split(':')
            durationArr[0] = durationArr[0] - 0
            return durationArr[0] + ':' + durationArr[1]
        } else {
            return duration
        }
    }

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
                <input type='file' onChange={handleChange} />
            </div>
            <div className='col'>
                <img src={file} style={{maxHeight: '42px', maxWidth: '75px'}}/>
            </div>
            <div className='col'>
                <button onClick={() => {
                    // input validation
                    if (validateArtist(artist.value) && validateTitle(title.value) && validateDuration(duration.value)) {
                        dispatch(addSong(artist.value, title.value, trimLeadingZero(duration.value)))
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
