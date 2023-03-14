import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { logout } from "../../../services/auth";
import { getHeaderAccess } from "../../../utils/helpers";

export default function Header(props) {
  let header = getHeaderAccess();

  const [isLoggedIn, setIsLoginIn] = useState(false);

  useEffect(() => {
    console.log('header',header);
    if(header){
      setIsLoginIn(true);
    }else{
      setIsLoginIn(false);
    }
  }, [header])
  return (
    <div>
      {/* Header Start */}
      <div className="header-area">
        <div className="main-header ">
          <div className="header-mid d-none d-md-block">
            <div className="container">
              <div className="row d-flex align-items-center">
                {/* Logo */}
                <div className="col-xl-3 col-lg-3 col-md-3">
                  <div className="logo">
                    <a href="index.html">
                      <img src="assets/img/logo/logo.png" alt="" />
                    </a>
                  </div>
                </div>
                <div className="col-xl-9 col-lg-9 col-md-9">
                  <div className="header-banner f-right ">
                    <img src="assets/img/hero/header_card.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="header-bottom header-sticky">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-10 col-lg-10 col-md-12 header-flex">
                  {/* sticky */}
                  <div className="sticky-logo">
                    <a href="index.html">
                      <img src="assets/img/logo/logo.png" alt="" />
                    </a>
                  </div>
                  {/* Main-menu */}
                  <div className="main-menu d-none d-md-block">
                    <nav>
                      {/* <ul id="navigation">
                        <li>
                          <a href="index.html">Home</a>
                        </li>
                        <li>
                          <a href="categori.html">Category</a>
                        </li>
                        <li>
                          <a href="about.html">About</a>
                        </li>
                        <li>
                          <a href="latest_news.html">Latest News</a>
                        </li>
                        <li>
                          <a href="contact.html">Contact</a>
                        </li>
                        <li>
                          <a href="#">Pages</a>
                          <ul className="submenu">
                            <li>
                              <a href="elements.html">Element</a>
                            </li>
                            <li>
                              <a href="blog.html">Blog</a>
                            </li>
                            <li>
                              <a href="single-blog.html">Blog Details</a>
                            </li>
                            <li>
                              <a href="details.html">Categori Details</a>
                            </li>
                          </ul>
                        </li>
                      </ul> */}
                      
                      <div className="navbar-collapse collapse show" id="navbar-list-4">
                        {isLoggedIn ? 
                        <ul className="navbar-nav">
                          <li className="nav-item dropdown">
                            <a
                              className="nav-link dropdown-toggle"
                              href="#"
                              id="navbarDropdownMenuLink"
                              role="button"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <img
                                src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/fox.jpg"
                                width="40"
                                height="40"
                                className="rounded-circle"
                              />
                            </a>
                            <div
                              className="dropdown-menu"
                              aria-labelledby="navbarDropdownMenuLink"
                            >
                              
                              <a className="dropdown-item" href="#">
                                Setting
                              </a>
                              <button className="dropdown-item" onClick={() => logout()}>
                                Log Out
                              </button>
                            </div>
                          </li>
                        </ul>
                         :  <ul id="navigation">
                         <li>
                           <Link to={'/login'}>Login </Link>
                         </li>
                         <li>
                           <Link to={'/register'}>Sign Up</Link>
                         </li></ul> }

                      </div>
                    </nav>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-4">
                  <div className="header-right-btn f-right d-none d-lg-block">
                    <i className="fas fa-search special-tag" />
                    <div className="search-box">
                      <form action="#">
                        <input type="text" placeholder="Search" />
                      </form>
                    </div>
                  </div>
                </div>
                {/* Mobile Menu */}
                <div className="col-12">
                  <div className="mobile_menu d-block d-md-none" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Header End */}
    </div>
  );
}
