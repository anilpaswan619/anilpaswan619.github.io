import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";

const techStack = [
  { icon: "bi bi-filetype-js", label: "JavaScript", color: "#F7DF1E" },
  { icon: "bi bi-filetype-tsx", label: "React", color: "#61DAFB" },
  {
    icon: "typescript-svg",
    label: "Typescript",
    color: "#3178C6",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
      >
        <rect x="2" y="2" width="20" height="20" rx="4" fill="#3178C6" />
        <text
          x="12"
          y="16"
          textAnchor="middle"
          fontFamily="Arial, Helvetica, sans-serif"
          fontWeight="bold"
          fontSize="10"
          fill="white"
        >
          TS
        </text>
      </svg>
    ),
  },
  { icon: "bi bi-filetype-html", label: "HTML5", color: "#E34F26" },
  { icon: "bi bi-filetype-css", label: "CSS3", color: "#1572B6" },
  { icon: "bi bi-filetype-scss", label: "SCSS", color: "#CF649A" },
  { icon: "bi bi-bootstrap", label: "Bootstrap", color: "#7952B3" },
  {
    icon: "tailwind-svg",
    label: "Tailwind CSS",
    color: "#06B6D4",
    svg: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24.004 13.5c-6.664 0-10.664 3.334-12 10 2-3.334 4.664-4.667 8-4 1.74.348 2.98 1.588 4.22 2.828C25.464 23.464 27.004 25 30.004 25c3.336 0 6-1.334 8-4-1.336-6.666-5.336-10-12-10zm-12 10c-6.664 0-10.664 3.334-12 10 2-3.334 4.664-4.667 8-4 1.74.348 2.98 1.588 4.22 2.828C13.464 33.464 15.004 35 18.004 35c3.336 0 6-1.334 8-4-1.336-6.666-5.336-10-12-10z"
          fill="#06B6D4"
        />
      </svg>
    ),
  },
];

const About = ({ descriptionRef }) => {
  const [displayedTitle, setDisplayedTitle] = useState("");
  const [animate, setAnimate] = useState(false);
  const [currentTechIndex, setCurrentTechIndex] = useState(0);

  const fullTitle = "Frontend & UI Developer";

  // Enhanced typing animation
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedTitle(fullTitle.slice(0, i + 1));
      i++;
      if (i === fullTitle.length) clearInterval(interval);
    }, 80);
    return () => clearInterval(interval);
  }, []);

  // Tech stack rotation animation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTechIndex((prev) => (prev + 1) % techStack.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 200);
  }, []);

  const handleScrollToDescription = () => {
    if (descriptionRef?.current) {
      const yOffset = -100;
      const y =
        descriptionRef.current.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div
      id="about"
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)",
        position: "relative",
        overflow: "hidden",
        paddingBottom: "4rem",
      }}
    >
      {/* Animated background elements */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          right: "10%",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 70%)",
          animation: "float 6s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "5%",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(236, 72, 153, 0.1) 0%, transparent 70%)",
          animation: "float 8s ease-in-out infinite reverse",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div className="row align-items-center min-vh-100">
          {/* Left Content */}
          <div
            className="col-lg-7 text-center text-lg-start px-4 py-4"
            style={{
              transform: animate
                ? "translateX(0) translateY(0)"
                : "translateX(-50px) translateY(20px)",
              opacity: animate ? 1 : 0,
              transition: "all 1s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            {/* Greeting with enhanced styling */}
            <div
              style={{
                display: "inline-block",
                padding: "8px 20px",
                background: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(10px)",
                borderRadius: "50px",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                marginBottom: "1.5rem",
              }}
            >
              <span
                style={{
                  fontSize: "1rem",
                  fontWeight: "500",
                  background: "linear-gradient(90deg, #60A5FA, #A78BFA)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                👋 Hello, I'm
              </span>
            </div>

            {/* Name with enhanced typography */}
            <h2
              style={{
                fontSize: "clamp(1.5rem, 5vw, 3.5rem)",
                fontWeight: "800",
                background: "linear-gradient(135deg, #ffffff 0%, #e2e8f0 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                marginBottom: "1rem",
                letterSpacing: "-0.02em",
              }}
            >
              Anil Paswan
            </h2>

            {/* Animated title with cursor */}
            <div style={{ marginBottom: "2rem" }}>
              <h1
                style={{
                  fontSize: "clamp(1rem, 4vw, 3rem)",
                  fontWeight: "700",
                  background:
                    "linear-gradient(135deg, #6366F1, #EC4899, #F59E0B)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  marginBottom: "0.5rem",
                }}
              >
                {displayedTitle}
                <span
                  style={{
                    color: "#EC4899",
                    animation: "blink 1s infinite",
                    marginLeft: "2px",
                  }}
                >
                  |
                </span>
              </h1>
              <p
                style={{
                  color: "#94A3B8",
                  fontSize: "1.1rem",
                  maxWidth: "500px",
                  lineHeight: "1.6",
                  margin: "0 auto",
                }}
              >
                Crafting beautiful, responsive web experiences with modern
                technologies
              </p>
            </div>

            {/* Enhanced tech stack */}
            <div style={{ marginBottom: "2.5rem" }}>
              <p
                style={{
                  color: "#CBD5E1",
                  fontSize: "0.9rem",
                  marginBottom: "1rem",
                  fontWeight: "500",
                }}
              >
                Technologies I work with
              </p>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "12px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {techStack.map((tech, index) => (
                  <div
                    key={tech.label}
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "12px",
                      background:
                        currentTechIndex === index
                          ? "rgba(255, 255, 255, 0.1)"
                          : "rgba(255, 255, 255, 0.05)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                      transform:
                        currentTechIndex === index ? "scale(1.1)" : "scale(1)",
                      boxShadow:
                        currentTechIndex === index
                          ? `0 8px 25px rgba(${
                              tech.color
                                ? parseInt(tech.color.slice(1, 3), 16)
                                : 255
                            }, ${
                              tech.color
                                ? parseInt(tech.color.slice(3, 5), 16)
                                : 255
                            }, ${
                              tech.color
                                ? parseInt(tech.color.slice(5, 7), 16)
                                : 255
                            }, 0.3)`
                          : "none",
                    }}
                    title={tech.label}
                  >
                    {tech.svg ? (
                      tech.svg
                    ) : (
                      <i
                        className={tech.icon}
                        style={{
                          fontSize: "1.5rem",
                          color: tech.color || "#94A3B8",
                        }}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced action buttons */}
            <div
              style={{
                display: "flex",
                flexDirection: window.innerWidth < 768 ? "column" : "row",
                gap: "1rem",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "2rem",
              }}
            >
              <a
                href="/resume/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "12px 28px",
                  background: "linear-gradient(135deg, #6366F1, #8B5CF6)",
                  color: "white",
                  textDecoration: "none",
                  borderRadius: "12px",
                  fontWeight: "600",
                  fontSize: "1rem",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  border: "none",
                  boxShadow: "0 4px 20px rgba(99, 102, 241, 0.3)",
                  minWidth: "160px",
                  justifyContent: "center",
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "translateY(-2px) scale(1.02)";
                  e.target.style.boxShadow =
                    "0 8px 30px rgba(99, 102, 241, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "translateY(0) scale(1)";
                  e.target.style.boxShadow =
                    "0 4px 20px rgba(99, 102, 241, 0.3)";
                }}
              >
                <i className="bi bi-download"></i>
                View Resume
              </a>

              <Link
                to="contact"
                smooth={true}
                duration={500}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "12px 28px",
                  background: "transparent",
                  color: "white",
                  textDecoration: "none",
                  borderRadius: "12px",
                  fontWeight: "600",
                  fontSize: "1rem",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  border: "2px solid rgba(255, 255, 255, 0.2)",
                  minWidth: "160px",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = "rgba(255, 255, 255, 0.1)";
                  e.target.style.transform = "translateY(-2px) scale(1.02)";
                  e.target.style.borderColor = "rgba(255, 255, 255, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = "transparent";
                  e.target.style.transform = "translateY(0) scale(1)";
                  e.target.style.borderColor = "rgba(255, 255, 255, 0.2)";
                }}
              >
                <i className="bi bi-envelope-at"></i>
                Contact Me
              </Link>
            </div>

            {/* Social links with enhanced styling */}
            <div
              style={{
                display: "flex",
                gap: "1rem",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {[
                {
                  href: "https://github.com/anilpaswan619",
                  icon: "bi bi-github",
                  label: "GitHub",
                },
                {
                  href: "https://www.linkedin.com/in/anil-paswan-91466578/",
                  icon: "bi bi-linkedin",
                  label: "LinkedIn",
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.label}
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "12px",
                    background: "rgba(255, 255, 255, 0.05)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#94A3B8",
                    fontSize: "1.2rem",
                    textDecoration: "none",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = "rgba(255, 255, 255, 0.1)";
                    e.target.style.color = "white";
                    e.target.style.transform = "translateY(-2px) scale(1.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = "rgba(255, 255, 255, 0.05)";
                    e.target.style.color = "#94A3B8";
                    e.target.style.transform = "translateY(0) scale(1)";
                  }}
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Right: Enhanced Profile Section */}
          <div
            className="col-lg-5 text-center"
            style={{
              transform: animate
                ? "translateX(0) translateY(0)"
                : "translateX(50px) translateY(20px)",
              opacity: animate ? 1 : 0,
              transition: "all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.2s",
            }}
          >
            <div
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(20px)",
                borderRadius: "24px",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                padding: "2.5rem 2rem",
                maxWidth: "400px",
                margin: "0 auto",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Decorative elements */}
              <div
                style={{
                  position: "absolute",
                  top: "-50px",
                  right: "-50px",
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #6366F1, #EC4899)",
                  opacity: 0.1,
                  animation: "rotate 20s linear infinite",
                }}
              />

              <div
                style={{
                  position: "relative",
                  zIndex: 2,
                }}
              >
                <div
                  style={{
                    width: "200px",
                    height: "200px",
                    borderRadius: "50%",
                    margin: "0 auto 1.5rem",
                    background: "linear-gradient(135deg, #6366F1, #EC4899)",
                    padding: "4px",
                    animation: "pulse 3s ease-in-out infinite",
                  }}
                >
                  <img
                    src="/assets/photo.jpg"
                    alt="Profile"
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "50%",
                      objectFit: "cover",
                      border: "4px solid rgba(255, 255, 255, 0.1)",
                    }}
                  />
                </div>

                <blockquote
                  style={{
                    fontSize: "1.1rem",
                    fontStyle: "italic",
                    color: "#E2E8F0",
                    lineHeight: "1.6",
                    margin: "0",
                    position: "relative",
                  }}
                >
                  <span
                    style={{
                      fontSize: "2rem",
                      color: "#6366F1",
                      position: "absolute",
                      top: "-10px",
                      left: "-10px",
                    }}
                  >
                    "
                  </span>
                  Passionate about creating exceptional user interfaces and
                  seamless digital experiences that make a difference.
                  <span
                    style={{
                      fontSize: "2rem",
                      color: "#6366F1",
                      position: "absolute",
                      bottom: "-20px",
                      right: "10px",
                    }}
                  >
                    "
                  </span>
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced scroll indicator */}
        <div
          className="d-none d-lg-block"
          style={{
            position: "absolute",
            bottom: "0px",
            left: "50%",
            transform: "translateX(-50%)",
            textAlign: "center",
            color: "#94A3B8",
          }}
        >
          <div
            onClick={handleScrollToDescription}
            style={{
              width: "30px",
              height: "50px",
              border: "2px solid rgba(255, 255, 255, 0.3)",
              borderRadius: "20px",
              margin: "0 auto 10px",
              position: "relative",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.borderColor = "rgba(255, 255, 255, 0.6)";
            }}
            onMouseLeave={(e) => {
              e.target.style.borderColor = "rgba(255, 255, 255, 0.3)";
            }}
          >
            <div
              style={{
                width: "4px",
                height: "8px",
                background: "linear-gradient(135deg, #6366F1, #EC4899)",
                borderRadius: "2px",
                position: "absolute",
                top: "8px",
                left: "50%",
                transform: "translateX(-50%)",
                animation: "scroll 2s ease-in-out infinite",
              }}
            />
          </div>
          <p
            style={{
              fontSize: "0.8rem",
              margin: 0,
              fontWeight: "500",
            }}
          >
            Scroll Down
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
