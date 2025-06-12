import React from "react";

const Footer = () => {
  return (
    <div className="container-fluid bg-black rounded-top-4 empty-space-top-40">
      <footer className="container footer bg-black text-white">
        <div className="footer-content my-4 py-5">
          <p className="footer-text mb-2">
            &copy; {new Date().getFullYear()} Anil Paswan. All rights reserved.{" "}
            <span className="ms-2">| India</span>
          </p>
          <p className="footer-note text-secondary w-75 text-center mx-auto">
            This portfolio showcases my professional journey, skills, and
            selected projects. Please contact me for collaboration or
            opportunities.
          </p>
          <div className="social-links d-flex justify-content-center align-items-center mt-4 gap-3">
            <a
              href="https://github.com/anilpaswan619"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
            >
              <i className="bi bi-github fs-3"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/anilpaswan619/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
            >
              <i className="bi bi-linkedin fs-3"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
