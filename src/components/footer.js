import React from "react";

const Footer = () => {
  return (
    <div className="container-fluid bg-black rounded-top-4">
      <footer className="container footer bg-black text-white">
        <div className="footer-content my-4">
          <p className="footer-text">
            &copy; {new Date().getFullYear()} Anil Paswan. All rights reserved.
            Location: India
          </p>
          <div className="social-links">
            <a
              href="https://github.com/anilpaswan619"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/anilpaswan619/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
          <p className="footer-note text-secondary w-50 text-center mx-auto">
            This site showcases my personal projects and professional work.
            Content may not be used without permission.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
