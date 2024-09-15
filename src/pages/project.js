import React from "react";

const projects = [
  {
    title: "Project One",
    description: "Description for project one.",
    imageUrl: require("../assets/edusync.png"),
    link: "#",
  },
  {
    title: "Project Two",
    description: "Description for project two.",
    imageUrl: require("../assets/Cookpedia.JPG"),
    link: "#",
  },
  {
    title: "Project Three",
    description: "Description for project three.",
    imageUrl: require("../assets/ehealth.JPG"),
    link: "#",
  },
  {
    title: "Project Four",
    description: "Description for project one.",
    imageUrl: require("../assets/digital.JPG"),
    link: "#",
  },
  {
    title: "Project Five",
    description: "Description for project two.",
    imageUrl: require("../assets/actro.JPG"),
    link: "#",
  },
  {
    title: "Project Six",
    description: "Description for project three.",
    imageUrl: require("../assets/horse-riding.JPG"),
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
          <div key={index} className="col-md-4 mb-4">
            <div className="card border-0 rounded-4 shadow-lg project-card">
              <img
                src={project.imageUrl}
                className="card-img-top rounded-top-4"
                alt={project.title}
              />
              <div className="card-body">
                <h5 className="fw-bold card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <div className="d-flex justify-content-between">
                  <a
                    href={project.liveLink}
                    className="btn btn-primary rounded-pill"
                  >
                    Live
                  </a>
                  <a
                    href={project.githubLink}
                    className="btn btn-secondary rounded-pill"
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
