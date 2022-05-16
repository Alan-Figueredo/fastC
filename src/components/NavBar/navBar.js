import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { Row, Tooltip } from "react-bootstrap";
import {
  FiMonitor,
  FiCalendar,
  FiMessageSquare,
  FiShoppingCart,
  FiUsers,
  FiMail,
  FiRss,
  FiActivity,
  FiBriefcase,
  FiClipboard,
  FiBook,
  FiAperture,
} from "react-icons/fi";
import { FaHome } from "react-icons/fa";
import "./navBar.scss";

const navBar = () => {
  const toggle = useSelector((state) => state.topBar.toggle);
  console.log(localStorage);
  const location = useLocation();

  const renderTooltip = (props) => (
    <Tooltip {...props}>
      <strong>{props}</strong>
    </Tooltip>
  );
  const navigation = [
    {
      name: "Home",
      path: "/",
      icon: <FaHome className="mb-1" />,
    },
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <FiMonitor className="mb-1" />,
    },
  ];

  const apps = [
    {
      name: "Calendar",
      path: "/calendar",
      icon: <FiCalendar className="mb-1" />,
    },
    {
      name: "Chat",
      path: "/chat",
      icon: <FiMessageSquare className="mb-1" />,
    },
    {
      name: "Ecommerce",
      path: "/ecommerce",
      icon: <FiShoppingCart className="mb-1" />,
    },
    {
      name: "CRM",
      path: "/crm",
      icon: <FiUsers className="mb-1" />,
    },
    {
      name: "Email",
      path: "/email",
      icon: <FiMail className="mb-1" />,
    },
    {
      name: "Social Feed",
      path: "/social-feed",
      icon: <FiRss className="mb-1" />,
    },
    {
      name: "Companies",
      path: "/companies",
      icon: <FiActivity className="mb-1" />,
    },
    {
      name: "Projects",
      path: "/projects",
      icon: <FiBriefcase className="mb-1" />,
    },
  ];

  return (
    <div className={!toggle ? "nav-bar-closed navi-bar" : "nav-bar navi-bar"}>
      <div className="">
        <div className={!toggle ? "d-none" : ""}>
          <span>Shipment Search</span>
        </div>
        <div className={!toggle ? "d-none" : ""}>
          <span>Shipment number</span>
        </div>
      </div>
      <textarea rows="7" cols="25" className={!toggle ? "d-none" : "m-auto"} style={{overflowY: "scroll", resize: "none"}}></textarea>
      <h2 className={!toggle ? "d-none" : ""}>Status</h2>
      <Row className={!toggle ? "d-none" : ""}>
          <div className='col-1'>
              <input type="checkbox" className='mt-2' name=" Auto Tendered" id="AutoTendered" />
          </div>
          <div className='col'>
              <label htmlFor="AutoTendered">AutoTendered</label>
          </div>
      </Row>
      <Row className={!toggle ? "d-none" : ""}>
          <div className='col-1'>
              <input type="checkbox" className='mt-2' name="Closed" id="Closed" />
          </div>
          <div className='col'>
              <label htmlFor="Closed">Closed</label>
          </div>
      </Row>
      <Row className={!toggle ? "d-none" : ""}>
          <div className='col-1'>
              <input type="checkbox" className='mt-2 mb-3' name="BOL" id="BOL"/>
          </div>
          <div className='col'>
              <label htmlFor="BOL">BOL</label>
          </div>
      </Row>

      <label htmlFor="ShipDate" className={!toggle ? "d-none" : ""}>Ship Date</label>
      <input type="text" name="ShipDate" id="ShipDate" className={!toggle ? "d-none" : ""}/>

      <label htmlFor="CreatedDate" className={!toggle ? "d-none" : ""}>Created Date</label>
      <input type="text" name="CreatedDate" id="CreatedDate" className={!toggle ? "d-none" : ""}/>

      <label htmlFor="ShipmentTerms" className={!toggle ? "d-none" : ""}>Shipment Terms</label>
      <select name="ShipmentTerms" id="ShipmentTerms" className={!toggle ? "d-none" : ""}>
          <option value=""></option>
      </select>
    </div>
  );
};

export default navBar;
