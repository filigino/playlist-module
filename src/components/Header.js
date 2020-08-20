import React, { useState } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap'
import LogoSmall from '../imgs/Strumr Logo Small.svg'

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar dark expand='md'>
            <div className='container navbar-container'>
                <NavbarBrand href='/'>
                    <img src={LogoSmall} alt='Strumr Logo Small' />
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className='ml-auto' navbar>
                        <NavItem>
                            <NavLink href='/'>
                                <span className='navbar-headings'>Learn More</span>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href='https://discord.com/' target='_blank' rel='noopener noreferrer'>
                                <span className='navbar-headings'>
                                    Discord
                                </span>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href='/'>
                                <span className='navbar-headings'>
                                    Help
                                </span>
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </div>
        </Navbar>
    )
}

export default Header
