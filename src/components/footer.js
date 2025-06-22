import React from "react";

const Footer = () => {
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

  return (
    <footer
      className="footer w-100 position-relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #151e2e 0%, #232b3e 100%)",
        color: "#fff",
        padding: "0",
        borderRadius: "0",
        minHeight: "380px",
        borderTop: "1px solid #232b3e",
      }}
    >
      {/* Decorative background gradients */}
      <div
        className="position-absolute"
        style={{
          top: "-80px",
          left: "-120px",
          width: "320px",
          height: "320px",
          background: "radial-gradient(circle, #3b82f6 0%, transparent 70%)",
          filter: "blur(40px)",
          opacity: 0.18,
          zIndex: 0,
        }}
      />
      <div
        className="position-absolute"
        style={{
          bottom: "-120px",
          right: "-120px",
          width: "420px",
          height: "420px",
          background: "radial-gradient(circle, #8b5cf6 0%, transparent 70%)",
          filter: "blur(60px)",
          opacity: 0.16,
          zIndex: 0,
        }}
      />

      <div
        className="container"
        style={{
          position: "relative",
          zIndex: 2,
          paddingTop: "3.5rem",
          paddingBottom: "2.5rem",
          maxWidth: "900px",
        }}
      >
        {/* Brand & tagline */}
        <div className="text-center mb-4">
          <div className="d-flex align-items-center justify-content-center mb-2">
            <span
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "12px",
                background: "linear-gradient(135deg, #6366F1, #EC4899)",
                color: "#fff",
                fontWeight: 700,
                fontSize: "1.3rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginRight: "12px",
                letterSpacing: "0.04em",
              }}
            >
              AP
            </span>
            <span
              style={{
                fontWeight: 700,
                fontSize: "1.25rem",
                color: "#fff",
                letterSpacing: "0.01em",
              }}
            >
              Anil Paswan
            </span>
          </div>
          <div
            style={{
              color: "#d1d5db",
              fontSize: "1rem",
              maxWidth: "420px",
              margin: "0 auto",
              fontWeight: 400,
              lineHeight: 1.6,
            }}
          >
            Full-stack developer passionate about creating innovative solutions
            and exceptional user experiences.
          </div>
        </div>

        {/* Quick Links */}
        <div className="row justify-content-center mb-4">
          <div className="col-12 col-md-10">
            <div className="row text-center">
              <div className="col-6 col-md-3 mb-2">
                <a
                  href="#description"
                  className="text-decoration-none"
                  style={{
                    color: "#d1d5db",
                    fontWeight: 500,
                    fontSize: "1rem",
                    transition: "color 0.2s",
                  }}
                  onClick={(e) => handleFooterLinkClick("description", e)}
                  onMouseEnter={(e) => (e.target.style.color = "#60a5fa")}
                  onMouseLeave={(e) => (e.target.style.color = "#d1d5db")}
                >
                  About
                </a>
              </div>
              <div className="col-6 col-md-3 mb-2">
                <a
                  href="#projects"
                  className="text-decoration-none"
                  style={{
                    color: "#d1d5db",
                    fontWeight: 500,
                    fontSize: "1rem",
                    transition: "color 0.2s",
                  }}
                  onClick={(e) => handleFooterLinkClick("projects", e)}
                  onMouseEnter={(e) => (e.target.style.color = "#60a5fa")}
                  onMouseLeave={(e) => (e.target.style.color = "#d1d5db")}
                >
                  Projects
                </a>
              </div>
              <div className="col-6 col-md-3 mb-2">
                <a
                  href="#skills"
                  className="text-decoration-none"
                  style={{
                    color: "#d1d5db",
                    fontWeight: 500,
                    fontSize: "1rem",
                    transition: "color 0.2s",
                  }}
                  onClick={(e) => handleFooterLinkClick("skills", e)}
                  onMouseEnter={(e) => (e.target.style.color = "#60a5fa")}
                  onMouseLeave={(e) => (e.target.style.color = "#d1d5db")}
                >
                  Skills
                </a>
              </div>
              <div className="col-6 col-md-3 mb-2">
                <a
                  href="#contact"
                  className="text-decoration-none"
                  style={{
                    color: "#d1d5db",
                    fontWeight: 500,
                    fontSize: "1rem",
                    transition: "color 0.2s",
                  }}
                  onClick={(e) => handleFooterLinkClick("contact", e)}
                  onMouseEnter={(e) => (e.target.style.color = "#60a5fa")}
                  onMouseLeave={(e) => (e.target.style.color = "#d1d5db")}
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Social & Location */}
        <div className="text-center mb-4">
          <div
            style={{
              fontWeight: 600,
              fontSize: "1.15rem",
              marginBottom: "0.7rem",
              color: "#fff",
            }}
          >
            Let's Connect
          </div>
          <div className="d-flex justify-content-center gap-3 mb-2">
            <a
              href="https://github.com/anilpaswan619"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "10px",
                background: "#232b3e",
                color: "#d1d5db",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.3rem",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "#3b82f6";
                e.target.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "#232b3e";
                e.target.style.color = "#d1d5db";
              }}
            >
              <i className="bi bi-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/anil-paswan-91466578/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "10px",
                background: "#232b3e",
                color: "#d1d5db",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.3rem",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "#3b82f6";
                e.target.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "#232b3e";
                e.target.style.color = "#d1d5db";
              }}
            >
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
          <div
            style={{
              color: "#d1d5db",
              fontSize: "1rem",
              marginTop: "0.5rem",
              fontWeight: 400,
            }}
          >
            India
          </div>
        </div>

        {/* Divider */}
        <hr
          style={{
            border: "none",
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, #374151, transparent)",
            margin: "2rem 0 1.5rem 0",
          }}
        />

        {/* Bottom Section */}
        <div className="text-center" style={{ color: "#9ca3af" }}>
          <div style={{ fontSize: "0.95rem", marginBottom: "0.2rem" }}>
            &copy; {new Date().getFullYear()} Anil Paswan. All rights reserved.
          </div>
          <div
            style={{
              fontSize: "0.85rem",
              color: "#6b7280",
              marginBottom: "0.2rem",
            }}
          >
            Crafted with <span style={{ color: "#f87171" }}>♥</span> for
            innovation
          </div>
          <div style={{ fontSize: "0.95rem", color: "#b1b1b1" }}>
            This portfolio showcases my professional journey and selected
            projects.
          </div>
          <div
            style={{
              fontSize: "1rem",
              color: "#60a5fa",
              fontWeight: 600,
              marginTop: "0.2rem",
            }}
          >
            Open for collaboration &amp; opportunities!
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
