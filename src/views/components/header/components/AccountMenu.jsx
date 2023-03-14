import React from "react";
import { Link } from "react-router-dom";

export default function AccountMenu() {
  return (
    <div>
      <Link className="dropdown-toggle nav-link dropdown-user-link" href="#" data-toggle="dropdown">
        <span className="avatar avatar-online">
          <img src="app-assets/images/portrait/small/avatar-s-1.png" alt="avatar" />
        </span>
        <div className="logged-user">
          <span className="user-name d-block m-0">Mian Touqeer Hussain</span>
          <span className="loggedEmail accent-color">touqeerh7@gmail.com</span>
        </div>
      </Link>
      <div className="dropdown-menu dropdown-menu-right">
        <Link className="dropdown-item" to="/profile">
          <i className="far fa-user" />
          Profile
        </Link>
        <Link
          className="dropdown-item"
          to="/"
          onClick={() => {
            localStorage.clear();
            window.location.reload();
          }}
        >
          <i className="fas fa-sign-out-alt" />
          Logout
        </Link>
      </div>
    </div>
  );
}
