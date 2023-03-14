import React from "react";
import { Link } from "react-router-dom";

export default function SideMenu() {
  console.log("SIDE MENU");
  return (
    <div className="main-menu menu-fixed menu-light menu-accordion" data-scroll-to-active="true">
      <div className="main-menu-content">
        <ul className="navigation navigation-main" id="main-menu-navigation" data-menu="menu-navigation">
          <li className="nav-item ">
            "&gt;
            <Link to="/">
              <img src="images/contentManagement.png" alt="" className="img-fluid mr-1" />
              <span className="menu-title">Content Management</span>
            </Link>
          </li>
          <li className="nav-item">
            "&gt;
            <Link to="/form-management">
              <img src="images/formManagement.png" alt="" className="img-fluid mr-1" />
              <span className="menu-title">Form Management</span>
            </Link>
          </li>
          <li className="nav-item ">
            "&gt;
            <Link to="/form/logs">
              <img src="images/formLogs.png" alt="" className="img-fluid mr-1" />
              <span className="menu-title" data-i18n>
                Form Logs
              </span>
            </Link>
          </li>
          <li className="nav-item ">
            "&gt;
            <Link to="/newsletter">
              <img src="images/newsletter.png" alt="" className="img-fluid mr-1" />
              <span className="menu-title" data-i18n>
                Newsletter
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
