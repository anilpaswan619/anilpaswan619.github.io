import React from "react";
import profilePic from "../assets/Pic.JPG";

const About = () => {
  return (
    <div className="container empty-space-40">
      <div className="row align-items-center">
        <div className="col-md-6 text-center mb-4 mb-md-0">
          <img
            src={profilePic}
            alt="Profile"
            className="img-fluid rounded-circle border border-black border-3 w-50"
          />
        </div>
        <div className="col-md-6">
          <p className="fw-bold">Hello, I'm</p>
          <h1 className="fw-bold display-4">Anil Paswan</h1>
          <h2 className="fw-light text-secondary">Frontend & UI Developer</h2>
          <div className="my-4">
            <a
              href=""
              download
              className="btn btn-outline-dark rounded-5 border-2 px-5 py-2 mt-3"
            >
              Download CV
            </a>
            <a
              href="#contact"
              className="btn btn-dark rounded-5 px-5 py-2 mt-3 ms-3"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
