import React, { useState, useRef, useEffect } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [isVisible, setIsVisible] = useState(false);
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const [sectionHeight, setSectionHeight] = useState("auto");
  const [isMobile, setIsMobile] = useState(false);
  const [leftSectionVisible, setLeftSectionVisible] = useState(false);
  const [rightSectionVisible, setRightSectionVisible] = useState(false);
  const leftSectionRef = useRef(null);
  const rightSectionRef = useRef(null);

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

  // Initialize animation
  useEffect(() => {
    setTimeout(() => setAnimate(true), 200);
  }, []);

  // Responsive: update isMobile on resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 900);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Sync heights only on desktop
  useEffect(() => {
    function syncHeights() {
      if (
        leftRef.current &&
        rightRef.current &&
        window.innerWidth >= 900 // Only sync on desktop
      ) {
        const leftH = leftRef.current.offsetHeight;
        const rightH = rightRef.current.offsetHeight;
        const maxH = Math.max(leftH, rightH);
        setSectionHeight(maxH);
      } else {
        setSectionHeight("auto");
      }
    }
    syncHeights();
    window.addEventListener("resize", syncHeights);
    return () => window.removeEventListener("resize", syncHeights);
  }, [submitted, errors, isVisible]);

  // Intersection Observer for left section (form)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setLeftSectionVisible(true), 300);
        }
      },
      {
        threshold: 0.2,
        rootMargin: "-50px 0px -50px 0px",
      }
    );

    if (leftSectionRef.current) {
      observer.observe(leftSectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Intersection Observer for right section (contact info)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setRightSectionVisible(true), 600);
        }
      },
      {
        threshold: 0.2,
        rootMargin: "-50px 0px -50px 0px",
      }
    );

    if (rightSectionRef.current) {
      observer.observe(rightSectionRef.current);
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
      // Simulate API call - replace with actual endpoint
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setLoading(false);
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setLoading(false);
      alert("There was an error sending your message. Please try again.");
    }
  };

  const contactInfo = [
    {
      icon: <i className="bi bi-linkedin" />, // LinkedIn icon
      title: "LinkedIn",
      content: "Connect with me professionally",
      link: "https://www.linkedin.com/in/anil-paswan-91466578/",
      linkText: "Anil Paswan",
      color: "#0A66C2",
      bgGradient: "linear-gradient(135deg, #0A66C2 0%, #004182 100%)",
    },
    {
      icon: <i className="bi bi-github" />, // GitHub icon
      title: "GitHub",
      content: "Check out my projects",
      link: "https://github.com/anilpaswan619",
      linkText: "anilpaswan619",
      color: "#181717",
      bgGradient: "linear-gradient(135deg, #24292e 0%, #000000 100%)",
    },
    {
      icon: <i className="bi bi-envelope-at" />, // Contact Me (email) icon
      title: "Email",
      content: "Drop me a line anytime",
      link: "mailto:anilpaswan619@gmail.com",
      linkText: "anilpaswan619@gmail.com",
      color: "#EA4335",
      bgGradient: "linear-gradient(135deg, #EA4335 0%, #C5221F 100%)",
    },
    {
      icon: "📍",
      title: "Location",
      content: "Based in India",
      link: null,
      linkText: "Lucknow, India",
      color: "#4285F4",
      bgGradient: "linear-gradient(135deg, #4285F4 0%, #1557B0 100%)",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)",
        position: "relative",
        overflow: "hidden",
        paddingTop: isMobile ? "3.5rem" : "6rem",
        paddingBottom: isMobile ? "2rem" : "4rem",
      }}
    >
      {/* Enhanced Animated background elements */}
      <div
        style={{
          position: "absolute",
          top: "15%",
          right: "8%",
          width: "350px",
          height: "350px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, transparent 70%)",
          animation: "float 8s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "5%",
          width: "280px",
          height: "280px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(236, 72, 153, 0.08) 0%, transparent 70%)",
          animation: "float 10s ease-in-out infinite reverse",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(16, 185, 129, 0.05) 0%, transparent 70%)",
          animation: "float 12s ease-in-out infinite",
          transform: "translate(-50%, -50%)",
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: isMobile ? "0 0.5rem" : "0 2rem",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Enhanced Header Section */}
        <div
          ref={headerRef}
          style={{
            textAlign: "center",
            marginBottom: "4rem",
            transform: animate ? "translateY(0)" : "translateY(30px)",
            opacity: animate ? 1 : 0,
            transition: "all 1s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          {/* Section badge */}
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
              📬 Get In Touch
            </span>
          </div>

          <h2
            style={{
              fontSize: "clamp(2rem, 6vw, 3rem)",
              fontWeight: "800",
              background:
                "linear-gradient(135deg, #6366F1 0%, #EC4899 50%, #F59E0B 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              marginBottom: "1.5rem",
              letterSpacing: "-0.02em",
            }}
          >
            Let's Connect
          </h2>
          <p
            style={{
              color: "#94A3B8",
              fontSize: "1.2rem",
              margin: "0 auto",
              maxWidth: "600px",
              lineHeight: "1.6",
            }}
          >
            Got an opportunity or just want to chat? Let’s connect!
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile
              ? "1fr"
              : "repeat(auto-fit, minmax(400px, 1fr))",
            gap: isMobile ? "1.5rem" : "3rem",
            alignItems: "stretch",
          }}
          className="contact-grid"
        >
          {/* --- Contact Form (left) --- */}
          <div ref={leftSectionRef}>
            <div
              ref={leftRef}
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(20px)",
                borderRadius: "24px",
                padding: isMobile ? "1.5rem 1rem" : "2.5rem",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
                transform: leftSectionVisible
                  ? "translateX(0) scale(1)"
                  : "translateX(-80px) scale(0.95)",
                opacity: leftSectionVisible ? 1 : 0,
                filter: leftSectionVisible ? "blur(0)" : "blur(2px)",
                transition: "all 1.2s cubic-bezier(0.4, 0, 0.2, 1)",
                position: "relative",
                overflow: "hidden",
                minHeight: sectionHeight,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                width: "100%",
                boxSizing: "border-box",
              }}
              onMouseEnter={(e) => {
                if (leftSectionVisible) {
                  e.currentTarget.style.transform = "translateX(0) scale(1.02)";
                  e.currentTarget.style.boxShadow =
                    "0 30px 60px rgba(99, 102,241, 0.2)";
                  e.currentTarget.style.background =
                    "rgba(255, 255, 255, 0.08)";
                }
              }}
              onMouseLeave={(e) => {
                if (leftSectionVisible) {
                  e.currentTarget.style.transform = "translateX(0) scale(1)";
                  e.currentTarget.style.boxShadow =
                    "0 20px 40px rgba(0, 0, 0, 0.3)";
                  e.currentTarget.style.background =
                    "rgba(255, 255, 255, 0.05)";
                }
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
                  background:
                    "linear-gradient(90deg, #6366F1 0%, #EC4899 50%, #F59E0B 100%)",
                  borderRadius: "24px 24px 0 0",
                }}
              />

              {/* Floating background elements */}
              <div
                style={{
                  position: "absolute",
                  top: "10%",
                  right: "10%",
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 70%)",
                  animation: "float 8s ease-in-out infinite",
                }}
              />

              <div style={{ position: "relative", zIndex: 1, width: "100%" }}>
                {/* Form header */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "2rem",
                    paddingBottom: "1.5rem",
                    borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                  }}
                >
                  <div
                    style={{
                      width: "56px",
                      height: "56px",
                      borderRadius: "16px",
                      background:
                        "linear-gradient(135deg, #6366F1 0%, #EC4899 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: "1.5rem",
                      boxShadow: "0 12px 24px rgba(99, 102,241, 0.4)",
                    }}
                  >
                    <span style={{ fontSize: "1.8rem" }}>💬</span>
                  </div>
                  <div>
                    <h3
                      style={{
                        fontSize: "1.8rem",
                        fontWeight: "700",
                        color: "#F1F5F9",
                        margin: 0,
                        letterSpacing: "-0.025em",
                        background:
                          "linear-gradient(135deg, #F1F5F9 0%, #CBD5E1 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      Send Message
                    </h3>
                  </div>
                </div>

                {submitted ? (
                  <div
                    style={{
                      textAlign: "center",
                      padding: "3rem 2rem",
                      background:
                        "linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(5, 150, 105, 0.1) 100%)",
                      borderRadius: "16px",
                      border: "1px solid rgba(16, 185, 129, 0.2)",
                    }}
                  >
                    <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>
                      ✅
                    </div>
                    <h4
                      style={{
                        fontWeight: "600",
                        marginBottom: "0.5rem",
                        color: "#10B981",
                      }}
                    >
                      Message Sent Successfully!
                    </h4>
                    <p style={{ color: "#94A3B8", marginBottom: "1.5rem" }}>
                      Thank you for reaching out! I'll get back to you as soon
                      as possible.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      style={{
                        background: "rgba(16, 185, 129, 0.1)",
                        border: "1px solid rgba(16, 185, 129, 0.3)",
                        borderRadius: "8px",
                        padding: "0.75rem 1.5rem",
                        color: "#10B981",
                        cursor: "pointer",
                        transition: "all 0.2s",
                        fontWeight: "500",
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = "rgba(16, 185, 129, 0.2)";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = "rgba(16, 185, 129, 0.1)";
                      }}
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form
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
                          color: "#F1F5F9",
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
                            ? "2px solid #EF4444"
                            : "2px solid rgba(255, 255, 255, 0.1)",
                          fontSize: "1rem",
                          transition: "all 0.2s",
                          background: "rgba(255, 255, 255, 0.05)",
                          color: "#F1F5F9",
                          backdropFilter: "blur(10px)",
                          boxSizing: "border-box",
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = "#6366F1";
                          e.target.style.boxShadow =
                            "0 0 0 3px rgba(99, 102,241, 0.1)";
                          e.target.style.background =
                            "rgba(255, 255, 255, 0.08)";
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = errors.name
                            ? "#EF4444"
                            : "rgba(255, 255, 255, 0.1)";
                          e.target.style.boxShadow = "none";
                          e.target.style.background =
                            "rgba(255, 255, 255, 0.05)";
                        }}
                      />
                      {errors.name && (
                        <p
                          style={{
                            color: "#EF4444",
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
                          color: "#F1F5F9",
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
                            ? "2px solid #EF4444"
                            : "2px solid rgba(255, 255, 255, 0.1)",
                          fontSize: "1rem",
                          transition: "all 0.2s",
                          background: "rgba(255, 255, 255, 0.05)",
                          color: "#F1F5F9",
                          backdropFilter: "blur(10px)",
                          boxSizing: "border-box",
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = "#6366F1";
                          e.target.style.boxShadow =
                            "0 0 0 3px rgba(99, 102,241, 0.1)";
                          e.target.style.background =
                            "rgba(255, 255, 255, 0.08)";
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = errors.email
                            ? "#EF4444"
                            : "rgba(255, 255, 255, 0.1)";
                          e.target.style.boxShadow = "none";
                          e.target.style.background =
                            "rgba(255, 255, 255, 0.05)";
                        }}
                      />
                      {errors.email && (
                        <p
                          style={{
                            color: "#EF4444",
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
                          color: "#F1F5F9",
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
                            ? "2px solid #EF4444"
                            : "2px solid rgba(255, 255, 255, 0.1)",
                          fontSize: "1rem",
                          transition: "all 0.2s",
                          background: "rgba(255, 255, 255, 0.05)",
                          color: "#F1F5F9",
                          resize: "vertical",
                          minHeight: "120px",
                          backdropFilter: "blur(10px)",
                          boxSizing: "border-box",
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = "#6366F1";
                          e.target.style.boxShadow =
                            "0 0 0 3px rgba(99, 102,241, 0.1)";
                          e.target.style.background =
                            "rgba(255, 255, 255, 0.08)";
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = errors.message
                            ? "#EF4444"
                            : "rgba(255, 255, 255, 0.1)";
                          e.target.style.boxShadow = "none";
                          e.target.style.background =
                            "rgba(255, 255, 255, 0.05)";
                        }}
                      />
                      {errors.message && (
                        <p
                          style={{
                            color: "#EF4444",
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
                          ? "rgba(148, 163, 184, 0.3)"
                          : "linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)", // Match resume/live button
                        color: "#F1F5F9",
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
                        boxShadow: loading
                          ? "none"
                          : "0 8px 25px rgba(99, 102, 241, 0.4)",
                        transform: "translateY(0)",
                        backdropFilter: "blur(10px)",
                      }}
                      onMouseEnter={(e) => {
                        if (!loading) {
                          e.target.style.transform = "translateY(-2px)";
                          e.target.style.boxShadow =
                            "0 12px 35px rgba(99, 102, 241, 0.5)";
                          e.target.style.background =
                            "linear-gradient(135deg, #5856EB 0%, #7C3AED 100%)";
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!loading) {
                          e.target.style.transform = "translateY(0)";
                          e.target.style.boxShadow =
                            "0 8px 25px rgba(99, 102, 241, 0.4)";
                          e.target.style.background =
                            "linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)";
                        }
                      }}
                    >
                      {loading ? (
                        <>
                          <div
                            style={{
                              width: "20px",
                              height: "20px",
                              border: "2px solid rgba(241, 245, 249, 0.3)",
                              borderTop: "2px solid #F1F5F9",
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
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* --- Contact Info Section (right) --- */}
          <div ref={rightSectionRef}>
            <div
              ref={rightRef}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: isMobile ? "1.5rem" : "2rem",
                minHeight: sectionHeight,
                justifyContent: "center",
                width: "100%",
                boxSizing: "border-box",
                transform: rightSectionVisible
                  ? "translateX(0) scale(1)"
                  : "translateX(80px) scale(0.95)",
                opacity: rightSectionVisible ? 1 : 0,
                filter: rightSectionVisible ? "blur(0)" : "blur(2px)",
                transition: "all 1.2s cubic-bezier(0.4, 0, 0.2, 1) 0.2s",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "24px",
              }}
              onMouseEnter={(e) => {
                if (rightSectionVisible) {
                  e.currentTarget.style.transform = "translateX(0) scale(1.02)";
                  e.currentTarget.style.boxShadow =
                    "0 30px 60px rgba(99, 102,241, 0.2)";
                  e.currentTarget.style.background =
                    "rgba(255, 255, 255, 0.08)";
                }
              }}
              onMouseLeave={(e) => {
                if (rightSectionVisible) {
                  e.currentTarget.style.transform = "translateX(0) scale(1)";
                  e.currentTarget.style.boxShadow =
                    "0 20px 40px rgba(0, 0, 0, 0.3)";
                  e.currentTarget.style.background =
                    "rgba(255, 255, 255, 0.05)";
                }
              }}
            >
              <div
                style={{
                  background: "rgba(255,255,255,0.05)",
                  borderRadius: "24px",
                  border: "1px solid rgba(255,255,255,0.13)",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.18)",
                  padding: isMobile ? "1.5rem 1rem" : "2.5rem 2rem",
                  position: "relative",
                  overflow: "hidden",
                  backdropFilter: "blur(20px)",
                  minHeight: isMobile ? "auto" : "420px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "stretch",
                  transition: "all 0.5s cubic-bezier(0.4,0,0.2,1)",
                  height: "100%",
                  width: "100%",
                  boxSizing: "border-box",
                }}
              >
                {/* Decorative gradient border */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "4px",
                    background:
                      "linear-gradient(90deg, #6366F1 0%, #EC4899 50%, #F59E0B 100%)",
                    borderRadius: "24px 24px 0 0",
                  }}
                />
                {/* Floating background element */}
                <div
                  style={{
                    position: "absolute",
                    top: "10%",
                    right: "10%",
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                    background:
                      "radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, transparent 70%)",
                    animation: "float 8s ease-in-out infinite",
                    zIndex: 0,
                  }}
                />
                <div style={{ position: "relative", zIndex: 1 }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                      marginBottom: "2.2rem",
                    }}
                  >
                    <div
                      style={{
                        width: "56px",
                        height: "56px",
                        borderRadius: "16px",
                        background:
                          "linear-gradient(135deg, #6366F1 0%, #EC4899 100%)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 12px 24px rgba(99,102,241,0.18)",
                        fontSize: "2rem",
                        color: "#fff",
                      }}
                    >
                      <i className="bi bi-person-lines-fill"></i>
                    </div>
                    <h3
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: "700",
                        color: "#F1F5F9",
                        margin: 0,
                        letterSpacing: "-0.025em",
                        background:
                          "linear-gradient(135deg, #F1F5F9 0%, #CBD5E1 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      Contact Information
                    </h3>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "1.5rem",
                    }}
                  >
                    {contactInfo.map((info, idx) => (
                      <div
                        key={info.title}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "1.2rem",
                          background: "rgba(255,255,255,0.07)",
                          borderRadius: "16px",
                          border: "1.5px solid rgba(255,255,255,0.13)",
                          padding: "1.1rem 1.2rem",
                          boxShadow: "0 4px 18px rgba(99,102,241,0.07)",
                          cursor: info.link ? "pointer" : "default",
                          transition: "all 0.25s cubic-bezier(0.4,0,0.2,1)",
                          position: "relative",
                          overflow: "hidden",
                        }}
                        onClick={() =>
                          info.link && window.open(info.link, "_blank")
                        }
                        onMouseEnter={(e) => {
                          if (info.link) {
                            e.currentTarget.style.background =
                              "rgba(255,255,255,0.13)";
                            e.currentTarget.style.transform =
                              "translateY(-2px) scale(1.03)";
                            e.currentTarget.style.boxShadow = `0 12px 32px ${info.color}22`;
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (info.link) {
                            e.currentTarget.style.background =
                              "rgba(255,255,255,0.07)";
                            e.currentTarget.style.transform =
                              "translateY(0) scale(1)";
                            e.currentTarget.style.boxShadow =
                              "0 4px 18px rgba(99,102,241,0.07)";
                          }
                        }}
                      >
                        {/* Icon */}
                        <div
                          style={{
                            width: "48px",
                            height: "48px",
                            borderRadius: "12px",
                            background: info.bgGradient,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "1.6rem",
                            color: "#fff",
                            boxShadow: `0 4px 16px ${info.color}33`,
                            flexShrink: 0,
                            border: "2px solid rgba(255,255,255,0.13)",
                          }}
                        >
                          {info.icon}
                        </div>
                        {/* Info text */}
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div
                            style={{
                              fontWeight: 700,
                              fontSize: "1.08rem",
                              color: "#F1F5F9",
                              marginBottom: "0.1rem",
                            }}
                          >
                            {info.title}
                          </div>
                          <div
                            style={{
                              color: "#94A3B8",
                              fontSize: "0.97rem",
                              marginBottom: "0.1rem",
                              fontWeight: 500,
                            }}
                          >
                            {info.content}
                          </div>
                          <div
                            style={{
                              color: info.color,
                              fontWeight: 600,
                              fontSize: "0.97rem",
                              wordBreak: "break-all",
                              letterSpacing: "0.01em",
                            }}
                          >
                            {info.linkText}
                          </div>
                        </div>
                        {/* Arrow for links */}
                        {info.link && (
                          <div
                            style={{
                              fontSize: "1.2rem",
                              color: "#718096",
                              opacity: 0.6,
                              marginLeft: "0.5rem",
                              transition: "color 0.2s",
                            }}
                          >
                            <i className="bi bi-arrow-up-right"></i>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
