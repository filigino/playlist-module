import React, { useState } from 'react'
import { Modal, ModalFooter } from 'reactstrap'
import AddMedia from './AddMedia'
import PlaylistModal from './Playlist'
import LogoBig from '../imgs/Strumr Logo Big.svg'
import PlaylistButton from '../imgs/Setup Playlist Button.svg'

const Main = (props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggle = () => setIsModalOpen(!isModalOpen);

    return (
        <>
            <div className='container main-container'>
                <div className='row'>
                    <div className='col-12'>
                        <img src={LogoBig} alt='Strumr Logo Big' />
                        <br/><br/>
                    </div>
                    <div className='col-12 col-md-6 main-heading'>
                        Safely share
                        <span className='semibold'> any music </span>
                        with your
                        <span className='semibold'> Twitch community.</span>
                    </div>
                    <div className='col-12 main-text'>
                        <br/>
                        Got curious?
                        <span className='semibold'> See how it works</span> !
                        <br/>
                    </div>
                    <div className='col-12'>
                        <br/>
                        <button onClick={toggle} className='button'>
                            <img src={PlaylistButton} alt='Setup Playlist Button' />
                        </button>
                    </div>
                </div>
            </div>
            <Modal
                contentClassName='custom-modal-style'
                size='xl'
                scrollable='true'
                isOpen={isModalOpen}
                toggle={toggle}
            >
                <PlaylistModal toggle={toggle} />
                <AddMedia />
            </Modal>
        </>
    )
}

export default Main
