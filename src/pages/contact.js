import React, { useState, useRef, useEffect } from "react";

const Contact = () => {
  // Simple form state (no backend, just demo)
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would send the form data to your backend or email service
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
          >
            <h5 className="fw-bold mb-4">Send a Message</h5>
            {submitted ? (
              <div className="alert alert-success text-center">
                Thank you for reaching out! I'll get back to you soon.
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label fw-semibold">
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
                  <label htmlFor="email" className="form-label fw-semibold">
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
                  <label htmlFor="message" className="form-label fw-semibold">
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
                  className="btn  shadow-sm rounded-3"
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
                  }}
                >
                  <i className="bi bi-send"></i>
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
        {/* Contact Info & Map */}
        <div className="col-lg-6">
          <div
            className="card border-0 rounded-4 shadow-sm p-4 h-100"
            ref={rightCardRef}
          >
            <h5 className="fw-bold mb-4">Contact Info</h5>
            <div className="d-flex flex-column gap-3 mb-4">
              <div className="d-flex align-items-center gap-3">
                <i className="bi bi-linkedin fs-4 text-black"></i>
                <a
                  href="https://www.linkedin.com/in/anil-paswan-91466578/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none text-dark fw-semibold"
                >
                  LinkedIn: Anil Paswan
                </a>
              </div>
              <div className="d-flex align-items-center gap-3">
                <i className="bi bi-github fs-4 text-black"></i>
                <a
                  href="https://github.com/anilpaswan619"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none text-dark fw-semibold"
                >
                  github.com/anilpaswan619
                </a>
              </div>
              <div className="d-flex align-items-center gap-3">
                <i className="bi bi-envelope fs-4 text-black"></i>
                <a
                  href="mailto:anilpaswan619@gmail.com"
                  className="text-decoration-none text-dark fw-semibold"
                >
                  anilpaswan619@gmail.com
                </a>
              </div>

              <div className="d-flex align-items-center gap-3">
                <i className="bi bi-geo-alt fs-4 text-black"></i>
                <span className="fw-semibold text-dark">Lucknow, India</span>
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
