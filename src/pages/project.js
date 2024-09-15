import React from "react";

const projects = [
  {
    title: "Edusync",
    description:
      "Edusync is an online education platform that connects students and teachers. It provides a seamless learning experience with interactive lessons and real-time collaboration.",
    imageUrl: require("../assets/edusync.png"),
    link: "#",
  },
  {
    title: "Cookpedia",
    description:
      "Cookpedia is a recipe sharing platform where users can discover and share their favorite recipes. It offers a wide range of recipes from different cuisines and allows users to save and rate recipes.",
    imageUrl: require("../assets/Cookpedia.JPG"),
    link: "#",
  },
  {
    title: "E-Health",
    description:
      "E-Health is a healthcare management system that allows patients to book appointments, access medical records, and communicate with healthcare providers. It aims to streamline the healthcare process and improve patient care.",
    imageUrl: require("../assets/ehealth.JPG"),
    link: "#",
  },
  {
    title: "Digital Agency",
    description:
      "Digital Marketing Agency is a full-service agency that helps businesses grow their online presence. It offers services such as search engine optimization, social media marketing, and content creation.",
    imageUrl: require("../assets/digital.JPG"),
    link: "#",
  },
  {
    title: "Actoro",
    description:
      "Actoro is a platform for actors and casting directors to connect and collaborate. It provides a space for actors to showcase their talent and for casting directors to discover new talent for their projects.",
    imageUrl: require("../assets/actro.JPG"),
    link: "#",
  },
  {
    title: "Horse Riding",
    description:
      "Horse Riding is a website for horse enthusiasts to find information about horse riding lessons, trails, and events. It also offers resources for horse care and training.",
    imageUrl: require("../assets/horse-riding.JPG"),
    link: "#",
  },
  {
    title: "Fururista",
    description:
      "Fururista is a futuristic fashion brand that offers unique and innovative clothing designs. It combines technology and fashion to create futuristic and stylish garments.",
    imageUrl: require("../assets/futurista.JPG"),
    link: "#",
  },
];

const Project = () => {
  return (
    <div className="container empty-space-40">
      <h3 className="fw-bold title-heading mb-5">
        Project <span>Highlights</span>
      </h3>
      <div className="row my-5">
        {projects.map((project, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card border-0 rounded-4 shadow-lg project-card d-flex flex-column h-100">
              <img
                src={project.imageUrl}
                className="card-img-top rounded-top-4"
                alt={project.title}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="fw-bold card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <div className="d-flex justify-content-between mt-auto">
                  <a
                    href={project.liveLink}
                    className="btn btn-primary  rounded-pill"
                  >
                    Live <i class="bi bi-arrow-up-right"></i>
                  </a>
                  <a
                    href={project.githubLink}
                    className="btn btn-secondary rounded-pill"
                  >
                    Github <i class="bi bi-github"></i>
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
