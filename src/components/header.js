import React from "react";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div className="container-fluid bg-black rounded-bottom-4 header-container">
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <a className="navbar-brand text-white fw-bold logo" href="#">
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
                <Link
                  className="nav-link"
                  to="about"
                  smooth={true}
                  duration={500}
                >
                  About
                </Link>
              </li>
              <li className="nav-item px-4">
                <Link
                  className="nav-link"
                  to="projects"
                  smooth={true}
                  duration={500}
                >
                  Projects
                </Link>
              </li>
              <li className="nav-item px-4">
                <Link
                  className="nav-link"
                  to="skills"
                  smooth={true}
                  duration={500}
                >
                  Skills
                </Link>
              </li>
              <li className="nav-item px-4">
                <Link
                  className="nav-link"
                  to="contact"
                  smooth={true}
                  duration={500}
                >
                  Contact Me
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
