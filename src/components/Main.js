import React from 'react'
import LogoBig from '../imgs/Strumr Logo Big.svg'
import PlaylistButton from '../imgs/Setup Playlist Button.svg'

const Main = (props) => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <img src={LogoBig} alt='Strumr Logo Big' />
                </div>
                <div className='col-12 col-md-6 main-heading'>
                    Safely share <span className='semibold'>any music</span> with your <span className='semibold'>Twitch community.</span>
                </div>
                <div className='col-12 main-text'>
                    Got curious? <span className='semibold'>See how it works</span> !
                </div>
                <div className='col-12'>
                    <img src={PlaylistButton} alt='Setup Playlist Button' />
                </div>
            </div>
        </div>
    )
}

export default Main
