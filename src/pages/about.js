import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";

const techStack = [
  { icon: "bi bi-filetype-js", label: "JavaScript" },
  { icon: "bi bi-filetype-tsx", label: "React" },
  {
    icon: "typescript-svg",
    label: "Typescript",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#000"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect
          x="2"
          y="2"
          width="20"
          height="20"
          rx="4"
          stroke="#000"
          fill="none"
        />
        <text
          x="12"
          y="16"
          textAnchor="middle"
          fontFamily="Arial, Helvetica, sans-serif"
          fontWeight="bold"
          fontSize="10"
          fill="#000"
        >
          TS
        </text>
      </svg>
    ),
  },
  { icon: "bi bi-filetype-html", label: "HTML5" },
  { icon: "bi bi-filetype-css", label: "CSS3" },
  { icon: "bi bi-filetype-scss", label: "SCSS" },
  { icon: "bi bi-bootstrap", label: "Bootstrap" },
  {
    icon: "tailwind-svg",
    label: "Tailwind CSS",
    svg: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <path
            d="M24.004 13.5c-6.664 0-10.664 3.334-12 10 2-3.334 4.664-4.667 8-4 1.74.348 2.98 1.588 4.22 2.828C25.464 23.464 27.004 25 30.004 25c3.336 0 6-1.334 8-4-1.336-6.666-5.336-10-12-10zm-12 10c-6.664 0-10.664 3.334-12 10 2-3.334 4.664-4.667 8-4 1.74.348 2.98 1.588 4.22 2.828C13.464 33.464 15.004 35 18.004 35c3.336 0 6-1.334 8-4-1.336-6.666-5.336-10-12-10z"
            fill="#000"
          />
        </g>
      </svg>
    ),
  },
  // Add more as needed
];

const About = ({ descriptionRef }) => {
  // Simple typing animation for the title (replace with react-typed for more features)
  const [displayedTitle, setDisplayedTitle] = useState("");
  const fullTitle = "Frontend & UI Developer";
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedTitle(fullTitle.slice(0, i + 1));
      i++;
      if (i === fullTitle.length) clearInterval(interval);
    }, 60);
    return () => clearInterval(interval);
  }, []);

  const handleScrollToDescription = () => {
    if (descriptionRef?.current) {
      descriptionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="about" className="container empty-space-top-20 pb-5">
      <div className="row align-items-center">
        <div className="about-me-left-container col-md-6 text-center text-md-start px-4 py-4 d-flex flex-column justify-content-center">
          <p className="fw-bold intro-text mb-2 mt-2">Hello, I'm</p>
          <h3 className="fw-bold my-3 name-text text-body-secondary">
            Anil Paswan
          </h3>
          {/* Tech stack icon row */}
          <div className="d-flex gap-3 mb-3 mt-2 justify-content-center justify-content-md-start tech-stack-row">
            {techStack.map((tech) => (
              <span
                key={tech.label}
                className="tech-stack-icon d-flex align-items-center justify-content-center"
                title={tech.label}
              >
                {tech.svg ? tech.svg : <i className={`${tech.icon} fs-3`}></i>}
              </span>
            ))}
          </div>
          {/* Animated title */}
          <h1 className="fw-bold my-3 gradient-text title-text">
            <span className="typed-title">{displayedTitle}</span>
            <span className="typed-cursor">|</span>
          </h1>
          <div className="my-4 d-flex flex-column flex-md-row align-items-center gap-3">
            <a
              href="/assets/doc/Anil_Paswan_Frontend_Developer_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn hero-btn btn-outline-dark shadow-sm"
              style={{
                borderWidth: "2px",
                fontWeight: 600,
                background: "transparent",
                color: "#23232a",
              }}
            >
              Download CV <i className="bi bi-download ps-2 bold-icon"></i>
            </a>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="btn hero-btn btn-dark shadow-sm"
              style={{
                fontWeight: 600,
                background: "#23232a",
                color: "#fff",
                borderWidth: "2px",
                borderColor: "#23232a",
              }}
            >
              Contact Info
            </Link>
          </div>
          <div className="my-4 social-links d-flex justify-content-center justify-content-md-start gap-4">
            <div className="footer-icon-wrapper d-flex align-items-center justify-content-center">
              <a
                href="https://github.com/anilpaswan619"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
                className="footer-social-icon text-decoration-none"
              >
                <i className="bi bi-github"></i>
              </a>
            </div>
            <div className="footer-icon-wrapper d-flex align-items-center justify-content-center">
              <a
                href="https://www.linkedin.com/in/anil-paswan-91466578/"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                className="footer-social-icon text-decoration-none"
              >
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 text-center mb-4 mb-md-0">
          <img
            src="/assets/photo.jpg" // Replace with higher-res or illustration if available
            alt="Profile"
            className="img-fluid rounded-4 w-75 shadow-lg border border-4 border-white hero-headshot"
            style={{ maxWidth: "320px", objectFit: "cover" }}
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
