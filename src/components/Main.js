import React, { useState } from 'react'
import ReactModal from 'react-modal'
import AddMedia from './AddMedia'
import VisiblePlaylist from './Playlist'
import LogoBig from '../imgs/Strumr Logo Big.svg'
import PlaylistButton from '../imgs/Setup Playlist Button.svg'

const Main = (props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggle = () => setIsModalOpen(!isModalOpen);

    return (
        <>
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
                        <button onClick={toggle} className='button'>
                            <img src={PlaylistButton} alt='Setup Playlist Button' />
                        </button>
                    </div>
                </div>
            </div>
            <div className='container'>
                <ReactModal 
                    isOpen={isModalOpen}
                >
                    <button onClick={toggle}>Close Modal</button>
                    <div className='container'>
                        <div className='row'>
                            <VisiblePlaylist />
                        </div>
                        <div className='row'>
                            <AddMedia />
                        </div>
                    </div>
                </ReactModal>
            </div>
        </>
    )
}

export default Main
