import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";

const About = ({ descriptionRef }) => {
  const [animate, setAnimate] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [currentTechIndex, setCurrentTechIndex] = useState(0);

  const roles = ["Frontend Developer", "UI/UX Designer", "React Specialist"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  const techStack = [
    { name: "React", icon: "⚛️", color: "#61DAFB" },
    { name: "TypeScript", icon: "📘", color: "#3178C6" },
    { name: "Next.js", icon: "▲", color: "#000000" },
    { name: "JavaScript", icon: "🟨", color: "#F7DF1E" },
    { name: "HTML5", icon: "🌐", color: "#E34F26" },
    { name: "CSS3", icon: "🎨", color: "#1572B6" },
    { name: "Tailwind", icon: "💨", color: "#06B6D4" },
    { name: "Bootstrap", icon: "🅱️", color: "#7952B3" },
  ];

  const stats = [
    { number: "7+", label: "Years Experience" },
    { number: "25+", label: "Projects Completed" },
    { number: "10+", label: "Technologies" },
    { number: "100%", label: "Client Satisfaction" },
  ];

  // Initialize animations
  useEffect(() => {
    setTimeout(() => setAnimate(true), 300);
  }, []);

  // Typing animation for roles
  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    let charIndex = 0;
    
    const typeInterval = setInterval(() => {
      if (charIndex <= currentRole.length) {
        setTypedText(currentRole.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [currentRoleIndex]);

  // Tech stack rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTechIndex((prev) => (prev + 1) % techStack.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleScrollToDescription = () => {
    if (descriptionRef?.current) {
      const yOffset = -100;
      const y = descriptionRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="about-section">
      {/* Floating background elements */}
      <div className="floating-elements">
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
      </div>

      <div className="container">
        <div className="row align-items-center min-vh-100">
          {/* Left Content */}
          <div className="col-lg-7">
            <div 
              className="hero-content"
              style={{
                opacity: animate ? 1 : 0,
                transform: animate ? "translateY(0)" : "translateY(50px)",
                transition: "all 1s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              {/* Status Badge */}
              <div className="hero-badge">
                <div className="badge-icon">✨</div>
                <span>Available for new opportunities</span>
              </div>

              {/* Main Title */}
              <h1 className="hero-title">
                <span className="name">Anil Paswan</span>
                <span className="role">
                  {typedText}
                  <span 
                    style={{
                      opacity: Math.floor(Date.now() / 500) % 2,
                      marginLeft: "2px",
                      color: "#ec4899"
                    }}
                  >
                    |
                  </span>
                </span>
              </h1>

              {/* Description */}
              <p className="hero-description">
                Passionate about creating exceptional digital experiences with modern technologies. 
                I specialize in building responsive, user-centric web applications that make a difference.
              </p>

              {/* Stats */}
              <div className="hero-stats">
                {stats.map((stat, index) => (
                  <div 
                    key={stat.label}
                    className="stat-item"
                    style={{
                      opacity: animate ? 1 : 0,
                      transform: animate ? "translateY(0)" : "translateY(30px)",
                      transition: `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${0.2 + index * 0.1}s`,
                    }}
                  >
                    <span className="stat-number">{stat.number}</span>
                    <span className="stat-label">{stat.label}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="hero-actions">
                <a
                  href="/resume/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <i className="bi bi-download"></i>
                  Download Resume
                </a>
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="btn btn-outline"
                >
                  <i className="bi bi-envelope-at"></i>
                  Get In Touch
                </Link>
              </div>

              {/* Social Links */}
              <div className="hero-social">
                <a
                  href="https://github.com/anilpaswan619"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  title="GitHub"
                >
                  <i className="bi bi-github"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/anil-paswan-91466578/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  title="LinkedIn"
                >
                  <i className="bi bi-linkedin"></i>
                </a>
                <a
                  href="mailto:anilpaswan619@gmail.com"
                  className="social-link"
                  title="Email"
                >
                  <i className="bi bi-envelope-at"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Right Content - Enhanced Profile */}
          <div className="col-lg-5">
            <div 
              className="hero-image"
              style={{
                opacity: animate ? 1 : 0,
                transform: animate ? "translateX(0)" : "translateX(50px)",
                transition: "all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.3s",
              }}
            >
              <div className="image-container">
                <img
                  src="/assets/photo.jpg"
                  alt="Anil Paswan - Frontend Developer"
                  className="profile-image"
                />
                <div className="image-overlay"></div>
                
                {/* Floating Tech Cards */}
                <div className="floating-card card-1">
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <span style={{ fontSize: "1.2rem" }}>
                      {techStack[currentTechIndex].icon}
                    </span>
                    <span>{techStack[currentTechIndex].name}</span>
                  </div>
                </div>
                
                <div className="floating-card card-2">
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <span style={{ fontSize: "1.2rem" }}>🚀</span>
                    <span>7+ Years Experience</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator d-none d-lg-flex" onClick={handleScrollToDescription}>
          <span className="scroll-text">Scroll Down</span>
          <div className="scroll-icon"></div>
        </div>
      </div>
    </section>
  );
};

export default About;