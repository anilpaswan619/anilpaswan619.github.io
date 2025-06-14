import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const navLinks = [
  { to: "about", label: "About", icon: "bi bi-person-circle" },
  { to: "projects", label: "Projects", icon: "bi bi-kanban" },
  { to: "skills", label: "Skills", icon: "bi bi-lightning-charge" },
  { to: "contact", label: "Contact Me", icon: "bi bi-envelope-at" },
];

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  const handleNavToggle = () => setNavOpen((open) => !open);
  const handleNavLinkClick = () => setNavOpen(false);

  return (
    <>
      <div className="header-placeholder" />
      <div className="container-fluid bg-black rounded-bottom-4 header-container shadow-sm fixed-top">
        <div className="container">
          <nav className="navbar navbar-expand-lg py-2">
            <button
              type="button"
              className="navbar-brand bg-black text-white fw-bold logo d-flex align-items-center gap-2"
              style={{
                border: "none",
                padding: 0,
                cursor: "pointer",
                fontSize: "2rem",
                letterSpacing: "0.08em",
                fontFamily: "Montserrat, Poppins, sans-serif",
                background: "none",
              }}
              aria-label="Homepage"
              onClick={() => scroll.scrollToTop({ duration: 500 })}
            >
              <span
                style={{
                  background: "linear-gradient(45deg, #ff6b6b, #cc5de8)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontWeight: 800,
                  fontSize: "2.1rem",
                  letterSpacing: "0.1em",
                  textShadow: "0 2px 8px rgba(204,93,232,0.08)",
                }}
              >
                AP
              </span>
            </button>
            <span
              className="d-none d-md-inline "
              style={{
                fontSize: "1.1rem",
                fontWeight: 600,
                color: "#b1b1b1",
                letterSpacing: "0.04em",
              }}
            >
              {" "}
              | Frontend & UI Developer
            </span>

            <button
              className="navbar-toggler"
              type="button"
              aria-controls="navbarNav"
              aria-expanded={navOpen}
              aria-label="Toggle navigation"
              onClick={handleNavToggle}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className={`collapse navbar-collapse${navOpen ? " show" : ""}`}
              id="navbarNav"
            >
              <ul className="navbar-nav ms-auto gap-lg-2 gap-1 align-items-lg-center">
                {navLinks.map((link) => (
                  <li className="nav-item px-2 px-lg-3" key={link.to}>
                    <Link
                      className="nav-link d-flex align-items-center gap-2 fw-semibold"
                      to={link.to}
                      smooth={true}
                      duration={500}
                      style={{
                        fontSize: "1.08rem",
                        letterSpacing: "0.01em",
                        color: "#fff",
                        transition: "color 0.2s",
                        position: "relative",
                        cursor: "pointer",
                      }}
                      activeClass="active"
                      spy={true}
                      offset={-70}
                      onClick={handleNavLinkClick}
                    >
                      <i
                        className={link.icon}
                        style={{ fontSize: "1.15em" }}
                      ></i>
                      <span className="text-nowrap">{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
