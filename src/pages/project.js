import React from "react";

const Project = () => {
  // Array of project data
  const projects = [
    {
      title: "Project Title 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec aliquet lacinia.",
      imageUrl: "https://via.placeholder.com/500",
      link: "#",
    },
    {
      title: "Project Title 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec aliquet lacinia.",
      imageUrl: "https://via.placeholder.com/500",
      link: "#",
    },
    {
      title: "Project Title 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec aliquet lacinia.",
      imageUrl: "https://via.placeholder.com/500",
      link: "#",
    },
    {
      title: "Project Title 4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec aliquet lacinia.",
      imageUrl: "https://via.placeholder.com/500",
      link: "#",
    },
    {
      title: "Project Title 5",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec aliquet lacinia.",
      imageUrl: "https://via.placeholder.com/500",
      link: "#",
    },
    {
      title: "Project Title 6",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec aliquet lacinia.",
      imageUrl: "https://via.placeholder.com/500",
      link: "#",
    },
  ];

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
            <div className="card border-0 rounded-4 shadow-lg">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6">
                    <img
                      src={project.imageUrl}
                      className="img-fluid rounded-4"
                      alt={project.title}
                    />
                  </div>
                  <div className="col-md-6">
                    <h5 className="fw-bold">{project.title}</h5>
                    <p>{project.description}</p>
                    <a
                      href={project.link}
                      className="btn btn-primary rounded-pill"
                    >
                      View Project
                    </a>
                  </div>
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
