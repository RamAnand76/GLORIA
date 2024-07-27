import React from 'react';

export const Navbar = () => {
  return (
    <div>
      {/* Sidebar */}
      <div className="sidebar" style={{ backgroundColor: "#07283b" }}>
        <div className="sidebar-logo">
          {/* Logo Header */}
          <div className="logo-header" style={{ backgroundColor: "#07283b" }}>
            <a href="index.html" className="logo">
              <img src="assets/img/kaiadmin/LOGO.jpg" alt="navbar brand" className="navbar-brand" height="70" />
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
                <a href="#" aria-expanded="false">
                  <i className="fas fa-home"></i>
                  <p>Dashboard</p>
                </a>
              </li>
              <li className="nav-item ">
                <a href="#base">
                  <i className="fas fa-user"></i>
                  <p className='nav-employee'>Employees</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="#sidebarLayouts">
                  <i className="fas fa-graduation-cap"></i>
                  <p>Students</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="#forms">
                  <i className="fas fa-pen-square"></i>
                  <p>Reports</p>
                  <span className="badge badge-danger">4</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#tables">
                  <i className="fas fa-school"></i>
                  <p>Colleges & Courses</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* End Sidebar */}
    </div>
  );
}
export default Navbar