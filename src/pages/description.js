import React from "react";
import { Card } from "react-bootstrap";

const Description = () => {
  return (
    <div className="container empty-space-40">
      <h3 className="fw-bold about-me-heading">About Me</h3>
      <p className="description-text">
        I am a passionate Frontend & UI Developer with experience in creating
        dynamic and responsive web applications. I specialize in modern
        JavaScript frameworks and libraries, and I am dedicated to building
        user-friendly and visually appealing interfaces.
      </p>
      <div className="row empty-space-top-20 justify-content-center gap-5">
        <div className="col-md-5">
          <Card className="rounded-4 border-2 border-black position-relative">
            <Card.Body className="text-center p-5 card-section">
              <div className="icon-container position-absolute top-0 start-50 translate-middle">
                <i className="bi bi-award-fill fs-2 border border-3 rounded-5 border-black p-1 bg-white"></i>
              </div>
              <Card.Title className="fw-bold my-4">Experience</Card.Title>
              <Card.Text className="text-muted fw-bold">
                <p>6+ years in Frontend & UI Development</p>
                <p>Senior Software Engineer</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-5">
          <Card className="rounded-4 border-2 border-black position-relative">
            <Card.Body className="text-center p-5 card-section">
              <div className="icon-container position-absolute top-0 start-50 translate-middle">
                <i className="bi bi-laptop-fill fs-2 border border-3 rounded-5 border-black p-1 bg-white"></i>
              </div>
              <Card.Title className="fw-bold my-4">Education</Card.Title>
              <Card.Text className="text-muted fw-bold">
                <p>Master of Technology - (Computer Science)</p>
                <p>Bachelor of Technology - (Information Technology)</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>

      <p className="fw-bold text-black-50 description-text empty-space-top-20">
        I am a Senior Software Engineer with 6+ years of experience in Frontend
        & UI Development. I have a Master of Technology in Computer Science and
        a Bachelor of Technology in Information Technology. I am passionate
        about creating responsive, user-friendly, and visually appealing web
        applications. I have a strong foundation in web technologies and
        programming languages such as HTML, CSS, JavaScript, React, and Angular.
        I am seeking new opportunities to work on challenging projects that
        allow me to apply my skills and expertise to create innovative web
        solutions.
      </p>
    </div>
  );
};

export default Description;
