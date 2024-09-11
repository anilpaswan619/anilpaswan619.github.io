import React from "react";
import profilePic from "../assets/photo.jpg";

const About = ({ descriptionRef }) => {
  const handleScrollToDescription = () => {
    if (descriptionRef.current) {
      descriptionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="container empty-space-40 ">
      <div className="row align-items-center pb-5">
        <div className="col-md-6 text-center">
          <p className="fw-bold intro-text">Hello, I'm</p>
          <h3 className="fw-bold my-4 name-text text-body-secondary">
            Anil Paswan
          </h3>
          <h1 className="fw-bold my-4 gradient-text title-text">
            Frontend & UI Developer
          </h1>
          <div className="my-4">
            <a
              href=""
              download
              className="btn btn-outline-dark rounded-5 border-2 px-4 py-2 mt-3 fw-bold download-btn"
            >
              Download CV <i className="bi bi-download ps-2"></i>
            </a>
            <a
              href="#contact"
              className="btn btn-dark rounded-5 border-3 px-5 py-2 mt-3 ms-lg-3 fw-bold contact-btn"
            >
              Contact Info
            </a>

            <div className="my-5 social-icons">
              <a
                href="https://github.com/anilpaswan619"
                target="_blank"
                title="Github"
                className="social-icon"
              >
                <i className="bi bi-github rounded-5 fs-2 text-black"></i>
              </a>
              <a href="" title="LinkedIn" className="social-icon">
                <i className="bi bi-linkedin rounded-5 fs-2 text-black ms-lg-4"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 text-center mb-4 mb-md-0">
          <img
            src={profilePic}
            alt="Profile"
            className="img-fluid rounded-circle border border-black border-0 w-50"
          />
        </div>
      </div>
      <div className="container_mouse mx-auto empty-space-top-20 scroll-container">
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
