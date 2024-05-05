import React from 'react';
import { Link } from 'react-router-dom';
import {
  BsCart3,
} from 'react-icons/bs';

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className="sidebar-title">
        <div className="sidebar-brand">
          Logo
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>X</span>
      </div>
      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <Link to="/">
            <img src={window.location.origin + "/assets/icons/ai.svg"} className="sidebar-icon" alt="" /> All Tools
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/privacy-policy">
            <img src={window.location.origin + "/assets/icons/privacy.svg"} className="sidebar-icon" alt="" /> Privacy Policy
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/terms-conditions">
            <img src={window.location.origin + "/assets/icons/terms.svg"} className="sidebar-icon" alt="" /> Terms and Conditions
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/contact-us">
            <img src={window.location.origin + "/assets/icons/contact.svg"} className="sidebar-icon" alt="" /> Contact
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/">
            <img src={window.location.origin + "/assets/icons/logout.svg"} className="sidebar-icon" alt="" /> Log Out
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
