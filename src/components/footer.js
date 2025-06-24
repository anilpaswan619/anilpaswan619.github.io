import React, { useState, useEffect } from "react";

const Footer = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [hoveredSocial, setHoveredSocial] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Removed isMobile effect as it was unused
  useEffect(() => {
    // Intersection Observer for scroll-triggered animations
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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

  // Show scroll-to-top button after scrolling down 200px
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
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

  // Scroll to top handler
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Use the same icons as in header for consistency
  const quickLinks = [
    { id: "description", label: "About", icon: "bi bi-person-circle" },
    { id: "projects", label: "Projects", icon: "bi bi-kanban" },
    { id: "skills", label: "Skills", icon: "bi bi-lightning-charge" },
    { id: "contact", label: "Contact Me", icon: "bi bi-envelope-at" },
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
    <footer id="footer-section" className="footer-container">
      {/* Dynamic animated background with mouse interaction */}
      <div
        className="footer-bg-interactive"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(99, 102, 241, 0.05), transparent 40%)`,
        }}
      />

      {/* Enhanced animated background elements */}
      <div className={`footer-bg-blob-1${isVisible ? " visible" : ""}`} />
      <div className={`footer-bg-blob-2${isVisible ? " visible" : ""}`} />
      <div className={`footer-bg-blob-3${isVisible ? " visible" : ""}`} />

      <div className="footer-content">
        {/* Brand Section */}
        <div className="footer-brand">
          <div className="footer-brand-wrapper">
            <div
              className="footer-logo"
              style={{
                // Match header logo color
                width: "65px",
                height: "65px",
                borderRadius: "15px",
                background: "linear-gradient(135deg, #6366f1, #ec4899)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 800,
                fontSize: "1.2rem",
                color: "white",
                letterSpacing: "1px",
                marginRight: 10,
                boxShadow: "0 8px 25px rgba(99,102,241,0.18)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <span
                className="footer-logo-text fs-3"
                style={{ position: "relative", zIndex: 2 }}
              >
                AP
              </span>
              <div className="footer-logo-shimmer" />
            </div>
            <div className="footer-brand-text">
              <h3 className="text-start fw-bold mb-1">Anil Paswan</h3>
              <p>Frontend Developer</p>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-navigation">
          <div className="footer-nav-container">
            <div className="footer-nav-wrapper">
              <div className="footer-nav-links">
                {quickLinks.map((link, index) => (
                  <button
                    key={link.id}
                    className={`footer-nav-link${
                      hoveredLink === link.id ? " hovered" : ""
                    }`}
                    style={{
                      transitionDelay: `${1 + index * 0.1}s`,
                    }}
                    onClick={(e) => handleFooterLinkClick(link.id, e)}
                    onMouseEnter={() => setHoveredLink(link.id)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    <i className={`${link.icon} footer-nav-icon`} />
                    {link.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="footer-social">
          <div className="footer-social-links">
            {socialLinks.map((social, index) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                title={social.label}
                className={`footer-social-link${
                  hoveredSocial === social.label ? " hovered" : ""
                }`}
                style={{
                  transitionDelay: `${1.5 + index * 0.1}s`,
                }}
                onMouseEnter={() => setHoveredSocial(social.label)}
                onMouseLeave={() => setHoveredSocial(null)}
              >
                <i className={social.icon}></i>
              </a>
            ))}
          </div>
        </div>

        {/* Enhanced Divider with Animation */}
        <div className="footer-divider">
          <div className="footer-divider-dot" />
        </div>

        {/* Enhanced Bottom Section */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            &copy; {new Date().getFullYear()} Anil Paswan. All rights reserved.
          </div>
          <div className="footer-crafted">
            Crafted with{" "}
            <span className="footer-heart" role="img" aria-label="heart">
              ♥
            </span>{" "}
            for innovation, excellence & impact
          </div>
          <div className="footer-description">
            This portfolio showcases my professional journey, technical
            expertise, and passion for creating remarkable digital experiences.
          </div>
          <div className="footer-cta">
            <span>✨ Open for collaboration & exciting opportunities! ✨</span>
          </div>
        </div>

        {/* Scroll to Top Button */}
        {showScrollTop && (
          <button
            className="footer-scroll-top-btn"
            onClick={handleScrollToTop}
            aria-label="Scroll to top"
            style={{
              position: "fixed",
              right: "2rem",
              bottom: "2.5rem",
              zIndex: 100,
              background: "linear-gradient(135deg, #6366F1, #EC4899)",
              color: "#fff",
              border: "none",
              borderRadius: "50%",
              width: "48px",
              height: "48px",
              boxShadow: "0 8px 24px rgba(99,102,241,0.18)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.5rem",
              cursor: "pointer",
              transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
              opacity: 0.95,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-6px) scale(1.08)";
              e.currentTarget.style.boxShadow =
                "0 16px 32px rgba(236,72,153,0.25)";
              e.currentTarget.style.background =
                "linear-gradient(135deg, #EC4899, #6366F1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0) scale(1)";
              e.currentTarget.style.boxShadow =
                "0 8px 24px rgba(99,102,241,0.18)";
              e.currentTarget.style.background =
                "linear-gradient(135deg, #6366F1, #EC4899)";
            }}
          >
            <i className="bi bi-arrow-up-short" />
          </button>
        )}
      </div>
    </footer>
  );
};

export default Footer;
