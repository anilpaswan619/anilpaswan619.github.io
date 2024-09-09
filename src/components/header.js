import React from "react";

const Header = () => {
  return (
    <div className="container-fluid bg-dark rounded-bottom-4">
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <a className="navbar-brand fw-bold" href="">
            AP
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item px-5">
                <a className="nav-link" href="">
                  About
                </a>
              </li>
              <li className="nav-item px-5">
                <a className="nav-link" href="">
                  Projects
                </a>
              </li>
              <li className="nav-item px-5">
                <a className="nav-link" href="">
                  Skills
                </a>
              </li>
              <li className="nav-item px-5">
                <a className="nav-link" href="">
                  Contact Me
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
