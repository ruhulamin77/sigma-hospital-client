import React, { useState } from 'react';
import { Button, NavDropdown, Offcanvas } from 'react-bootstrap';
import { BiDonateBlood } from 'react-icons/bi';
import { BsChevronDown } from 'react-icons/bs';
import { GiArchiveRegister, GiHamburgerMenu } from 'react-icons/gi';
import { GrHome } from 'react-icons/gr';
import { ImDroplet } from 'react-icons/im';
import { MdBloodtype, MdSupervisedUserCircle } from 'react-icons/md';
import { RiLogoutCircleLine } from 'react-icons/ri';
import './BloodDashboardMain.css';

import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { removeUser } from '../../../features/authSlice';

const BloodDashboardMain = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth.auth);

  return (
    <>
      {' '}
      <div className="dashboard_mobile_header blood_dashboard_mobile_header">
        <div>
          <Button
            className="d-block d-md-none dashboard_hamburger_btn"
            variant="primary"
            onClick={handleShow}
          >
            <GiHamburgerMenu />
          </Button>
        </div>

        <div className="dashboard_mobole_logo d-block d-md-none">
          <Link to="/home">
            <img src="https://i.ibb.co/hRX83Sc/logo.png" alt="" />
          </Link>
        </div>
      </div>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton className="offcanvas_header">
          <Offcanvas.Title>Blood Bank</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="dashboard_left_side_bar">
            <div className="dasboard_user">
              <img src={user?.photoURL} alt="doctor or user" />
              <div>
                <span>Welcome, </span>
                <div>
                  <NavDropdown
                    id="basic-nav-dropdown"
                    className="basic_nav_dropdown_custom"
                    title={user?.displayName}
                  >
                    <NavDropdown.Item
                      as={Link}
                      to=""
                      className="dash_drop_item"
                    >
                      <RiLogoutCircleLine />
                      <span onClick={() => dispatch(removeUser())}>Logout</span>
                    </NavDropdown.Item>
                  </NavDropdown>
                </div>
              </div>
            </div>
            <hr />

            <ul className="dashboard_left_nav">
              <li className="dashboard_nav_item">
                <Link to="/bloodBank">
                  <span className="dashboard_nav_icon">
                    <span className="nav_icon">
                      <GrHome />
                    </span>
                    <span>Blood Bank Home</span>
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/bloodBank/allDonor">
                  <span className="dashboard_nav_icon">
                    <span className="nav_icon">
                      <MdSupervisedUserCircle />
                    </span>
                    <span>All Donor</span>
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/bloodBank/registerDonor">
                  <span className="dashboard_nav_icon">
                    <span className="nav_icon">
                      <GiArchiveRegister />
                    </span>
                    <span>Register as a Donor</span>
                  </span>
                </Link>
              </li>

              <li>
                <Link
                  /* className="btn btn-primary" */
                  data-bs-toggle="collapse"
                  to="#collapseDonation"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  <span className="dashboard_nav_icon">
                    <span className="nav_icon">
                      <BiDonateBlood />
                    </span>
                    <span>Blood Donation</span>
                  </span>
                  <BsChevronDown />
                </Link>
                <div className="collapse" id="collapseDonation">
                  <ul className="dashboard_sub_menu">
                    <li>
                      <Link to="/bloodBank/bloodDonation">
                        <span className="nav_icon">--</span>
                        <span>Donate Blood</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/bloodBank/donationHistory">
                        <span className="nav_icon">--</span>
                        <span>Donation History</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <Link
                  /* className="btn btn-primary" */
                  data-bs-toggle="collapse"
                  to="#collapseRequest"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  <span className="dashboard_nav_icon">
                    <span className="nav_icon">
                      <MdBloodtype />
                    </span>
                    <span>Blood Request</span>
                  </span>
                  <BsChevronDown />
                </Link>
                <div className="collapse" id="collapseRequest">
                  <ul className="dashboard_sub_menu">
                    <li>
                      <Link to="/bloodBank/bloodRequest">
                        <span className="nav_icon">--</span>
                        <span>Make Request</span>
                      </Link>
                      <Link to="/bloodBank/requestHistory">
                        <span className="nav_icon">--</span>
                        <span>Request History</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
      <div className="dashboardHeader bloodBankHeader container-fluid">
        <div className="logo_area">
          <Link to="/home">
            <img src="https://i.ibb.co/hRX83Sc/logo.png" alt="" />
          </Link>
        </div>
        <div className="menu_area">
          <div className="blood_drop">
            <span>Blood Bank</span>
            <ImDroplet />
          </div>
          <div className="right_icon_area bloodBank_header_logout">
            <span onClick={() => dispatch(removeUser())}>Logout</span>
            <RiLogoutCircleLine />
          </div>
        </div>
      </div>
      {/* left side bar */}
      <div className="dashboard_main">
        <div className="dashboard_left_side_bar d-none d-md-block">
          <div className="dasboard_user">
            <img src={user?.photoURL} alt="doctor or user" />
            <div>
              <span>Welcome, </span>
              <div>
                <NavDropdown
                  id="basic-nav-dropdown"
                  className="basic_nav_dropdown_custom"
                  title={user?.displayName}
                >
                  <NavDropdown.Item as={Link} to="" className="dash_drop_item">
                    <RiLogoutCircleLine />
                    <span onClick={() => dispatch(removeUser())}>Logout</span>
                  </NavDropdown.Item>
                </NavDropdown>
              </div>
            </div>
          </div>
          <hr />

          <ul className="dashboard_left_nav">
            <li className="dashboard_nav_item">
              <Link to="/bloodBank">
                <span className="dashboard_nav_icon">
                  <span className="nav_icon">
                    <GrHome />
                  </span>
                  <span>Blood Bank Home</span>
                </span>
              </Link>
            </li>
            <li>
              <Link to="/bloodBank/allDonor">
                <span className="dashboard_nav_icon">
                  <span className="nav_icon">
                    <MdSupervisedUserCircle />
                  </span>
                  <span>All Donor</span>
                </span>
              </Link>
            </li>
            <li>
              <Link to="/bloodBank/registerDonor">
                <span className="dashboard_nav_icon">
                  <span className="nav_icon">
                    <GiArchiveRegister />
                  </span>
                  <span>Register as a Donor</span>
                </span>
              </Link>
            </li>

            <li>
              <Link
                /* className="btn btn-primary" */
                data-bs-toggle="collapse"
                to="#collapseDonation"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                <span className="dashboard_nav_icon">
                  <span className="nav_icon">
                    <BiDonateBlood />
                  </span>
                  <span>Blood Donation</span>
                </span>
                <BsChevronDown />
              </Link>
              <div className="collapse" id="collapseDonation">
                <ul className="dashboard_sub_menu">
                  <li>
                    <Link to="/bloodBank/bloodDonation">
                      <span className="nav_icon">--</span>
                      <span>Donate Blood</span>
                    </Link>
                    <Link to="/bloodBank/donationHistory">
                      <span className="nav_icon">--</span>
                      <span>Donation History</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <Link
                /* className="btn btn-primary" */
                data-bs-toggle="collapse"
                to="#collapseRequest"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                <span className="dashboard_nav_icon">
                  <span className="nav_icon">
                    <MdBloodtype />
                  </span>
                  <span>Blood Request</span>
                </span>
                <BsChevronDown />
              </Link>
              <div className="collapse" id="collapseRequest">
                <ul className="dashboard_sub_menu">
                  <li>
                    <Link to="/bloodBank/bloodRequest">
                      <span className="nav_icon">--</span>
                      <span>Make Request</span>
                    </Link>
                    <Link to="/bloodBank/requestHistory">
                      <span className="nav_icon">--</span>
                      <span>Request History</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className="dashboard_content_area">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default BloodDashboardMain;
