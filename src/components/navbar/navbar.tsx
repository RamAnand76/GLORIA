import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div>
      {/* Sidebar */}
      <div className="sidebar" style={{ backgroundColor: '#07283b' }}>
        <div className="sidebar-logo">
          {/* Logo Header */}
          <div className="logo-header" style={{ backgroundColor: '#07283b' }}>
            <a href="index.html" className="logo">
              <img
                src="assets/img/kaiadmin/LOGO.jpg"
                alt="navbar brand"
                className="navbar-brand"
                height="70"
              />
            </a>
            <div className="nav-toggle">
              {/* <button className="btn btn-toggle toggle-sidebar">
                <i className="gg-menu-right"></i>
              </button> */}
              <button className="btn btn-toggle sidenav-toggler">
                <i className="gg-menu-left"></i>
              </button>
            </div>
            <button className="topbar-toggler more">
              <i className="gg-more-vertical-alt"></i>
            </button>
          </div>
          {/* End Logo Header */}
        </div>
        <div className="sidebar-wrapper scrollbar scrollbar-inner">
          <div className="sidebar-content">
            <ul className="nav nav-secondary">
              <li className="nav-item active">
                <Link className="text-white" to="/">
                  <i className="fas fa-home"></i>
                  Dashboard
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="text-white" to="/employees">
                  <i className="fas fa-user"></i>Employees
                </Link>
              </li>
              <li className="nav-item">
                <Link className="text-white" to="/students">
                  <i className="fas fa-graduation-cap"></i>
                  Students
                </Link>
              </li>
              <li className="nav-item">
                <Link className="text-white" to="/reports">
                  <i className="fas fa-pen-square"></i>
                  Reports
                <span className="badge badge-danger">4</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="text-white" to="/coursesAndColleges">
                  <i className="fas fa-school"></i>
                  Colleges & Courses
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* End Sidebar */}
    </div>
  );
};
export default Navbar;
