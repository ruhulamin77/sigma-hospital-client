import React from 'react';
import { Container, Nav, Navbar, NavDropdown, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Header.css"
import { FaPaperPlane, FaFacebookF, FaTwitter, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { IoAddOutline } from 'react-icons/io';
import { GiShoppingCart } from 'react-icons/gi';
import logo from '../../../images/logo/logo.png'

const Header = () => {
    return (
        <header className='header'>
            <Navbar expand="lg">
                <Container fuild>
<<<<<<< HEAD
                    <NavLink className="logo" to="/"><img className='img-fluid' src="https://wordpress.iqonic.design/kivicare/wp-content/themes/kivicare/assets/images/logo.png" alt="sigma" /></NavLink>
=======
                    <Link className="logo" to="/"><img className='img-fluid' src={logo} alt="sigma" />SigmaCare</Link>
>>>>>>> 7fc3dc047fd4fba492273f76b066352540d3c432
                    <Navbar.Toggle cl aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto custom-menu align-items-center header-nav">
                            <Link className='custom-nav' to="/home">Home</Link>

                            <NavDropdown className="custom-dropdown " title="Doctor" id="basic-nav-dropdown">
                                <NavLink className='dropdown-item dropdownitem' to="/">Action</NavLink>
                                <NavLink className='dropdown-item dropdownitem' to="/">Action</NavLink>
                                <NavLink className='dropdown-item dropdownitem' to="/">Action</NavLink>
                                <NavLink className='dropdown-item dropdownitem' to="/">Action</NavLink>
                                <NavLink className='dropdown-item dropdownitem' to="/">Action</NavLink>
                                <NavLink className='dropdown-item dropdownitem' to="/">Action</NavLink>
                            </NavDropdown>
                            <Link className='custom-nav' to="/commonity">Community</Link>
                            <Link className='custom-nav' to="/login">Log in</Link>
                            <Link className='custom-nav' to="/register">Register</Link>
                            <button className='header-btn'>Get Appointment <i className="fas fa-plus header-icon"></i>

                            </button>
                            <button className='header-btn btn-hover'>Get Appointment <i className="fas fa-plus header-icon"></i>

                            </button>
                            <span>{FaPaperPlane}</span>
                            <span className='header-icon'><GiShoppingCart /></span>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;