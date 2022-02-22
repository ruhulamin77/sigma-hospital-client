import React, { useState } from "react";
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../../images/logo/logo.png";
import { FaShoppingBasket, FaHeart, FaShoppingCart } from "react-icons/fa";
import { IoAddOutline } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);
  return (
    <header className="header">
      <Navbar expand="lg">
        <Container fluid>
          <Link className="logo" to="/">
            <img className="img-fluid" src={logo} alt="sigma" />
          </Link>
          <Navbar.Toggle cl aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto custom-menu align-items-center">
              <Link as NavLink className="custom-nav" to="/home">
                Home
              </Link>

              <NavDropdown
                className="custom-dropdown "
                title="Doctor"
                id="basic-nav-dropdown"
              >
                <Link as NavLink className="dropdown-item dropdownitem" to="/">
                  Action
                </Link>
                <Link as NavLink className="dropdown-item dropdownitem" to="/">
                  Action
                </Link>
                <Link as NavLink className="dropdown-item dropdownitem" to="/">
                  Action
                </Link>
                <Link as NavLink className="dropdown-item dropdownitem" to="/">
                  Action
                </Link>
                <Link as NavLink className="dropdown-item dropdownitem" to="/">
                  Action
                </Link>
                <Link as NavLink className="dropdown-item dropdownitem" to="/">
                  Action
                </Link>
              </NavDropdown>
              <NavDropdown
                className="custom-dropdown "
                title="Specialization"
                id="basic-nav-dropdown"
              >
                <Link
                  as
                  NavLink
                  className="dropdown-item dropdownitem"
                  to="/specialization/oncologist"
                >
                  Oncologist
                </Link>
                <Link
                  as
                  NavLink
                  className="dropdown-item dropdownitem"
                  to="/specialization/neurologist"
                >
                  Neurologist
                </Link>
                <Link
                  as
                  NavLink
                  className="dropdown-item dropdownitem"
                  to="/specialization/ent-specialist"
                >
                  ENT specialist
                </Link>
                <Link
                  as
                  NavLink
                  className="dropdown-item dropdownitem"
                  to="/specialization/cardiologist"
                >
                  Cardiologist
                </Link>
                <Link
                  as
                  NavLink
                  className="dropdown-item dropdownitem"
                  to="/specialization/audiologist"
                >
                  Audiologist
                </Link>
                <Link
                  as
                  NavLink
                  className="dropdown-item dropdownitem"
                  to="/specialization/psychiatrists"
                >
                  Psychiatrists
                </Link>
              </NavDropdown>

              <NavDropdown
                className="custom-dropdown "
                title="Blog"
                id="basic-nav-dropdown"
              >
                <Link as NavLink className="dropdown-item dropdownitem" to="/">
                  Action
                </Link>
                <Link as NavLink className="dropdown-item dropdownitem" to="/">
                  Action
                </Link>
                <Link as NavLink className="dropdown-item dropdownitem" to="/">
                  Action
                </Link>
                <Link as NavLink className="dropdown-item dropdownitem" to="/">
                  Action
                </Link>
                <Link as NavLink className="dropdown-item dropdownitem" to="/">
                  Action
                </Link>
                <Link as NavLink className="dropdown-item dropdownitem" to="/">
                  Action
                </Link>
              </NavDropdown>
              <NavDropdown
                className="custom-dropdown "
                title="Pages"
                id="basic-nav-dropdown"
              >
                <Link
                  as
                  NavLink
                  className="dropdown-item dropdownitem"
                  to="/shop"
                >
                  Shop
                </Link>
                <Link
                  as
                  NavLink
                  className="dropdown-item dropdownitem"
                  to="/about"
                >
                  About Us
                </Link>
                <Link
                  as
                  NavLink
                  className="dropdown-item dropdownitem"
                  to="/service"
                >
                  Service
                </Link>
                <Link
                  as
                  NavLink
                  className="dropdown-item dropdownitem"
                  to="/team"
                >
                  Our Team
                </Link>
                <Link
                  as
                  NavLink
                  className="dropdown-item dropdownitem"
                  to="/faq"
                >
                  FAQ
                </Link>
                <Link
                  as
                  NavLink
                  className="dropdown-item dropdownitem"
                  to="/contact"
                >
                  Contact Us
                </Link>
              </NavDropdown>

              <Link as NavLink className="custom-nav" to="/login">
                Admin
              </Link>
              <Link as NavLink className="custom-nav" to="/dashboard">
                Dashboard
              </Link>
              <button className="header-btn">
                Appointment <i className="fas fa-plus header-icon"></i>
              </button>
              <button className="header-btn btn-hover">
                Deshboard <i className="fas fa-plus header-icon"></i>
              </button>
              <span className="icon position-relative">
                <FaShoppingBasket />
                <ul className="position-absolute  icon-position">
                  <li>
                    <FaHeart />
                  </li>
                  <li>
                    <FaShoppingCart />
                  </li>
                </ul>
              </span>

              <span onClick={toggleShow} className="icon">
                <GiHamburgerMenu />
              </span>
              <Offcanvas placement={"end"} show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  Some text as placeholder. In real life you can have the
                  elements you have chosen. Like, text, images, lists, etc.
                </Offcanvas.Body>
              </Offcanvas>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
