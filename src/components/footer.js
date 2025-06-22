import React, { useState, useEffect } from "react";

const Footer = () => {
  const [animate, setAnimate] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Intersection Observer for scroll-triggered animations
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setAnimate(true), 100);
        }
      },
      { threshold: 0.1 }
    );

    const footerElement = document.getElementById("footer-section");
    if (footerElement) {
      observer.observe(footerElement);
    }

    return () => observer.disconnect();
  }, []);

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Custom scroll with offset for sticky header
  const handleFooterLinkClick = (to, e) => {
    e.preventDefault();
    const el = document.getElementById(to);
    if (el) {
      const yOffset = -110;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // Use the same icons as in header/about for quickLinks and socialLinks
  const quickLinks = [
    { id: "description", label: "About", icon: "bi bi-person-circle" },
    { id: "projects", label: "Projects", icon: "bi bi-kanban" },
    { id: "skills", label: "Skills", icon: "bi bi-lightning-charge" },
    { id: "contact", label: "Contact", icon: "bi bi-envelope-at" },
  ];

  const socialLinks = [
    {
      href: "https://github.com/anilpaswan619",
      icon: "bi bi-github",
      label: "GitHub",
      color: "#333",
      hoverColor: "#6366F1",
    },
    {
      href: "https://www.linkedin.com/in/anil-paswan-91466578/",
      icon: "bi bi-linkedin",
      label: "LinkedIn",
      color: "#0077B5",
      hoverColor: "#EC4899",
    },
  ];

  return (
    <>
      <footer
        id="footer-section"
        style={{
          background:
            "linear-gradient(135deg, #0f0f23 0%, #1a1a2e 30%, #16213e 70%, #0f172a 100%)",
          color: "#fff",
          position: "relative",
          overflow: "hidden",
          paddingTop: "5rem",
          paddingBottom: "2rem",
          minHeight: "auto",
        }}
      >
        {/* Dynamic animated background with mouse interaction */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(99, 102, 241, 0.05), transparent 40%)`,
            pointerEvents: "none",
            transition: "background 0.3s ease",
          }}
        />

        {/* Enhanced animated background elements */}
        <div
          style={{
            position: "absolute",
            top: "-150px",
            left: "-150px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(99, 102, 241, 0.2) 0%, rgba(139, 92, 246, 0.1) 50%, transparent 70%)",
            filter: "blur(60px)",
            animation: "float 12s ease-in-out infinite",
            transform: isVisible ? "scale(1)" : "scale(0.8)",
            transition: "transform 2s ease-out",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-200px",
            right: "-200px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(236, 72, 153, 0.15) 0%, rgba(245, 158, 11, 0.08) 50%, transparent 70%)",
            filter: "blur(80px)",
            animation: "float 15s ease-in-out infinite reverse",
            transform: isVisible ? "scale(1)" : "scale(0.8)",
            transition: "transform 2s ease-out 0.5s",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "30%",
            right: "10%",
            width: "250px",
            height: "250px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(34, 197, 94, 0.1) 0%, transparent 70%)",
            filter: "blur(40px)",
            animation: "float 18s ease-in-out infinite",
            transform: isVisible ? "scale(1)" : "scale(0.8)",
            transition: "transform 2s ease-out 1s",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: "1200px",
            width: "100%",
            margin: "0 auto",
            padding: "0 2rem",
          }}
        >
          {/* Main Content Container with Enhanced Glassmorphism */}
          <div>
            {/* Enhanced decorative elements */}
            <div />
            <div
              style={{
                position: "absolute",
                bottom: "-30px",
                left: "-30px",
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #10B981, #3B82F6)",
                opacity: 0.06,
                animation: "rotate 30s linear infinite reverse",
                filter: "blur(15px)",
              }}
            />

            {/* Enhanced Brand Section */}
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "2rem",
                  transform: animate
                    ? "scale(1) translateY(0)"
                    : "scale(0.8) translateY(20px)",
                  transition:
                    "transform 1s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s",
                }}
              >
                <div
                  style={{
                    width: "72px",
                    height: "72px",
                    borderRadius: "20px",
                    background:
                      "linear-gradient(135deg, #6366F1 0%, #EC4899 50%, #F59E0B 100%)",
                    color: "#fff",
                    fontWeight: 900,
                    fontSize: "1.8rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: "20px",
                    letterSpacing: "0.05em",
                    boxShadow:
                      "0 20px 40px rgba(99, 102, 241, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: "0",
                      borderRadius: "20px",
                      background:
                        "linear-gradient(135deg, #6366F1, #EC4899, #F59E0B)",
                      animation: "pulse 4s ease-in-out infinite",
                      opacity: 0.3,
                    }}
                  />
                  <span style={{ position: "relative", zIndex: 1 }}>AP</span>
                  <div
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      width: "200%",
                      height: "200%",
                      background:
                        "linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent)",
                      transform: "translate(-50%, -50%) rotate(45deg)",
                      animation: "shimmer 3s ease-in-out infinite",
                    }}
                  />
                </div>
                <div>
                  <h2
                    style={{
                      fontWeight: 900,
                      fontSize: "2.5rem",
                      background:
                        "linear-gradient(135deg, #ffffff 0%, #e2e8f0 50%, #cbd5e1 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      margin: 0,
                      letterSpacing: "-0.02em",
                      textShadow: "0 0 40px rgba(255, 255, 255, 0.1)",
                    }}
                  >
                    Anil Paswan
                  </h2>
                  <p
                    style={{
                      background:
                        "linear-gradient(90deg, #6366F1, #EC4899, #F59E0B)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      fontSize: "1.1rem",
                      margin: 0,
                      fontWeight: 600,
                      letterSpacing: "0.02em",
                    }}
                  >
                    Frontend & UI Developer
                  </p>
                </div>
              </div>
            </div>

            {/* Enhanced Quick Links */}
            <div style={{ marginBottom: "3rem" }}>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div style={{ width: "100%", maxWidth: "800px" }}>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      justifyContent: "center",
                      gap: "1rem",
                    }}
                  >
                    {quickLinks.map((link, index) => (
                      <a
                        key={link.id}
                        href={`#${link.id}`}
                        style={{
                          padding: "16px 28px",
                          background: "rgba(255, 255, 255, 0.05)",
                          backdropFilter: "blur(15px)",
                          border: "1px solid rgba(255, 255, 255, 0.1)",
                          borderRadius: "16px",
                          color: "#CBD5E1",
                          fontWeight: 600,
                          fontSize: "1rem",
                          textDecoration: "none",
                          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "8px",
                          transform: animate
                            ? "translateY(0) scale(1)"
                            : "translateY(30px) scale(0.9)",
                          opacity: animate ? 1 : 0,
                          transitionDelay: `${1 + index * 0.1}s`,
                          position: "relative",
                          overflow: "hidden",
                        }}
                        onClick={(e) => handleFooterLinkClick(link.id, e)}
                        onMouseEnter={(e) => {
                          e.target.style.background =
                            "rgba(255, 255, 255, 0.1)";
                          e.target.style.color = "#ffffff";
                          e.target.style.transform =
                            "translateY(-6px) scale(1.05)";
                          e.target.style.borderColor =
                            "rgba(99, 102, 241, 0.4)";
                          e.target.style.boxShadow =
                            "0 15px 35px rgba(99, 102, 241, 0.25)";
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.background =
                            "rgba(255, 255, 255, 0.05)";
                          e.target.style.color = "#CBD5E1";
                          e.target.style.transform = "translateY(0) scale(1)";
                          e.target.style.borderColor =
                            "rgba(255, 255, 255, 0.1)";
                          e.target.style.boxShadow = "none";
                        }}
                      >
                        <i
                          className={link.icon}
                          style={{ fontSize: "1.1rem" }}
                        />
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Social Section */}
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "2rem",
                  flexWrap: "wrap",
                  marginBottom: "2rem",
                }}
              >
                {socialLinks.map((social, index) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.label}
                    style={{
                      width: "64px",
                      height: "64px",
                      borderRadius: "20px",
                      background: "rgba(255, 255, 255, 0.05)",
                      backdropFilter: "blur(15px)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#94A3B8",
                      fontSize: "1.7rem",
                      textDecoration: "none",
                      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                      transform: animate
                        ? "scale(1) translateY(0)"
                        : "scale(0.8) translateY(20px)",
                      opacity: animate ? 1 : 0,
                      transitionDelay: `${1.5 + index * 0.1}s`,
                      position: "relative",
                      overflow: "hidden",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = `linear-gradient(135deg, ${social.hoverColor}20, ${social.hoverColor}10)`;
                      e.target.style.color = social.hoverColor;
                      e.target.style.transform = "translateY(-8px) scale(1.15)";
                      e.target.style.borderColor = `${social.hoverColor}40`;
                      e.target.style.boxShadow = `0 20px 40px ${social.hoverColor}30`;
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = "rgba(255, 255, 255, 0.05)";
                      e.target.style.color = "#94A3B8";
                      e.target.style.transform = "translateY(0) scale(1)";
                      e.target.style.borderColor = "rgba(255, 255, 255, 0.1)";
                      e.target.style.boxShadow = "none";
                    }}
                  >
                    <i className={social.icon}></i>
                    <div
                      style={{
                        position: "absolute",
                        top: "-50%",
                        left: "-50%",
                        width: "200%",
                        height: "200%",
                        background: `linear-gradient(45deg, transparent, ${social.hoverColor}10, transparent)`,
                        transform: "rotate(45deg)",
                        transition: "transform 0.6s ease",
                        pointerEvents: "none",
                      }}
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* Enhanced Divider with Animation */}
            <div
              style={{
                height: "2px",
                background:
                  "linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.3), rgba(236, 72, 153, 0.3), rgba(245, 158, 11, 0.3), transparent)",
                margin: "3rem 0 2.5rem 0",
                position: "relative",
                borderRadius: "2px",
                opacity: animate ? 1 : 0,
                transition: "opacity 0.8s ease 1.9s",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #6366F1, #EC4899)",
                  boxShadow:
                    "0 0 25px rgba(99, 102, 241, 0.6), 0 0 50px rgba(236, 72, 153, 0.4)",
                  animation: "pulse 3s ease-in-out infinite",
                }}
              />
            </div>

            {/* Enhanced Bottom Section */}
            <div
              style={{
                textAlign: "center",
                opacity: animate ? 1 : 0,
                transform: animate ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.8s ease 2s",
              }}
            >
              <div
                style={{
                  fontSize: "1.1rem",
                  marginBottom: "1rem",
                  color: "#E2E8F0",
                  fontWeight: 600,
                }}
              >
                &copy; {new Date().getFullYear()} Anil Paswan. All rights
                reserved.
              </div>
              <div
                style={{
                  fontSize: "1rem",
                  color: "#94A3B8",
                  marginBottom: "1rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  flexWrap: "wrap",
                }}
              >
                Crafted with{" "}
                <span
                  style={{
                    color: "#EC4899",
                    fontSize: "1.2rem",
                    animation: "heartbeat 2.5s ease-in-out infinite",
                    filter: "drop-shadow(0 0 8px rgba(236, 72, 153, 0.5))",
                  }}
                >
                  ♥
                </span>{" "}
                for innovation, excellence & impact
              </div>
              <div
                style={{
                  fontSize: "1rem",
                  color: "#CBD5E1",
                  marginBottom: "1.5rem",
                  fontWeight: 400,
                  maxWidth: "600px",
                  margin: "0 auto 1.5rem",
                }}
              >
                This portfolio showcases my professional journey, technical
                expertise, and passion for creating remarkable digital
                experiences.
              </div>
              <div
                style={{
                  display: "inline-block",
                  fontSize: "1rem",
                  background:
                    "linear-gradient(135deg, #6366F1, #EC4899, #F59E0B, #10B981)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  fontWeight: 700,
                  padding: "8px 16px",
                  borderRadius: "12px",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(10px)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <span
                  style={{
                    background:
                      "linear-gradient(135deg, #6366F1, #EC4899, #F59E0B, #10B981)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  ✨ Open for collaboration & exciting opportunities! ✨
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
