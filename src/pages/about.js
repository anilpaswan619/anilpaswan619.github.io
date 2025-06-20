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
        width="32"
        height="32"
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
        width="32"
        height="32"
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
      const yOffset = -100; // Adjust this value to match your header height or desired margin
      const y =
        descriptionRef.current.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // Animation state for slide-in effect
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    setTimeout(() => setAnimate(true), 100);
  }, []);

  return (
    <div id="about" className="container empty-space-top-20 pb-5">
      <div className="row align-items-center">
        <div
          className="about-me-left-container col-md-6 text-center text-md-start px-4 py-4 d-flex flex-column justify-content-center mt-lg-5"
          style={{
            transition:
              "transform 0.8s cubic-bezier(.4,2,.6,1), opacity 0.8s cubic-bezier(.4,2,.6,1)",
            transform: animate ? "translateX(0)" : "translateX(-60px)",
            opacity: animate ? 1 : 0,
          }}
        >
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
                {tech.svg ? tech.svg : <i className={`${tech.icon} fs-2`}></i>}
              </span>
            ))}
          </div>
          {/* Animated title */}
          <h1 className="fw-bold my-3 gradient-text title-text">
            <span className="typed-title">{displayedTitle}</span>
            <span className="typed-cursor" style={{ color: "#ff6b6b" }}>
              |
            </span>
          </h1>
          <div className="my-4 d-flex flex-column flex-md-row flex-wrap align-items-center gap-3">
            <a
              href="/assets/doc/Anil_Paswan_Frontend_Developer_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn hero-btn"
              style={{
                background: "linear-gradient(45deg, #ff6b6b, #f06595, #cc5de8)",
                color: "#fff",
                border: "none",
                borderRadius: "12px",
                fontWeight: 600,
                minWidth: "150px",
                padding: "0.8rem 2.2rem",
                fontSize: "1.08rem",
                boxShadow: "0 2px 8px rgba(255,107,107,0.07)",
                transition:
                  "background 0.22s, color 0.22s, transform 0.22s, box-shadow 0.22s cubic-bezier(.4,2,.6,1)",
                display: "flex",
                alignItems: "center",
                gap: "0.7rem",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background =
                  "linear-gradient(45deg, #6b6bff, #6595f0, #5de8cc)";
                e.currentTarget.style.color = "#fff";
                e.currentTarget.style.transform =
                  "translateY(-2px) scale(1.04)";
                e.currentTarget.style.boxShadow =
                  "0 4px 16px rgba(102,16,242,0.13)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background =
                  "linear-gradient(45deg, #ff6b6b, #f06595, #cc5de8)";
                e.currentTarget.style.color = "#fff";
                e.currentTarget.style.transform = "";
                e.currentTarget.style.boxShadow =
                  "0 2px 8px rgba(255,107,107,0.07)";
              }}
            >
              <i className="bi bi-download"></i>
              View Resume
            </a>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="btn hero-btn"
              style={{
                background: "#fff",
                color: "#23232a",
                border: "1.5px solid #e0e0e0",
                borderRadius: "12px",
                fontWeight: 600,
                minWidth: "150px",
                padding: "0.8rem 2.2rem",
                fontSize: "1.08rem",
                boxShadow: "0 2px 8px rgba(60,64,67,0.07)",
                transition:
                  "background 0.22s, color 0.22s, transform 0.22s, box-shadow 0.22s cubic-bezier(.4,2,.6,1)",
                display: "flex",
                alignItems: "center",
                gap: "0.7rem",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#23232a";
                e.currentTarget.style.color = "#fff";
                e.currentTarget.style.transform =
                  "translateY(-2px) scale(1.04)";
                e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.13)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#fff";
                e.currentTarget.style.color = "#23232a";
                e.currentTarget.style.transform = "";
                e.currentTarget.style.boxShadow =
                  "0 2px 8px rgba(60,64,67,0.07)";
              }}
            >
              <i className="bi bi-envelope-at"></i>
              Contact Me
            </Link>
          </div>
          <div className=" social-links d-flex justify-content-center justify-content-md-start gap-4">
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
        {/* Right: Illustration or Profile */}
        <div
          className="col-md-6 text-center mb-4 mb-md-0 d-flex align-items-center justify-content-center"
          style={{
            transition:
              "transform 0.8s cubic-bezier(.4,2,.6,1), opacity 0.8s cubic-bezier(.4,2,.6,1)",
            transform: animate ? "translateX(0)" : "translateX(60px)",
            opacity: animate ? 1 : 0,
          }}
        >
          <div
            style={{
              background: "linear-gradient(135deg, #232329 60%, #18181b 100%)",
              borderRadius: "26px",
              boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
              border: "1.5px solid #23232a",
              padding: "2.5rem 1.5rem",
              width: "100%",
              maxWidth: 370,
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "relative",
              zIndex: 1,
              overflow: "hidden",
            }}
          >
            {/* Decorative gradient circle */}
            <div
              style={{
                position: "absolute",
                bottom: -60,
                left: -60,
                width: 180,
                height: 180,
                borderRadius: "50%",
                background:
                  "radial-gradient(circle at 60% 40%, #ff6b6b 0%, #232329 80%)",
                opacity: 0.13,
                zIndex: 0,
              }}
            ></div>
            <img
              src="/assets/photo.jpg"
              alt="Profile"
              className="img-fluid rounded-4 shadow-lg border border-4 border-white hero-headshot"
              style={{
                maxWidth: "220px",
                objectFit: "cover",
                marginBottom: "1.2rem",
                border: "4px solid #fff",
                boxShadow: "0 8px 32px rgba(0,0,0,0.13)",
                zIndex: 1,
              }}
            />
            <div
              style={{
                color: "#b1b1b1",
                fontSize: "1.08rem",
                fontWeight: 400,
                lineHeight: 1.7,
                marginTop: "0.5rem",
                textAlign: "center",
                zIndex: 1,
              }}
            >
              <span
                style={{
                  fontWeight: 600,
                  background:
                    "linear-gradient(90deg, #ff6b6b, #f06595, #cc5de8)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  display: "inline-block",
                }}
              >
                "Passionate about UI, code, and user experience."
              </span>
            </div>
          </div>
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
