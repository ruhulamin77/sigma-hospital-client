import React, { useState } from "react";
import { Button, NavDropdown, Offcanvas } from "react-bootstrap";
import { FaUser } from "react-icons/fa";
import { GiArchiveRegister, GiHamburgerMenu } from "react-icons/gi";
import { GrHome } from "react-icons/gr";
import { HiMailOpen } from "react-icons/hi";
import { ImDroplet } from "react-icons/im";
import { IoSettingsSharp } from "react-icons/io5";
import { MdSupervisedUserCircle } from "react-icons/md";
import { RiLogoutCircleLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import "./BloodAdminDashboard.css";


const BloodAdminDashboard = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const user = useSelector((state) => state.auth.auth);
  // https://shrouded-headland-44423.herokuapp.com/
  // https://shrouded-headland-44423.herokuapp.com/

  return (
    <>
      <div className="dashboard_mobile_header">
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
                      href="#action/3.1"
                      className="dash_drop_item"
                    >
                      <FaUser />
                      <span>My Profile</span>
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="#action/3.2"
                      className="dash_drop_item"
                    >
                      <HiMailOpen />
                      <span>Messages</span>
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="#action/3.3"
                      className="dash_drop_item"
                    >
                      <IoSettingsSharp />
                      <span>Settings</span>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item
                      as={Link}
                      to=""
                      className="dash_drop_item"
                    >
                      <RiLogoutCircleLine />
                      <span onClick="">Logout</span>
                    </NavDropdown.Item>
                  </NavDropdown>
                </div>
              </div>
            </div>
            <hr />

            <ul className="dashboard_left_nav">
              <li className="dashboard_nav_item">
                <Link to="/bloodBankAdmin">
                  <span className="dashboard_nav_icon">
                    <span className="nav_icon">
                      <GrHome />
                    </span>
                    <span>Blood Bank Home</span>
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/bloodBankAdmin/manageAllDonors">
                  <span className="dashboard_nav_icon">
                    <span className="nav_icon">
                      <MdSupervisedUserCircle />
                    </span>
                    <span>Manage All Donors</span>
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/bloodBankAdmin/ManageBloodDonations">
                  <span className="dashboard_nav_icon">
                    <span className="nav_icon">
                      <GiArchiveRegister />
                    </span>
                    <span>Manage Donations</span>
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/bloodBankAdmin/ManageBloodRequests">
                  <span className="dashboard_nav_icon">
                    <span className="nav_icon">
                      <GiArchiveRegister />
                    </span>
                    <span>Manage Requests</span>
                  </span>
                </Link>
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
            <span>Logout</span>
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
                  <NavDropdown.Item
                    href="#action/3.1"
                    className="dash_drop_item"
                  >
                    <FaUser />
                    <span>My Profile</span>
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="#action/3.2"
                    className="dash_drop_item"
                  >
                    <HiMailOpen />
                    <span>Messages</span>
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="#action/3.3"
                    className="dash_drop_item"
                  >
                    <IoSettingsSharp />
                    <span>Settings</span>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to="" className="dash_drop_item">
                    <RiLogoutCircleLine />
                    <span onClick="">Logout</span>
                  </NavDropdown.Item>
                </NavDropdown>
              </div>
            </div>
          </div>
          <hr />

          <ul className="dashboard_left_nav">
            <li className="dashboard_nav_item">
              <Link to="/bloodBankAdmin">
                <span className="dashboard_nav_icon">
                  <span className="nav_icon">
                    <GrHome />
                  </span>
                  <span>Blood Bank Home</span>
                </span>
              </Link>
            </li>
            <li>
              <Link to="/bloodBankAdmin/manageAllDonors">
                <span className="dashboard_nav_icon">
                  <span className="nav_icon">
                    <MdSupervisedUserCircle />
                  </span>
                  <span>Manage All Donors</span>
                </span>
              </Link>
            </li>
            <li>
              <Link to="/bloodBankAdmin/ManageBloodDonations">
                <span className="dashboard_nav_icon">
                  <span className="nav_icon">
                    <GiArchiveRegister />
                  </span>
                  <span>Manage Donations</span>
                </span>
              </Link>
            </li>
            <li>
              <Link to="/bloodBankAdmin/ManageBloodRequests">
                <span className="dashboard_nav_icon">
                  <span className="nav_icon">
                    <GiArchiveRegister />
                  </span>
                  <span>Manage Requests</span>
                </span>
              </Link>
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

export default BloodAdminDashboard;
