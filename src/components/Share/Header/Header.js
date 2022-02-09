import React from 'react';
import { Container, Nav, Navbar, NavDropdown, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from "../../../images/logo/logo.png"
import "./Header.css"

const Header = () => {
    return (
        <header className='header'>
            <Navbar expand="lg">
                <Container>
                    <Link  className="logo" to="/"><img className='img-fluid' src="https://wordpress.iqonic.design/kivicare/wp-content/themes/kivicare/assets/images/logo.png" alt="sigma" /></Link>
                    <Navbar.Toggle cl aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto custom-menu">
                            <NavLink className='custom-nav' to="/home">Home</NavLink>

                            <NavDropdown className="custom-dropdown " title="Doctor" id="basic-nav-dropdown">
                                <NavLink className='dropdown-item dropdownitem' to="/">Action</NavLink>
                                <NavLink className='dropdown-item dropdownitem' to="/">Action</NavLink>
                                <NavLink className='dropdown-item dropdownitem' to="/">Action</NavLink>
                                <NavLink className='dropdown-item dropdownitem' to="/">Action</NavLink>
                                <NavLink className='dropdown-item dropdownitem' to="/">Action</NavLink>
                                <NavLink className='dropdown-item dropdownitem' to="/">Action</NavLink>
                            
                            </NavDropdown>
                            <NavDropdown className="custom-dropdown " title="Doctor" id="basic-nav-dropdown">
                                <NavLink className='dropdown-item dropdownitem' to="/">Action</NavLink>
                                <NavLink className='dropdown-item dropdownitem' to="/">Action</NavLink>
                                <NavLink className='dropdown-item dropdownitem' to="/">Action</NavLink>
                                <NavLink className='dropdown-item dropdownitem' to="/">Action</NavLink>
                                <NavLink className='dropdown-item dropdownitem' to="/">Action</NavLink>
                                <NavLink className='dropdown-item dropdownitem' to="/">Action</NavLink>
                            
                            </NavDropdown>
                            
                            <NavLink className='custom-nav' to="/admin">Admin</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>


        // <nav className="navbar navbar-expand-lg">
        //     <div className="container">
        //         <Link className="navbar-brand" to="/"><img src="https://wordpress.iqonic.design/kivicare/wp-content/themes/kivicare/assets/images/logo.png" alt="logo" /></Link>
        //         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //             <span className="navbar-toggler-icon"></span>
        //         </button>
        //         <div className="collapse navbar-collapse" id="navbarSupportedContent">
        //             <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        //                 <li className="nav-item">
        //                     <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        //                 </li>
                        

        //                 <li className="nav-item dropdown">
        //                     <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        //                         Doctor
        //                     </Link>
        //                     <ul className="dropdown-menu custom-dropdown" aria-labelledby="navbarDropdown">
        //                         <li><Link className="dropdown-item custom-link" to="/">Action</Link></li>
        //                         <li><Link className="dropdown-item custom-link" to="/">Another action</Link></li>

        //                     </ul>
        //                 </li>
        //                 {/* <li className="nav-item dropdown">
        //                     <a className="nav-link dropdown-toggle" href="#a" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        //                         Dropdown
        //                     </a>
        //                     <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
        //                         <li><Link className="dropdown-item" href="/">Action</Link></li>
        //                         <li><Link className="dropdown-item" to="/">Another action</Link></li>

        //                     </ul>
        //                 </li>
        //                 <li className="nav-item">
        //                     <Link className="nav-link" to="/admin">Admin</Link>
        //                 </li> */}

        //             </ul>

        //         </div>
        //     </div>
        // </nav>
    );
};

export default Header;