import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const NOTIFICATIONS = [
  {
    message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    createdAt: "Wed Mar 02 2022 18:25:20 GMT+0500 (Pakistan Standard Time)",
  },
];

export default function NotificationMenu() {
  return (
    <div>
      <button className="btn-link nav-link nav-link-label" data-toggle="dropdown">
        <i className="fas fa-bell" />
        <span className="badge badge-pill badge-default badge-accent badge-default badge-up">1</span>
      </button>
      <ul className="dropdown-menu dropdown-menu-media dropdown-menu-right">
        <li className="dropdown-menu-header">
          <h6 className="dropdown-header m-0">
            <span className="grey darken-2">Notifications</span>
          </h6>
        </li>
        <li
          className="scrollable-container media-list ps-container ps-theme-dark ps-active-y"
          data-ps-id="a385dd14-315a-f80c-bd87-398bda7b376e"
        >
          {NOTIFICATIONS?.length > 0 ? (
            NOTIFICATIONS?.map((el, i) => (
              <Link key={i} to="/">
                <div className="media">
                  <div className="media-left">
                    <i className="fas fa-circle" />
                  </div>
                  <div className="media-body">
                    <p className="notification-text font-small-3 text-muted">{el?.message}</p>
                    <div className="notification-below-info">
                      <small>
                        <time className="media-meta" dateTime="2015-06-11T18:29:20+08:00">
                          {moment(el?.createdAt).format("hh:mm:ss A")}
                        </time>
                      </small>
                      <small>
                        <time className="media-meta" dateTime="2015-06-11T18:29:20+08:00">
                          {moment(el?.createdAt).format("hh:mm:ss A")}
                        </time>
                      </small>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="media">No Notifications</div>
          )}
          <div className="ps-scrollbar-x-rail" style={{ left: "0px", bottom: "3px" }}>
            <div className="ps-scrollbar-x" tabIndex={0} style={{ left: "0px", width: "0px" }} />
          </div>
          <div className="ps-scrollbar-y-rail" style={{ top: "0px", height: "255px", right: "0px" }}>
            <div className="ps-scrollbar-y" tabIndex={0} style={{ top: "0px", height: "132px" }} />
          </div>
        </li>
        <li className="dropdown-menu-footer">
          <Link className="dropdown-item notification text-center" to="/notifications">
            View All
          </Link>
        </li>
      </ul>
    </div>
  );
}
