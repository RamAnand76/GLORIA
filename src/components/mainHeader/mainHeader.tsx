import React from 'react';

export const Header = () => {
  return (
    <div className="main-header">
      <div className="main-header-logo">
        {/* Logo Header */}
        <div className="logo-header" style={{ backgroundColor: '#07283b' }}>
          <a href="index.html" className="logo">
            <img
              src="assets/img/kaiadmin/LOGO.jpg"
              alt="navbar brand"
              className="navbar-brand"
              height="20"
            />
          </a>
        <div className="nav-toggle">
                  <button className="btn btn-toggle toggle-sidebar">
                    <i className="gg-menu-right"></i>
                  </button>
                  <button className="btn btn-toggle sidenav-toggler">
                    <i className="gg-menu-left"></i>
                  </button>
                </div>
          {/* <button className="topbar-toggler more">
                <i className="gg-more-vertical-alt"></i>
              </button> */}
        </div>
        {/* End Logo Header */}
      </div>
      {/* Navbar Header */}
      <nav className="navbar navbar-header navbar-header-transparent navbar-expand-lg border-bottom">
        <div className="container-fluid">
          <ul className="navbar-nav topbar-nav ms-md-auto align-items-center">
            <li className="nav-item topbar-user dropdown hidden-caret">
              <a
                className="dropdown-toggle profile-pic"
                data-bs-toggle="dropdown"
                href="#"
                aria-expanded="false"
              >
                <div className="avatar-sm">
                  <img
                    src="assets/img/profile.jpg"
                    alt="..."
                    className="avatar-img rounded-circle"
                  />
                </div>
                <span className="profile-username">
                  <span className="op-7">Hi,</span>
                  <span className="fw-bold">Admin</span>
                </span>
              </a>
              <ul className="dropdown-menu dropdown-user animated fadeIn">
                <div className="dropdown-user-scroll scrollbar-outer">
                  <li>
                    <div className="user-box">
                      <div className="avatar-lg">
                        <img
                          src="assets/img/profile.jpg"
                          alt="image profile"
                          className="avatar-img rounded"
                        />
                      </div>
                      <div className="u-text">
                        <h4>Gloria</h4>
                        <p className="text-muted">gloria@example.com</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <a className="dropdown-item text-danger" href="#">
                      Logout
                    </a>
                  </li>
                </div>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
      {/* End Navbar */}
    </div>
  );
};
export default Header;
