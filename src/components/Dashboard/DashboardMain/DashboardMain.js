import React, { useState } from "react";
import { Button, Form, Offcanvas } from "react-bootstrap";
import { GiSettingsKnobs } from "react-icons/gi";
import { RiSearchLine, RiWechatLine } from "react-icons/ri";
import { VscCalendar } from "react-icons/vsc";
import { AiOutlineMail } from "react-icons/ai";
import { GrHome } from "react-icons/gr";
import "./DashboardMain.css";
import logo from "../../../images/logo/logo.png";
import { Link } from "react-router-dom";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiLogIn } from "react-icons/bi";
import SecondSection from "../AdminDashboard/AdminHome/SecondSection/SecondSection";
import Footer from "../../Home/Footer/Footer";

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
                <VscCalendar />
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
          <h2>side bar</h2>
          <ul>
            <li>
              <Link to="/dashboard/oncologist">
                <apan className="btn-left">
                  <GrHome /> <span>Dashboard</span>
                </apan>
                <GrHome />
              </Link>
            </li>
            <li>
              <Link to="/specialization/neurologist">
                <span>Appointment</span>
                <span className="fas fa-plus"></span>
              </Link>
            </li>
            <li>
              <Link to="/specialization/ent-specialist">
                <span>Taskboard</span>
                <span className="fas fa-plus"></span>
              </Link>
            </li>
            <li>
              <Link to="/specialization/cardiologist">
                <span>Inbox App</span>
                <span className="fas fa-plus"></span>
              </Link>
            </li>
            <li>
              <Link to="/specialization/audiologist">
                <span>Chat App</span>
                <span className="fas fa-plus"></span>
              </Link>
            </li>
            <li>
              <Link to="/specialization/psychiatrists">
                <span>Doctors</span>
                <span className="fas fa-plus"></span>
              </Link>
            </li>
            <li>
              <Link to="/specialization/psychiatrists">
                <span>Patients</span>
                <span className="fas fa-plus"></span>
              </Link>
            </li>
            <li>
              <Link to="/specialization/psychiatrists">
                <span>Departments</span>
                <span className="fas fa-plus"></span>
              </Link>
            </li>
            <li>
              <Link to="/specialization/psychiatrists">
                <span>Worlwide Centres</span>
                <span className="fas fa-plus"></span>
              </Link>
            </li>
            <li>
              <Link to="/specialization/psychiatrists">
                <span>Authentications</span>
                <span className="fas fa-plus"></span>
              </Link>
            </li>
            <li>
              <Link to="/specialization/psychiatrists">
                <span>Widgets</span>
                <span className="fas fa-plus"></span>
              </Link>
            </li>
            <li>
              <Link to="/specialization/psychiatrists">
                <span>Payments</span>
                <span className="fas fa-plus"></span>
              </Link>
            </li>
            <li>
              <Link to="/specialization/psychiatrists">
                <span>Payments</span>
                <span className="fas fa-plus"></span>
              </Link>
            </li>
            <li>
              <Link to="/specialization/psychiatrists">
                <span>Payments</span>
                <span className="fas fa-plus"></span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="dashboard_content_area">
          <h2>content bar</h2>
          <SecondSection />
          <SecondSection />
          <SecondSection />
          <SecondSection />
          <SecondSection />
        </div>
      </div>
    </div>
  );
};

export default DashboardMain;
