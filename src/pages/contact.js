import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form data submitted:", formData);
  };

  return (
    <div id="contact" className="container contact-container my-5">
      <h3 className="fw-bold title-heading mb-5 text-center">
        Contact <span>Me</span>
      </h3>
      <div className="contact-info text-center mb-5">
        <p>
          <i className="bi bi-envelope"></i> Email:{" "}
          <a href="mailto:your-email@example.com">your-email@example.com</a>
        </p>
        <p>
          <i className="bi bi-linkedin"></i> LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/anilpaswan619/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Anil Paswan
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
