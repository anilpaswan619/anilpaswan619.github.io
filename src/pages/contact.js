import React, { useState, useRef, useEffect } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [animate, setAnimate] = useState(false);
  const [visibleSections, setVisibleSections] = useState({});
  const sectionRefs = useRef({});

  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      content: "Drop me a line anytime",
      link: "mailto:anilpaswan619@gmail.com",
      linkText: "anilpaswan619@gmail.com",
      color: "#ea4335"
    },
    {
      icon: "💼",
      title: "LinkedIn",
      content: "Connect professionally",
      link: "https://www.linkedin.com/in/anil-paswan-91466578/",
      linkText: "Anil Paswan",
      color: "#0a66c2"
    },
    {
      icon: "🐙",
      title: "GitHub",
      content: "Check out my projects",
      link: "https://github.com/anilpaswan619",
      linkText: "anilpaswan619",
      color: "#24292e"
    },
    {
      icon: "📍",
      title: "Location",
      content: "Based in India",
      link: null,
      linkText: "Lucknow, India",
      color: "#4285f4"
    }
  ];

  useEffect(() => {
    setTimeout(() => setAnimate(true), 200);
  }, []);

  // Intersection Observer for sections
  useEffect(() => {
    const observers = {};
    
    Object.keys(sectionRefs.current).forEach(key => {
      if (sectionRefs.current[key]) {
        observers[key] = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setVisibleSections(prev => ({ ...prev, [key]: true }));
            }
          },
          { threshold: 0.2 }
        );
        observers[key].observe(sectionRefs.current[key]);
      }
    });

    return () => {
      Object.values(observers).forEach(observer => observer.disconnect());
    };
  }, []);

  const validateForm = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    } else if (form.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setLoading(false);
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setLoading(false);
      alert("There was an error sending your message. Please try again.");
    }
  };

  return (
    <section id="contact" className="section dark">
      <div className="container">
        {/* Section Header */}
        <div 
          className="section-header"
          style={{
            opacity: animate ? 1 : 0,
            transform: animate ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s ease"
          }}
        >
          <div className="section-badge">
            <span>📬</span>
            <span>Get In Touch</span>
          </div>
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-description">
            Have a project in mind or just want to chat? I'd love to hear from you!
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Form */}
          <div 
            ref={el => sectionRefs.current.form = el}
            style={{
              opacity: visibleSections.form ? 1 : 0,
              transform: visibleSections.form ? "translateX(0)" : "translateX(-50px)",
              transition: "all 0.8s ease"
            }}
          >
            <div className="contact-form">
              <div className="d-flex align-items-center mb-4">
                <div 
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "16px",
                    background: "linear-gradient(135deg, #6366f1, #ec4899)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: "1rem",
                    fontSize: "1.5rem"
                  }}
                >
                  💬
                </div>
                <h3 style={{ color: "white", fontWeight: "700", margin: 0 }}>
                  Send Message
                </h3>
              </div>

              {submitted ? (
                <div 
                  style={{
                    textAlign: "center",
                    padding: "3rem 2rem",
                    background: "rgba(16, 185, 129, 0.1)",
                    border: "1px solid rgba(16, 185, 129, 0.2)",
                    borderRadius: "16px"
                  }}
                >
                  <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>✅</div>
                  <h4 style={{ color: "#10b981", fontWeight: "600", marginBottom: "1rem" }}>
                    Message Sent Successfully!
                  </h4>
                  <p style={{ color: "#94a3b8", marginBottom: "1.5rem" }}>
                    Thank you for reaching out! I'll get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    style={{
                      background: "rgba(16, 185, 129, 0.1)",
                      border: "1px solid rgba(16, 185, 129, 0.3)",
                      borderRadius: "8px",
                      padding: "0.75rem 1.5rem",
                      color: "#10b981",
                      cursor: "pointer",
                      transition: "all 0.2s",
                      fontWeight: "500"
                    }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      style={{
                        borderColor: errors.name ? "#ef4444" : "rgba(255, 255, 255, 0.1)"
                      }}
                    />
                    {errors.name && (
                      <small style={{ color: "#ef4444", fontSize: "0.8rem" }}>
                        {errors.name}
                      </small>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Enter your email address"
                      style={{
                        borderColor: errors.email ? "#ef4444" : "rgba(255, 255, 255, 0.1)"
                      }}
                    />
                    {errors.email && (
                      <small style={{ color: "#ef4444", fontSize: "0.8rem" }}>
                        {errors.email}
                      </small>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows="5"
                      placeholder="Tell me about your project or just say hello!"
                      style={{
                        borderColor: errors.message ? "#ef4444" : "rgba(255, 255, 255, 0.1)"
                      }}
                    />
                    {errors.message && (
                      <small style={{ color: "#ef4444", fontSize: "0.8rem" }}>
                        {errors.message}
                      </small>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="submit-btn"
                  >
                    {loading ? (
                      <>
                        <div 
                          style={{
                            width: "20px",
                            height: "20px",
                            border: "2px solid rgba(255, 255, 255, 0.3)",
                            borderTop: "2px solid white",
                            borderRadius: "50%",
                            animation: "spin 1s linear infinite",
                            marginRight: "0.5rem"
                          }}
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        🚀 Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Contact Information */}
          <div 
            ref={el => sectionRefs.current.info = el}
            style={{
              opacity: visibleSections.info ? 1 : 0,
              transform: visibleSections.info ? "translateX(0)" : "translateX(50px)",
              transition: "all 0.8s ease 0.2s"
            }}
          >
            <div className="contact-info">
              <div className="d-flex align-items-center mb-4">
                <div 
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "16px",
                    background: "linear-gradient(135deg, #6366f1, #ec4899)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: "1rem",
                    fontSize: "1.5rem"
                  }}
                >
                  📞
                </div>
                <h3 style={{ color: "white", fontWeight: "700", margin: 0 }}>
                  Contact Information
                </h3>
              </div>

              {contactInfo.map((info, index) => (
                <div
                  key={info.title}
                  className="info-item"
                  style={{
                    cursor: info.link ? "pointer" : "default",
                    opacity: visibleSections.info ? 1 : 0,
                    transform: visibleSections.info ? "translateY(0)" : "translateY(20px)",
                    transition: `all 0.6s ease ${0.1 * index}s`
                  }}
                  onClick={() => info.link && window.open(info.link, "_blank")}
                >
                  <div 
                    className="info-icon"
                    style={{
                      background: `linear-gradient(135deg, ${info.color}, ${info.color}80)`
                    }}
                  >
                    {info.icon}
                  </div>
                  <div className="info-content">
                    <div className="info-title">{info.title}</div>
                    <div className="info-text">{info.content}</div>
                    <div style={{ 
                      color: info.color, 
                      fontWeight: "600", 
                      fontSize: "0.9rem",
                      marginTop: "0.25rem"
                    }}>
                      {info.linkText}
                    </div>
                  </div>
                  {info.link && (
                    <i 
                      className="bi bi-arrow-up-right"
                      style={{ 
                        color: "#94a3b8", 
                        fontSize: "1.2rem",
                        opacity: 0.6
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Add spinning animation for loading */}
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};

export default Contact;