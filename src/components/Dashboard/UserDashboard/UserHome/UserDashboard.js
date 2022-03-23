import React, { useState } from "react";
import { Button, NavDropdown, Offcanvas } from "react-bootstrap";
import { GiSettingsKnobs } from "react-icons/gi";
import { RiLogoutCircleLine, RiSearchLine, RiWechatLine } from "react-icons/ri";
import {
  AiOutlineMail,
  AiOutlineUser,
  AiOutlineUsergroupDelete,
} from "react-icons/ai";
import { GrHome } from "react-icons/gr";
import { MdOutlinePayment } from "react-icons/md";
import {
  HiMailOpen
} from "react-icons/hi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiLogIn } from "react-icons/bi";
import { FaRegCalendarAlt, FaUser } from "react-icons/fa";
import { BsChevronDown } from "react-icons/bs";
import { IoSettingsSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { removeUser } from "../../../../features/authSlice";
// import Header from "../../Share/Header/Header";

const UserDashboard = () => {
  // const adminRole = JSON.parse(localStorage.getItem("admin"))
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.auth);
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

        <div className="dashboard_mobole_logo  d-block d-md-none">
          <Link to="/home">
            <img src="https://i.ibb.co/hRX83Sc/logo.png" alt="" />
          </Link>
        </div>
      </div>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton className="offcanvas_header">
          <Offcanvas.Title>Dashboard</Offcanvas.Title>
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
                <Link to="/userDashboard">
                  <span className="dashboard_nav_icon">
                    <span className="nav_icon">
                      <GrHome />
                    </span>
                    <span>Dashboard</span>
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/userDashboard/appointment">
                  <span className="dashboard_nav_icon">
                    <span className="nav_icon">
                      <FaRegCalendarAlt />
                    </span>
                    <span>Appointment</span>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  /* className="btn btn-primary" */
                  data-bs-toggle="collapse"
                  to="#collapseDoctors"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  <span className="dashboard_nav_icon">
                    <span className="nav_icon">
                      <AiOutlineUser />
                    </span>

                    <span>Doctors</span>
                  </span>
                  <BsChevronDown />
                </Link>

                <div className="collapse" id="collapseDoctors">
                  <ul className="dashboard_sub_menu">
                    <li>
                      <Link to="/userDashboard/allDoctors">
                        <span className="nav_icon">--</span>
                        <span>All Doctors</span>
                      </Link>
                      {/* <Link to="/dashboard/patientsInfo">
                        <span className="nav_icon">--</span>
                        <span>Patients Information</span>
                      </Link> */}
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <Link
                  /* className="btn btn-primary" */
                  data-bs-toggle="collapse"
                  to="#collapsePatients"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  <span className="dashboard_nav_icon">
                    <span className="nav_icon">
                      <AiOutlineUsergroupDelete />
                    </span>

                    <span>Patients</span>
                  </span>
                  <BsChevronDown />
                </Link>

                <div className="collapse" id="collapsePatients">
                  <ul className="dashboard_sub_menu">
                    <li>
                      <Link to="/dashboard/appointment">
                        <span className="nav_icon">--</span>
                        <span>Add Patient</span>
                      </Link>
                      {/* <Link to="/dashboard">
                        <span className="nav_icon">--</span>
                        <span>Patients Profile</span>
                      </Link> */}
                      <Link to="/dashboard/patient/invoice">
                        <span className="nav_icon">--</span>
                        <span>Invoice</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li>
                <Link
                  /* className="btn btn-primary" */
                  data-bs-toggle="collapse"
                  to="#collapsePayments"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  <span className="dashboard_nav_icon">
                    <span className="nav_icon">
                      <MdOutlinePayment />
                    </span>
                    <span>Payments</span>
                  </span>
                  <BsChevronDown />
                </Link>
              </li>
            </ul>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
      <div className="dashboardHeader container-fluid">
        <div className="logo_area">
          <Link to="/home">
            <img src="https://i.ibb.co/hRX83Sc/logo.png" alt="" />
          </Link>
        </div>
        <div className="menu_area">
          <div className="search_area">
            <input type="text" placeholder="Search here..." />
            <RiSearchLine />
          </div>
          <div className="right_icon_area">
            <ul>
              <li data-tag="Appointment">
                <FaRegCalendarAlt />
              </li>
              <li data-noti="" data-tag="Chat">
                <RiWechatLine />
              </li>
              <li data-noti="" data-tag="Inbox">
                <AiOutlineMail />
              </li>
              <li data-noti="" data-tag="Notification">
                <IoMdNotificationsOutline />
              </li>
              <li data-tag="Setting">
                <GiSettingsKnobs />
              </li>
              <li data-tag="Logout" onClick={() => dispatch(removeUser())}>
                <BiLogIn />
              </li>
            </ul>
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
                  title={user?.displayName}
                  id="basic-nav-dropdown"
                  className="basic_nav_dropdown_custom"
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
                    <span onClick={() => dispatch(removeUser())}>Logout</span>
                  </NavDropdown.Item>
                </NavDropdown>
              </div>
            </div>
          </div>
          <hr />

          <ul className="dashboard_left_nav">
            <li className="dashboard_nav_item">
              <Link to="/userDashboard">
                <span className="dashboard_nav_icon">
                  <span className="nav_icon">
                    <GrHome />
                  </span>
                  <span>Dashboard</span>
                </span>
              </Link>
            </li>
            <li>
              <Link to="/userDashboard/appointment">
                <span className="dashboard_nav_icon">
                  <span className="nav_icon">
                    <FaRegCalendarAlt />
                  </span>
                  <span>Appointment</span>
                </span>
              </Link>
            </li>
            <li>
              <Link
                /* className="btn btn-primary" */
                data-bs-toggle="collapse"
                to="#collapsePatients"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                <span className="dashboard_nav_icon">
                  <span className="nav_icon">
                    <AiOutlineUsergroupDelete />
                  </span>

                  <span>Patients</span>
                </span>
                <BsChevronDown />
              </Link>

              <div className="collapse" id="collapsePatients">
                <ul className="dashboard_sub_menu">
                  <li>
                    <Link to="/userDashboard/appointment">
                      <span className="nav_icon">--</span>
                      <span>Add Patient</span>
                    </Link>
                    {/* <Link to="/dashboard">
                        <span className="nav_icon">--</span>
                        <span>Patients Profile</span>
                      </Link> */}
                    <Link to="/userDashboard/patient/invoice">
                      <span className="nav_icon">--</span>
                      <span>Invoice</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <Link
                /* className="btn btn-primary" */
                data-bs-toggle="collapse"
                to="#collapsePayments"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                <span className="dashboard_nav_icon">
                  <span className="nav_icon">
                    <MdOutlinePayment />
                  </span>
                  <span>Payments</span>
                </span>
                <BsChevronDown />
              </Link>
            </li>

            <li>
              <Link
                /* className="btn btn-primary" */
                data-bs-toggle="collapse"
                to="#collapsePaymentss"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                <span className="dashboard_nav_icon">
                  <span className="nav_icon">
                    <MdOutlinePayment />
                  </span>
                  <span>Pharmacy</span>
                </span>
                <BsChevronDown />
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

export default UserDashboard;