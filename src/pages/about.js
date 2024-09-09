import React from "react";
import profilePic from "../assets/photo.jpg";

const About = () => {
  return (
    <div className="container empty-space-40 ">
      <div className="row align-items-center">
        <div className="col-md-6 text-center">
          <p className="fw-bold">Hello, I'm</p>
          <h2 className="fw-bold">Anil Paswan</h2>
          <h5 className="fw-light my-4">Frontend & UI Developer</h5>
          <div className="my-4">
            <a
              href=""
              download
              className="btn btn-outline-dark rounded-5 border-2 px-5 py-2 mt-3"
            >
              Download CV <i class="bi bi-download ps-2"></i>
            </a>
            <a
              href="#contact"
              className="btn btn-dark rounded-5 px-5 py-2 mt-3 ms-lg-3"
            >
              Contact Info
            </a>

            <div className="my-4">
              <a href="https://github.com/anilpaswan619" target="_blank">
                <i className="bi bi-github rounded-5 fs-2 text-black"></i>
              </a>
              <a href="">
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
    </div>
  );
};

export default About;
