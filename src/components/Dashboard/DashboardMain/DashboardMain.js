import React, { useState } from "react";
import {
  Accordion,
  Button,
  Form,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";
import { GiSettingsKnobs } from "react-icons/gi";
import { RiLogoutCircleLine, RiSearchLine, RiWechatLine } from "react-icons/ri";
import { ImStack } from "react-icons/im";
import {
  AiOutlineMail,
  AiOutlineUser,
  AiOutlineUsergroupDelete,
} from "react-icons/ai";
import { GrHome, GrLocation } from "react-icons/gr";
import { MdKeyboardArrowLeft, MdOutlinePayment } from "react-icons/md";
import {
  HiMailOpen,
  HiOutlineLockClosed,
  HiOutlinePuzzle,
} from "react-icons/hi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiChevronDown, BiLogIn } from "react-icons/bi";
import { FaRegCalendarAlt, FaUser } from "react-icons/fa";
import { BsChevronDown, BsListTask } from "react-icons/bs";
import { IoSettingsSharp } from "react-icons/io5";

import "./DashboardMain.css";
import logo from "../../../images/logo/logo.png";
import user from "../../../images/user.png";

import {
  BrowserRouter as Router,
  Link,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";

const DashboardMain = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas> */}

      <div className="dashboardHeader container-fluid">
        <div className="logo_area">
          <img src={logo} alt="" />
        </div>
        <div className="menu_area">
          <div className="search_area">
            <input type="text" placeholder="Search here..." />
            <RiSearchLine />
          </div>
          <div className="right_icon_area">
            <ul>
              <li>
                <FaRegCalendarAlt />
              </li>
              <li data-noti>
                <RiWechatLine />
              </li>
              <li data-noti="">
                <AiOutlineMail />
              </li>
              <li data-noti="">
                <IoMdNotificationsOutline />
              </li>
              <li>
                <GiSettingsKnobs />
              </li>
              <li>
                <BiLogIn />
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* left side bar */}
      <div className="dashboard_main">
        <div className="dashboard_left_side_bar">
          <div className="dasboard_user">
            <img src={user} alt="doctor or user" />
            <div>
              <span>Welcome, </span>
              <p>
                <NavDropdown
                  title="Dr. Arifuzzaman"
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
                    <span>Logout</span>
                  </NavDropdown.Item>
                </NavDropdown>
              </p>
            </div>
          </div>
          <hr />
          <div className="dasboard_leftbar_counter">
            <div>
              <p>Exp</p>
              <span className="dasboard_leftbar_count">18</span>
            </div>
            <div>
              <p>Awards</p>
              <span className="dasboard_leftbar_count">13</span>
            </div>
            <div>
              <p>Clients</p>
              <span className="dasboard_leftbar_count">213</span>
            </div>
          </div>

          <ul className="dashboard_left_nav">
            <li className="dashboard_nav_item">
              <Link to="/dashboard">
                <span className="dashboard_nav_icon">
                  <span className="nav_icon">
                    <GrHome />
                  </span>
                  <span>Dashboard</span>
                </span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/appointment">
                <span className="dashboard_nav_icon">
                  <span className="nav_icon">
                    <FaRegCalendarAlt />
                  </span>
                  <span>Appointment</span>
                </span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard">
                <span className="dashboard_nav_icon">
                  <span className="nav_icon">
                    <BsListTask />
                  </span>
                  <span>Taskboard</span>
                </span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard">
                <span className="dashboard_nav_icon">
                  <span className="nav_icon">
                    <AiOutlineMail />
                  </span>
                  <span>Inbox App</span>
                </span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard">
                <span className="dashboard_nav_icon">
                  <span className="nav_icon">
                    <RiWechatLine />
                  </span>

                  <span>Chat App</span>
                </span>
              </Link>
            </li>
            <li>
              <Link
                // className="btn btn-primary"
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
                    <Link to="/dashboard/allDoctors">
                      <span className="nav_icon">--</span>
                      <span>All Doctors</span>
                    </Link>
                    <Link to="/dashboard/addDoctors">
                      <span className="nav_icon">--</span>
                      <span>Add Doctors</span>
                    </Link>
                    <Link to="/dashboard/allDoctors/update/:id">
                      <span className="nav_icon">--</span>
                      <span>Doctor Profile</span>
                    </Link>
                    <Link to="/dashboard/doctorPrescription">
                      <span className="nav_icon">--</span>
                      <span>Doctor Prescription</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <Link
                // className="btn btn-primary"
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

                  <span>Patiaets</span>
                </span>
                <BsChevronDown />
              </Link>

              <div className="collapse" id="collapsePatients">
                <ul className="dashboard_sub_menu">
                  <li>
                    <Link to="/dashboard">
                      <span className="nav_icon">--</span>
                      <span>All Patients</span>
                    </Link>
                    <Link to="/dashboard">
                      <span className="nav_icon">--</span>
                      <span>Add Patient</span>
                    </Link>
                    <Link to="/dashboard">
                      <span className="nav_icon">--</span>
                      <span>Patients Profile</span>
                    </Link>
                    <Link to="/dashboard">
                      <span className="nav_icon">--</span>
                      <span>Invoice</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <Link
                // className="btn btn-primary"
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
              <div className="collapse" id="collapsePayments">
                <ul className="dashboard_sub_menu">
                  <li>
                    <Link to="/dashboard/allDoctors">
                      <span className="nav_icon">--</span>
                      <span>Payments</span>
                    </Link>
                    <Link to="/dashboard">
                      <span className="nav_icon">--</span>
                      <span>Add Payments</span>
                    </Link>
                    <Link to="/dashboard">
                      <span className="nav_icon">--</span>
                      <span>Invoie</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <Link
                // className="btn btn-primary"
                data-bs-toggle="collapse"
                to="#collapseDepartments"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                <span className="dashboard_nav_icon">
                  <span className="nav_icon">
                    <ImStack />
                  </span>
                  <span>Departments</span>
                </span>
                <BsChevronDown />
              </Link>

              <div className="collapse" id="collapseDepartments">
                <ul className="dashboard_sub_menu">
                  <li>
                    <Link to="/dashboard">
                      <span className="nav_icon">--</span>
                      <span>Add Departments</span>
                    </Link>
                    <Link to="/dashboard">
                      <span className="nav_icon">--</span>
                      <span>All Departments</span>
                    </Link>
                    <Link to="/dashboard">
                      <span className="nav_icon">--</span>
                      <span>Oncology</span>
                    </Link>
                    <Link to="/dashboard">
                      <span className="nav_icon">--</span>
                      <span>Neurology</span>
                    </Link>
                    <Link to="/dashboard">
                      <span className="nav_icon">--</span>
                      <span>ENT</span>
                    </Link>

                    <Link to="/dashboard">
                      <span className="nav_icon">--</span>
                      <span>Cardiology</span>
                    </Link>
                    <Link to="/dashboard">
                      <span className="nav_icon">--</span>
                      <span>Oncology</span>
                    </Link>
                    <Link to="/dashboard">
                      <span className="nav_icon">--</span>
                      <span>Audiology</span>
                    </Link>
                    <Link to="/dashboard">
                      <span className="nav_icon">--</span>
                      <span>Psychology</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <Link to="/dashboard">
                <span className="dashboard_nav_icon">
                  <span className="nav_icon">
                    <GrLocation />
                  </span>
                  <span>Worlwide Centres</span>
                </span>
              </Link>
            </li>
            <li>
              <Link
                // className="btn btn-primary"
                data-bs-toggle="collapse"
                to="#collapseAuthentications"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                <span className="dashboard_nav_icon">
                  <span className="nav_icon">
                    <HiOutlineLockClosed />
                  </span>

                  <span>Authentications</span>
                </span>
                <BsChevronDown />
              </Link>
              <div className="collapse" id="collapseAuthentications">
                <ul className="dashboard_sub_menu">
                  <li>
                    <Link to="/dashboard/allDoctors">
                      <span className="nav_icon">--</span>
                      <span>Login</span>
                    </Link>
                    <Link to="/dashboard">
                      <span className="nav_icon">--</span>
                      <span>Register</span>
                    </Link>
                    <Link to="/dashboard">
                      <span className="nav_icon">--</span>
                      <span>Lock Screen</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <Link to="/dashboard">
                <span className="dashboard_nav_icon">
                  <span className="nav_icon">
                    <HiOutlinePuzzle />
                  </span>

                  <span>Widgets</span>
                </span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="dashboard_content_area">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardMain;
