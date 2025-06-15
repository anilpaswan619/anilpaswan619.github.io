import React, { useState, useRef, useEffect } from "react";

const Contact = () => {
  // Simple form state (no backend, just demo)
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // For equal card heights
  const leftCardRef = useRef(null);
  const rightCardRef = useRef(null);
  useEffect(() => {
    if (leftCardRef.current && rightCardRef.current) {
      const leftHeight = leftCardRef.current.offsetHeight;
      const rightHeight = rightCardRef.current.offsetHeight;
      const maxHeight = Math.max(leftHeight, rightHeight);
      leftCardRef.current.style.minHeight = `${maxHeight}px`;
      rightCardRef.current.style.minHeight = `${maxHeight}px`;
    }
  }, [submitted]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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
      } else {
        alert("There was an error sending your message. Please try again.");
      }
    } catch (err) {
      setLoading(false);
      alert("There was an error sending your message. Please try again.");
    }
  };

  return (
    <div id="contact" className="container contact-container my-5">
      <h3 className="fw-bold title-heading my-5  text-center">
        <i className="bi bi-envelope-at me-2"></i>
        Contact <span>Me</span>
      </h3>
      <div className="row g-5 align-items-start">
        {/* Contact Form */}
        <div className="col-lg-6 mb-4 mb-lg-0">
          <div
            className="card border-0 rounded-4 shadow-sm p-4 h-100"
            ref={leftCardRef}
            style={{
              transition:
                "box-shadow 0.4s cubic-bezier(.4,2,.6,1), transform 0.4s cubic-bezier(.4,2,.6,1)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform =
                "translateY(-4px) scale(1.012)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "none")}
          >
            <h5 className="fw-bold mb-4">
              <i className="bi bi-chat-dots me-2" style={{ color: "#000" }}></i>
              Send a Message
            </h5>
            {submitted ? (
              <div className="alert alert-success text-center">
                Thank you for reaching out! I'll get back to you soon.
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label ">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control rounded-3"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    autoComplete="off"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label ">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control rounded-3"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    autoComplete="off"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label ">
                    Message
                  </label>
                  <textarea
                    className="form-control rounded-3"
                    id="message"
                    name="message"
                    rows="4"
                    value={form.message}
                    onChange={handleChange}
                    required
                    placeholder="Type your message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn shadow-sm rounded-3 my-4 send-btn"
                  style={{
                    background:
                      "linear-gradient(45deg, #ff6b6b, #f06595, #cc5de8)",
                    color: "#fff",
                    border: "none",
                    padding: "0.7rem 2.1rem",
                    fontWeight: 700,
                    display: "flex",
                    alignItems: "center",
                    gap: "0.7rem",
                    opacity: loading ? 0.7 : 1,
                    pointerEvents: loading ? "none" : "auto",
                    transition:
                      "background 0.22s, color 0.22s, transform 0.22s, box-shadow 0.22s cubic-bezier(.4,2,.6,1)",
                  }}
                  disabled={loading}
                  onMouseEnter={(e) => {
                    if (!loading) {
                      e.currentTarget.style.background =
                        "linear-gradient(45deg, #6b6bff, #6595f0, #5de8cc)";
                      e.currentTarget.style.color = "#fff";
                      e.currentTarget.style.transform =
                        "translateY(-2px) scale(1.04)";
                      e.currentTarget.style.boxShadow =
                        "0 4px 16px rgba(102,16,242,0.13)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!loading) {
                      e.currentTarget.style.background =
                        "linear-gradient(45deg, #ff6b6b, #f06595, #cc5de8)";
                      e.currentTarget.style.color = "#fff";
                      e.currentTarget.style.transform = "";
                      e.currentTarget.style.boxShadow = "";
                    }
                  }}
                >
                  {loading ? (
                    <>
                      <span
                        className="spinner-border spinner-border-sm me-2"
                        role="status"
                        aria-hidden="true"
                        style={{ color: "#fff" }}
                      ></span>
                      Sending...
                    </>
                  ) : (
                    <>
                      <i className="bi bi-send"></i>
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
        {/* Contact Info & Map */}
        <div className="col-lg-6 contact-info-col">
          <div
            className="card border-0 rounded-4 shadow-sm p-4 h-100"
            ref={rightCardRef}
            style={{
              transition:
                "box-shadow 0.4s cubic-bezier(.4,2,.6,1), transform 0.4s cubic-bezier(.4,2,.6,1)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform =
                "translateY(-4px) scale(1.012)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "none")}
          >
            <h5 className="fw-bold mb-4">
              <i
                className="bi bi-person-lines-fill me-2"
                style={{ color: "#000" }}
              ></i>
              Contact Info
            </h5>
            <div className="d-flex flex-column gap-4 mb-4">
              {/* LinkedIn */}
              <div
                className="d-flex align-items-center p-3 rounded-4"
                style={{
                  background: "#fff",
                  minHeight: 70,
                  boxShadow: "10px 12px 12px 16px rgba(60,64,67,0.06)",
                  border: "none",
                  gap: 18,
                  transition: "box-shadow 0.4s, transform 0.4s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform =
                    "translateY(-3px) scale(1.01)")
                }
                onMouseLeave={(e) => (e.currentTarget.style.transform = "none")}
              >
                <span
                  className="d-flex align-items-center justify-content-center"
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 50,
                    background: "rgba(255,255,255,0.13)",
                    border: "1.5px solid #eaeaea",
                    color: "#000",
                    marginRight: 18,
                    fontSize: "1.7rem",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
                  }}
                >
                  <i className="bi bi-linkedin"></i>
                </span>
                <div>
                  <div
                    className="fw-bold"
                    style={{ fontSize: "1.08rem", color: "#23232a" }}
                  >
                    LinkedIn
                  </div>
                  <div style={{ color: "#515151", fontSize: "1rem" }}>
                    <a
                      href="https://www.linkedin.com/in/anil-paswan-91466578/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: "#515151",
                        textDecoration: "none",
                        transition: "color 0.2s",
                      }}
                      onMouseOver={(e) =>
                        (e.currentTarget.style.color = "#0a66c2")
                      }
                      onMouseOut={(e) =>
                        (e.currentTarget.style.color = "#515151")
                      }
                    >
                      LinkedIn: Anil Paswan
                    </a>
                  </div>
                </div>
              </div>
              {/* GitHub */}
              <div
                className="d-flex align-items-center p-3 rounded-4"
                style={{
                  background: "#fff",
                  minHeight: 70,
                  boxShadow: "10px 12px 12px 16px rgba(60,64,67,0.06)",
                  border: "none",
                  gap: 18,
                  transition: "box-shadow 0.4s, transform 0.4s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform =
                    "translateY(-3px) scale(1.01)")
                }
                onMouseLeave={(e) => (e.currentTarget.style.transform = "none")}
              >
                <span
                  className="d-flex align-items-center justify-content-center"
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 50,
                    background: "rgba(255,255,255,0.13)",
                    border: "1.5px solid #eaeaea",
                    color: "#000",
                    marginRight: 18,
                    fontSize: "1.7rem",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
                  }}
                >
                  <i className="bi bi-github"></i>
                </span>
                <div>
                  <div
                    className="fw-bold"
                    style={{ fontSize: "1.08rem", color: "#23232a" }}
                  >
                    GitHub
                  </div>
                  <div style={{ color: "#515151", fontSize: "1rem" }}>
                    <a
                      href="https://github.com/anilpaswan619"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: "#515151",
                        textDecoration: "none",
                        transition: "color 0.2s",
                      }}
                      onMouseOver={(e) =>
                        (e.currentTarget.style.color = "#181818")
                      }
                      onMouseOut={(e) =>
                        (e.currentTarget.style.color = "#515151")
                      }
                    >
                      github.com/anilpaswan619
                    </a>
                  </div>
                </div>
              </div>
              {/* Email */}
              <div
                className="d-flex align-items-center p-3 rounded-4"
                style={{
                  background: "#fff",
                  minHeight: 70,
                  boxShadow: "10px 12px 12px 16px rgba(60,64,67,0.06)",
                  border: "none",
                  gap: 18,
                  transition: "box-shadow 0.4s, transform 0.4s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform =
                    "translateY(-3px) scale(1.01)")
                }
                onMouseLeave={(e) => (e.currentTarget.style.transform = "none")}
              >
                <span
                  className="d-flex align-items-center justify-content-center"
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 50,
                    background: "rgba(255,255,255,0.13)",
                    border: "1.5px solid #eaeaea",
                    color: "#000",
                    marginRight: 18,
                    fontSize: "1.7rem",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
                  }}
                >
                  <i className="bi bi-envelope"></i>
                </span>
                <div>
                  <div
                    className="fw-bold"
                    style={{ fontSize: "1.08rem", color: "#23232a" }}
                  >
                    Email
                  </div>
                  <div style={{ color: "#515151", fontSize: "1rem" }}>
                    <a
                      href="mailto:anilpaswan619@gmail.com"
                      style={{ color: "#515151", textDecoration: "none" }}
                    >
                      anilpaswan619@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              {/* Location */}
              <div
                className="d-flex align-items-center p-3 rounded-4"
                style={{
                  background: "#fff",
                  minHeight: 70,
                  boxShadow: "10px 12px 12px 16px rgba(60,64,67,0.06)",
                  border: "none",
                  gap: 18,
                  transition: "box-shadow 0.4s, transform 0.4s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform =
                    "translateY(-3px) scale(1.01)")
                }
                onMouseLeave={(e) => (e.currentTarget.style.transform = "none")}
              >
                <span
                  className="d-flex align-items-center justify-content-center"
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 50,
                    background: "rgba(255,255,255,0.13)",
                    border: "1.5px solid #eaeaea",
                    color: "#000",
                    marginRight: 18,
                    fontSize: "1.7rem",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
                  }}
                >
                  <i className="bi bi-geo-alt"></i>
                </span>

                <div>
                  <div
                    className="fw-bold"
                    style={{ fontSize: "1.08rem", color: "#23232a" }}
                  >
                    Location
                  </div>
                  <div style={{ color: "#515151", fontSize: "1rem" }}>
                    Lucknow, India
                  </div>
                </div>
              </div>
            </div>
            {/* Map Embed */}
            <div
              className="rounded-4 overflow-hidden"
              style={{
                minHeight: 180,
                border: "1px solid #eee",
              }}
            >
              <iframe
                title="Lucknow Location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=80.9462%2C26.8467%2C80.9462%2C26.8467&amp;layer=mapnik"
                style={{ width: "100%", height: 180, border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
