import React from "react";
import { Card } from "react-bootstrap";

const Description = () => {
  return (
    <div className="container empty-space-40">
      <h3 className="fw-bold title-heading mb-5">
        About <span>Me</span>
      </h3>
      <p className="description-text">
        As a passionate Frontend & UI Developer with over 6 years of experience,
        I specialize in building dynamic and responsive web applications. My
        expertise in modern JavaScript frameworks and libraries enables me to
        craft user-friendly and visually appealing interfaces. Committed to
        continuous learning, I stay up-to-date with the latest industry trends
        to consistently deliver high-quality solutions.
      </p>
      <div className="row empty-space-top-20 d-flex align-items-stretch justify-content-center gap-5">
        <div className="col-md-5 d-flex">
          <Card className="rounded-4 border-0 position-relative shadow-lg card-hover flex-fill">
            <Card.Body className="text-center p-5 card-section">
              <div className="icon-container position-absolute top-0 start-50 translate-middle">
                <i className="bi bi-award-fill fs-2 border border-3 rounded-5 border-black p-2 bg-white"></i>
              </div>
              <Card.Title className="fw-bold my-4">Experience</Card.Title>
              <Card.Text className="text-muted fw-bold">
                <p>6+ years of experience in Frontend &amp; UI </p>
                <p>Senior Software Engineer</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-5 d-flex">
          <Card className="rounded-4 border-0 position-relative shadow-lg card-hover flex-fill">
            <Card.Body className="text-center p-5 card-section">
              <div className="icon-container position-absolute top-0 start-50 translate-middle">
                <i className="bi bi-laptop-fill fs-2 border border-3 rounded-5 border-black p-2 bg-white"></i>
              </div>
              <Card.Title className="fw-bold my-4">Education</Card.Title>
              <Card.Text className="text-muted fw-bold">
                <p>Master of Technology - Computer Science</p>
                <p>Bachelor of Technology - Information Technology</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Description;
