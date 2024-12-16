import React, { useState } from "react";

const Contact = () => {
  return (
    <div id="contact" className="container contact-container my-5">
      <h3 className="fw-bold title-heading mb-5 text-center">
        Contact <span>Me</span>
      </h3>
      <div className="contact-info text-center my-5">
        <p className="fs-3 my-5 text-black">
          Find me on the following platforms!{" "}
        </p>
        <a
          href="mailto:anilpaswan619@gmail.com"
          className="btn contact-btns w-50 mx-auto my-4 rounded-5 border-secondary-subtle fw-bold text-body-secondary"
        >
          <i className="bi bi-envelope"></i> Email: anilpaswan619@gmail.com
        </a>
        <a
          href=" "
          target="_blank"
          rel="noopener noreferrer"
          className="btn contact-btns w-50 mx-auto my-4 rounded-5 border-secondary-subtle fw-bold text-body-secondary"
        >
          <i className="bi bi-linkedin"></i> LinkedIn: Anil Paswan
        </a>
      </div>
    </div>
  );
};

export default Contact;
