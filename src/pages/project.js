import React from "react";

const projects = [
  {
    title: "Project One",
    description: "Description for project one.",
    imageUrl: "https://via.placeholder.com/500",
    link: "#",
  },
  {
    title: "Project Two",
    description: "Description for project two.",
    imageUrl: "https://via.placeholder.com/500",
    link: "#",
  },
  {
    title: "Project Three",
    description: "Description for project three.",
    imageUrl: "https://via.placeholder.com/500",
    link: "#",
  },
  {
    title: "Project Four",
    description: "Description for project one.",
    imageUrl: "https://via.placeholder.com/500",
    link: "#",
  },
  {
    title: "Project Five",
    description: "Description for project two.",
    imageUrl: "https://via.placeholder.com/500",
    link: "#",
  },
  {
    title: "Project Six",
    description: "Description for project three.",
    imageUrl: "https://via.placeholder.com/500",
    link: "#",
  },
];

const Project = () => {
  return (
    <div className="container empty-space-40">
      <h3 className="fw-bold title-heading mb-5">
        Project <span>Highlights</span>
      </h3>
      <div className="row">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`col-md-4 ${
              index >= projects.length - 3 ? "extra-space" : ""
            }`}
          >
            <div className="card border-0 rounded-4 shadow-lg project-card">
              <img
                src={project.imageUrl}
                className="card-img-top rounded-top-4"
                alt={project.title}
              />
              <div className="card-body">
                <h5 className="fw-bold card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <a href={project.link} className="btn btn-primary rounded-pill">
                  View Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
