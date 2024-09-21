import React from "react";

const Footer = () => {
  return (
    <div className="container-fluid bg-black">
      <footer className="container footer bg-black text-white">
        <div className="footer-content">
          <p>
            &copy; {new Date().getFullYear()} Anil Paswan. All rights reserved.
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
        </div>
      </footer>
    </div>
  );
};

export default Footer;
