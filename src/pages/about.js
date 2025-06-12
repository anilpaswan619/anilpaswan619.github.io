import React from "react";
import profilePic from "../assets/photo.jpg";
import { Link } from "react-scroll";

const About = ({ descriptionRef }) => {
  const handleScrollToDescription = () => {
    if (descriptionRef.current) {
      descriptionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="about" className="container empty-space-40">
      <div className="row align-items-center pb-5">
        <div className="col-md-6 text-center text-md-start">
          <p className="fw-bold intro-text mb-2">Hello, I'm</p>
          <h3 className="fw-bold my-3 name-text text-body-secondary">
            Anil Paswan
          </h3>
          <h1 className="fw-bold my-3 gradient-text title-text">
            Frontend & UI Developer
          </h1>
          <div className="my-4 d-flex flex-column flex-md-row align-items-center gap-3">
            <a
              href="/assets/doc/Anil_Paswan_Frontend_Developer_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-dark rounded-5 border-2 px-4 py-2 fw-bold download-btn"
            >
              Download CV <i className="bi bi-download ps-2 bold-icon"></i>
            </a>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="btn btn-dark rounded-5 border-3 px-5 py-2 fw-bold contact-btn"
              style={{ cursor: "pointer" }}
            >
              Contact Info
            </Link>
          </div>
          <div className="my-4 social-icons d-flex justify-content-center justify-content-md-start gap-4">
            <a
              href="https://github.com/anilpaswan619"
              target="_blank"
              rel="noreferrer"
              title="Github"
              className="social-icon"
            >
              <i className="bi bi-github rounded-5 fs-2 text-black"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/anil-paswan-91466578/"
              target="_blank"
              rel="noreferrer"
              title="LinkedIn"
              className="social-icon"
            >
              <i className="bi bi-linkedin rounded-5 fs-2 text-black"></i>
            </a>
          </div>
        </div>
        <div className="col-md-6 text-center mb-4 mb-md-0">
          <img
            src={profilePic}
            alt="Profile"
            className="img-fluid rounded-circle w-75 shadow-lg border border-4 border-white"
            style={{ maxWidth: "320px" }}
          />
        </div>
      </div>
      <div className="container_mouse mx-auto scroll-container">
        <span
          className="mouse-btn scroll-btn"
          onClick={handleScrollToDescription}
        >
          <span className="mouse-scroll"></span>
        </span>
        <span className="scroll-text">Scroll Down</span>
      </div>
    </div>
  );
};

export default About;
