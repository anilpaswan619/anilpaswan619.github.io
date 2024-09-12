import React from "react";

const Header = () => {
  return (
    <div className="container-fluid bg-black rounded-bottom-4 header-container">
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <a className="navbar-brand fw-bold logo" href="#">
            AP
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item px-4">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item px-4">
                <a className="nav-link" href="#projects">
                  Projects
                </a>
              </li>
              <li className="nav-item px-4">
                <a className="nav-link" href="#skills">
                  Skills
                </a>
              </li>
              <li className="nav-item px-4">
                <a className="nav-link" href="#contact">
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
