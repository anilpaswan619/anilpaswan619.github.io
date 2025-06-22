import React, { useState, useRef, useEffect } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Intersection observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
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

    // Clear error when user starts typing
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
      const response = await fetch("https://formspree.io/f/mwpbbend", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      setLoading(false);

      if (response.ok) {
        setSubmitted(true);
        setForm({ name: "", email: "", message: "" });
      } else {
        alert("There was an error sending your message. Please try again.");
      }
    } catch (err) {
      setLoading(false);
      alert("There was an error sending your message. Please try again.");
    }
  };

  const contactInfo = [
    {
      icon: "💼",
      title: "LinkedIn",
      content: "Connect with me professionally",
      link: "https://www.linkedin.com/in/anil-paswan-91466578/",
      linkText: "Anil Paswan",
      color: "#0A66C2",
      bgColor: "linear-gradient(135deg, #0A66C2, #004182)",
    },
    {
      icon: "🐙",
      title: "GitHub",
      content: "Check out my projects",
      link: "https://github.com/anilpaswan619",
      linkText: "anilpaswan619",
      color: "#181717",
      bgColor: "linear-gradient(135deg, #24292e, #000000)",
    },
    {
      icon: "📧",
      title: "Email",
      content: "Drop me a line anytime",
      link: "mailto:anilpaswan619@gmail.com",
      linkText: "anilpaswan619@gmail.com",
      color: "#EA4335",
      bgColor: "linear-gradient(135deg, #EA4335, #C5221F)",
    },
    {
      icon: "📍",
      title: "Location",
      content: "Based in India",
      link: null,
      linkText: "Lucknow, India",
      color: "#4285F4",
      bgColor: "linear-gradient(135deg, #4285F4, #1557B0)",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      style={{
        padding: "6rem 0",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decorations */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "-5%",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "rgba(255, 255, 255, 0.1)",
          filter: "blur(100px)",
          animation: "float 6s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "20%",
          right: "-10%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "rgba(255, 255, 255, 0.05)",
          filter: "blur(120px)",
          animation: "float 8s ease-in-out infinite reverse",
        }}
      />

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
        {/* Section Header */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "4rem",
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            opacity: isVisible ? 1 : 0,
            transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: "800",
              color: "white",
              marginBottom: "1rem",
              fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
              letterSpacing: "-0.025em",
              textShadow: "0 4px 20px rgba(0,0,0,0.3)",
            }}
          >
            📬 Let's Connect
          </h2>
          <p
            style={{
              fontSize: "1.2rem",
              color: "rgba(255, 255, 255, 0.9)",
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: "1.6",
              fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
            }}
          >
            Have a project in mind or just want to chat? I'd love to hear from
            you!
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
            gap: "3rem",
            alignItems: "start",
          }}
        >
          {/* Contact Form */}
          <div
            style={{
              background: "rgba(255, 255, 255, 0.95)",
              backdropFilter: "blur(20px)",
              borderRadius: "24px",
              padding: "2.5rem",
              boxShadow:
                "0 20px 40px rgba(0,0,0,0.1), 0 8px 16px rgba(0,0,0,0.06)",
              border: "1px solid rgba(255,255,255,0.2)",
              transform: isVisible
                ? "translateY(0) scale(1)"
                : "translateY(30px) scale(0.95)",
              opacity: isVisible ? 1 : 0,
              transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Decorative gradient */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "4px",
                background: "linear-gradient(90deg, #667eea 0%, #764ba2 100%)",
                borderRadius: "24px 24px 0 0",
              }}
            />

            <div style={{ position: "relative", zIndex: 1 }}>
              <h3
                style={{
                  fontSize: "1.75rem",
                  fontWeight: "700",
                  color: "#2d3748",
                  marginBottom: "0.5rem",
                  fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                }}
              >
                💬 Send Message
              </h3>
              <p
                style={{
                  color: "#718096",
                  marginBottom: "2rem",
                  fontSize: "1rem",
                  lineHeight: "1.6",
                }}
              >
                Fill out the form below and I'll get back to you as soon as
                possible.
              </p>

              {submitted ? (
                <div
                  style={{
                    textAlign: "center",
                    padding: "3rem 2rem",
                    background: "linear-gradient(135deg, #48bb78, #38a169)",
                    borderRadius: "16px",
                    color: "white",
                  }}
                >
                  <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>
                    ✅
                  </div>
                  <h4 style={{ fontWeight: "600", marginBottom: "0.5rem" }}>
                    Message Sent!
                  </h4>
                  <p style={{ opacity: 0.9, marginBottom: "1.5rem" }}>
                    Thank you for reaching out! I'll get back to you soon.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    style={{
                      background: "rgba(255,255,255,0.2)",
                      border: "1px solid rgba(255,255,255,0.3)",
                      borderRadius: "8px",
                      padding: "0.5rem 1rem",
                      color: "white",
                      cursor: "pointer",
                      transition: "all 0.2s",
                    }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <div
                  onSubmit={handleSubmit}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.5rem",
                  }}
                >
                  <div>
                    <label
                      htmlFor="name"
                      style={{
                        display: "block",
                        marginBottom: "0.5rem",
                        fontWeight: "600",
                        color: "#2d3748",
                        fontSize: "0.9rem",
                      }}
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      style={{
                        width: "100%",
                        padding: "0.875rem 1rem",
                        borderRadius: "12px",
                        border: errors.name
                          ? "2px solid #e53e3e"
                          : "2px solid #e2e8f0",
                        fontSize: "1rem",
                        transition: "all 0.2s",
                        background: "#fff",
                        fontFamily:
                          "'Inter', 'Segoe UI', system-ui, sans-serif",
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "#667eea";
                        e.target.style.boxShadow =
                          "0 0 0 3px rgba(102, 126, 234, 0.1)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = errors.name
                          ? "#e53e3e"
                          : "#e2e8f0";
                        e.target.style.boxShadow = "none";
                      }}
                    />
                    {errors.name && (
                      <p
                        style={{
                          color: "#e53e3e",
                          fontSize: "0.875rem",
                          marginTop: "0.25rem",
                        }}
                      >
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      style={{
                        display: "block",
                        marginBottom: "0.5rem",
                        fontWeight: "600",
                        color: "#2d3748",
                        fontSize: "0.9rem",
                      }}
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Enter your email address"
                      style={{
                        width: "100%",
                        padding: "0.875rem 1rem",
                        borderRadius: "12px",
                        border: errors.email
                          ? "2px solid #e53e3e"
                          : "2px solid #e2e8f0",
                        fontSize: "1rem",
                        transition: "all 0.2s",
                        background: "#fff",
                        fontFamily:
                          "'Inter', 'Segoe UI', system-ui, sans-serif",
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "#667eea";
                        e.target.style.boxShadow =
                          "0 0 0 3px rgba(102, 126, 234, 0.1)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = errors.email
                          ? "#e53e3e"
                          : "#e2e8f0";
                        e.target.style.boxShadow = "none";
                      }}
                    />
                    {errors.email && (
                      <p
                        style={{
                          color: "#e53e3e",
                          fontSize: "0.875rem",
                          marginTop: "0.25rem",
                        }}
                      >
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      style={{
                        display: "block",
                        marginBottom: "0.5rem",
                        fontWeight: "600",
                        color: "#2d3748",
                        fontSize: "0.9rem",
                      }}
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows="5"
                      placeholder="Tell me about your project or just say hello!"
                      style={{
                        width: "100%",
                        padding: "0.875rem 1rem",
                        borderRadius: "12px",
                        border: errors.message
                          ? "2px solid #e53e3e"
                          : "2px solid #e2e8f0",
                        fontSize: "1rem",
                        transition: "all 0.2s",
                        background: "#fff",
                        fontFamily:
                          "'Inter', 'Segoe UI', system-ui, sans-serif",
                        resize: "vertical",
                        minHeight: "120px",
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "#667eea";
                        e.target.style.boxShadow =
                          "0 0 0 3px rgba(102, 126, 234, 0.1)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = errors.message
                          ? "#e53e3e"
                          : "#e2e8f0";
                        e.target.style.boxShadow = "none";
                      }}
                    />
                    {errors.message && (
                      <p
                        style={{
                          color: "#e53e3e",
                          fontSize: "0.875rem",
                          marginTop: "0.25rem",
                        }}
                      >
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    style={{
                      background: loading
                        ? "#a0aec0"
                        : "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                      color: "white",
                      border: "none",
                      borderRadius: "12px",
                      padding: "1rem 2rem",
                      fontSize: "1rem",
                      fontWeight: "600",
                      cursor: loading ? "not-allowed" : "pointer",
                      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "0.5rem",
                      fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
                      boxShadow: "0 4px 12px rgba(102, 126, 234, 0.4)",
                      transform: "translateY(0)",
                    }}
                    onMouseEnter={(e) => {
                      if (!loading) {
                        e.target.style.transform = "translateY(-2px)";
                        e.target.style.boxShadow =
                          "0 8px 25px rgba(102, 126, 234, 0.5)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!loading) {
                        e.target.style.transform = "translateY(0)";
                        e.target.style.boxShadow =
                          "0 4px 12px rgba(102, 126, 234, 0.4)";
                      }
                    }}
                  >
                    {loading ? (
                      <>
                        <div
                          style={{
                            width: "20px",
                            height: "20px",
                            border: "2px solid rgba(255,255,255,0.3)",
                            borderTop: "2px solid white",
                            borderRadius: "50%",
                            animation: "spin 1s linear infinite",
                          }}
                        />
                        Sending...
                      </>
                    ) : (
                      <>🚀 Send Message</>
                    )}
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Contact Info */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
          >
            {contactInfo.map((info, index) => (
              <div
                key={info.title}
                style={{
                  background: "rgba(255, 255, 255, 0.95)",
                  backdropFilter: "blur(20px)",
                  borderRadius: "20px",
                  padding: "1.5rem",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  transform: isVisible
                    ? "translateY(0) scale(1)"
                    : "translateY(30px) scale(0.95)",
                  opacity: isVisible ? 1 : 0,
                  transition: `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${
                    0.3 + index * 0.1
                  }s`,
                  cursor: info.link ? "pointer" : "default",
                  position: "relative",
                  overflow: "hidden",
                }}
                onClick={() => info.link && window.open(info.link, "_blank")}
                onMouseEnter={(e) => {
                  if (info.link) {
                    e.currentTarget.style.transform =
                      "translateY(-4px) scale(1.02)";
                    e.currentTarget.style.boxShadow =
                      "0 20px 40px rgba(0,0,0,0.15)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (info.link) {
                    e.currentTarget.style.transform = "translateY(0) scale(1)";
                    e.currentTarget.style.boxShadow =
                      "0 10px 30px rgba(0,0,0,0.1)";
                  }
                }}
              >
                {/* Gradient accent */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "3px",
                    background: info.bgColor,
                    borderRadius: "20px 20px 0 0",
                  }}
                />

                <div
                  style={{ display: "flex", alignItems: "center", gap: "1rem" }}
                >
                  <div
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "16px",
                      background: info.bgColor,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.5rem",
                      boxShadow: `0 8px 16px ${info.color}30`,
                      flexShrink: 0,
                    }}
                  >
                    {info.icon}
                  </div>

                  <div style={{ flex: 1, minWidth: 0 }}>
                    <h4
                      style={{
                        fontSize: "1.1rem",
                        fontWeight: "700",
                        color: "#2d3748",
                        marginBottom: "0.25rem",
                        fontFamily:
                          "'Inter', 'Segoe UI', system-ui, sans-serif",
                      }}
                    >
                      {info.title}
                    </h4>
                    <p
                      style={{
                        fontSize: "0.9rem",
                        color: "#718096",
                        marginBottom: "0.5rem",
                        lineHeight: "1.4",
                      }}
                    >
                      {info.content}
                    </p>
                    <p
                      style={{
                        fontSize: "0.95rem",
                        color: info.color,
                        fontWeight: "600",
                        margin: 0,
                        wordBreak: "break-all",
                      }}
                    >
                      {info.linkText}
                    </p>
                  </div>

                  {info.link && (
                    <div
                      style={{
                        fontSize: "1.2rem",
                        color: "#718096",
                        opacity: 0.6,
                        transition: "all 0.2s",
                      }}
                    >
                      →
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Map */}
            <div
              style={{
                background: "rgba(255, 255, 255, 0.95)",
                backdropFilter: "blur(20px)",
                borderRadius: "20px",
                padding: "1.5rem",
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                border: "1px solid rgba(255,255,255,0.2)",
                transform: isVisible
                  ? "translateY(0) scale(1)"
                  : "translateY(30px) scale(0.95)",
                opacity: isVisible ? 1 : 0,
                transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.7s",
                overflow: "hidden",
              }}
            >
              <h4
                style={{
                  fontSize: "1.1rem",
                  fontWeight: "700",
                  color: "#2d3748",
                  marginBottom: "1rem",
                  fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                🗺️ Find Me Here
              </h4>
              <div
                style={{
                  borderRadius: "12px",
                  overflow: "hidden",
                  height: "200px",
                  border: "2px solid #e2e8f0",
                }}
              >
                <iframe
                  title="Lucknow Location"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=80.8462%2C26.7467%2C81.0462%2C26.9467&amp;layer=mapnik&amp;marker=26.8467%2C80.9462"
                  style={{
                    width: "100%",
                    height: "100%",
                    border: 0,
                    filter: "contrast(1.1) saturate(1.2)",
                  }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(5deg); }
          }
          
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          
          @media (max-width: 768px) {
            .contact-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Contact;
