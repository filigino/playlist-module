import React, { useState } from 'react';
import { connect } from 'react-redux'
import { addSong } from '../redux/ActionCreators'
import AddMediaButton from '../imgs/Add Media Button.svg'

// neither presentational nor container component
// not purely presentational bc of dispatch
let AddSong = ({dispatch}) => {
    const [file, setFile] = useState(null)
    const [inputKey, setInputKey] = useState(Date.now())
    const handleChange = (event) => {
        if (event.target.files[0]) {
            setFile(URL.createObjectURL(event.target.files[0]))
        } else {
            setFile(null)
        }
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
        <div className='container modal-container'>
            <div className='row'>
                <div className='col add-media-headings'>
                    Media Info
                </div>
                <div className='col add-media-placeholders'>
                    <input
                        ref={node => {artist = node}}
                        placeholder={'Artist Name'}
                        className='input-fields'
                    />
                </div>
                <div className='col add-media-placeholders'>
                    <input
                        ref={node => {title = node}}
                        placeholder={'Song Name'}
                        className='input-fields'
                    />
                </div>
                <div className='col add-media-placeholders'>
                    <input
                        ref={node => {duration = node}}
                        placeholder={'Song Duration'}
                        className='input-fields'
                    />
                </div>
                <div className='col add-media-headings'>
                    Thumbnail
                </div>
                <div className='col add-media-placeholders'>
                    <input type='file' key={inputKey} onChange={handleChange} />
                    <img src={file} style={{maxHeight: '42px', maxWidth: '75px'}}/>
                </div>
                <div className='col'>
                    <button onClick={() => {
                        // input validation
                        if (validateArtist(artist.value) && validateTitle(title.value) && validateDuration(duration.value)) {
                            dispatch(addSong(artist.value, title.value, trimLeadingZero(duration.value), file))
                            artist.value = ''
                            title.value = ''
                            duration.value = ''
                            setInputKey(Date.now())
                            setFile(null)
                        }
                    }} className='button'
                    >
                        <img src={AddMediaButton} alt='Add Media' />
                    </button>
                </div>
            </div>
        </div>
    )
}
// no args makes component that doesn't subscribe to store and that injects dispatch as prop
AddSong = connect()(AddSong)

export default AddSong
