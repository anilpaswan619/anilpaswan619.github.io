import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="container-fluid bg-black rounded-top-4 empty-space-top-40">
      <footer className="container footer bg-black text-white">
        <div className="footer-content  py-5">
          <div className="mb-3">
            <nav className="footer-links d-flex justify-content-center gap-4 flex-wrap">
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="footer-link text-secondary small"
                style={{ cursor: "pointer", textDecoration: "none" }}
              >
                <i className="bi bi-person-circle me-1"></i>About
              </Link>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="footer-link text-secondary small"
                style={{ cursor: "pointer", textDecoration: "none" }}
              >
                <i className="bi bi-kanban me-1"></i>Projects
              </Link>
              <Link
                to="skills"
                smooth={true}
                duration={500}
                className="footer-link text-secondary small"
                style={{ cursor: "pointer", textDecoration: "none" }}
              >
                <i className="bi bi-lightning-charge me-1"></i>Skills
              </Link>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="footer-link text-secondary small"
                style={{ cursor: "pointer", textDecoration: "none" }}
              >
                <i className="bi bi-envelope-at me-1"></i>Contact
              </Link>
            </nav>
          </div>
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
            <div style={{ flex: 1, textAlign: "center" }}>
              <p
                className="footer-text mb-2 text-secondary small"
                style={{ fontSize: "0.95rem" }}
              >
                <span className="me-1">
                  &copy; {new Date().getFullYear()} Anil Paswan
                </span>
                <span className="ms-2">| India</span>
              </p>
              {/* <div className="social-links d-flex justify-content-center align-items-center gap-3 mb-2 mb-md-0">
                <a
                  href="https://github.com/anilpaswan619"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="GitHub"
                  className="footer-social-icon text-decoration-none"
                  aria-label="GitHub"
                >
                  <i className="bi bi-github"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/anil-paswan-91466578/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn"
                  className="footer-social-icon text-decoration-none"
                  aria-label="LinkedIn"
                >
                  <i className="bi bi-linkedin"></i>
                </a>
              </div> */}
            </div>
          </div>
          <p
            className="footer-note text-secondary w-75 text-center mx-auto small"
            style={{ fontSize: "0.93rem", marginTop: "0.7rem" }}
          >
            This portfolio showcases my professional journey, skills, and
            selected projects.
            <br />
            <span className="d-inline-block mt-1">
              Let’s connect for collaboration or opportunities!
            </span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
