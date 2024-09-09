import React from "react";
import { Card } from "react-bootstrap";

const Description = () => {
  return (
    <div className="container empty-space-40 ">
      <h1>About Me</h1>
      <div className="row">
        <div className="col-md-6">
          <Card>
            <Card.Body>
              <Card.Title>Experience</Card.Title>
              <Card.Text>{/* Add your experience details here */}</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-6">
          <Card>
            <Card.Body>
              <Card.Title>Education</Card.Title>
              <Card.Text>{/* Add your education details here */}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Description;
