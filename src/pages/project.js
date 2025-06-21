import React, { useState, useEffect } from "react";

// Add a 'category' and 'tags' property to each project and reorder for best/most complex first
const projects = [
  {
    title: "DOBBY",
    description:
      "The future of home maintenance\nBeing a homeowner is hard enough.\nLet Dobby tackle your to-do list with the best pros, transparent pricing, and lots of love. Ang get your home back to being a home.",
    imageUrl: "/assets/dobby.png", // Make sure to add this image to your assets folder
    liveLink: "https://dobby-anil.vercel.app/", // Replace with actual link if available
    githubLink: "https://github.com/anilpaswan619/dobby", // Replace with actual link if available
    category: "React",
    tags: ["#React", "#Next.js"], // Added "#Next.js"
  },
  {
    title: "Edusync",
    description:
      "Edusync is an online education platform that connects students and teachers. It provides a seamless learning experience with interactive lessons and real-time collaboration.",
    imageUrl: "/assets/edusync.png",
    liveLink: "https://edusync-anil.vercel.app/",
    githubLink: "https://github.com/anilpaswan619/EduSync",
    category: "Angular",
    tags: ["#Angular", "#Dashboard"],
  },
  {
    title: "Cookpedia",
    description:
      "Cookpedia is a recipe sharing platform where users can discover and share their favorite recipes. It offers a wide range of recipes from different cuisines and allows users to save and rate recipes.",
    imageUrl: "/assets/Cookpedia.JPG",
    liveLink: "https://cookpedia-anil.vercel.app/",
    githubLink: "https://github.com/anilpaswan619/Cookpedia",
    category: "Angular",
    tags: ["#Angular"],
  },
  {
    title: "E-Health",
    description:
      "E-Health is a healthcare management system that allows patients to book appointments, access medical records, and communicate with healthcare providers.",
    imageUrl: "/assets/ehealth.JPG",
    liveLink: "https://e-health-dashboard-anil.vercel.app/",
    githubLink: "https://github.com/anilpaswan619/EHealth-Dashboard",
    category: "JavaScript",
    tags: ["#JavaScript", "#Dashboard"],
  },
  {
    title: "Digital Agency",
    description:
      "Digital Marketing Agency is a full-service agency that helps businesses grow their online presence. It offers services such as search engine optimization, social media marketing, and content creation.",
    imageUrl: "/assets/digital.JPG",
    liveLink: "https://digitalmarketinganil.netlify.app/",
    githubLink: "https://github.com/anilpaswan619/digital-marketing-agency",
    category: "JavaScript",
    tags: ["#JavaScript"],
  },
  {
    title: "Actoro",
    description:
      "Actoro is a platform for actors and casting directors to connect and collaborate. It provides a space for actors to showcase their talent and for casting directors to discover new talent projects.",
    imageUrl: "/assets/actro.JPG",
    liveLink: "https://actoro-paswan-anil.netlify.app/",
    githubLink: "https://github.com/anilpaswan619/Actoro",
    category: "HTML/CSS",
    tags: ["#HTML", "#CSS"],
  },
];

// Extract unique tags for filters, excluding "#Next.js"
const allTags = [...new Set(projects.flatMap((p) => p.tags))].filter(
  (tag) => tag !== "#Next.js"
);

const Project = () => {
  const [selectedTag, setSelectedTag] = useState("All");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const filteredProjects =
    selectedTag === "All"
      ? projects
      : projects.filter((p) => p.tags.includes(selectedTag));

  return (
    <div id="projects" className="container empty-space-40">
      <h3 className="fw-bold title-heading mb-5 text-center">
        <i className="bi bi-kanban me-2"></i>
        Project <span>Highlights</span>
      </h3>
      {/* Tag Filters */}
      <div className="my-4 pb-5 d-flex flex-wrap gap-3 justify-content-center">
        <button
          className={`project-filter-btn ${
            selectedTag === "All" ? "active" : ""
          }`}
          onClick={() => setSelectedTag("All")}
          type="button"
        >
          <i className="bi bi-grid-1x2 me-1"></i>All
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            className={`project-filter-btn ${
              selectedTag === tag ? "active" : ""
            }`}
            onClick={() => setSelectedTag(tag)}
            type="button"
          >
            <i className="bi bi-tag me-1"></i>
            {tag.replace("#", "")}
          </button>
        ))}
      </div>
      <div className="row my-5">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="col-md-6 col-lg-4 mb-4 d-flex"
            style={{
              transition:
                "transform 0.8s cubic-bezier(.4,2,.6,1), opacity 0.8s cubic-bezier(.4,2,.6,1)",
              transform: mounted ? "translateY(0)" : "translateY(60px)",
              opacity: mounted ? 1 : 0,
              transitionDelay: mounted ? `${index * 120 + 100}ms` : "0ms",
              willChange: "transform, opacity",
            }}
          >
            <div
              className="card project-card glass-card border-0 rounded-4 d-flex flex-column h-100 w-100"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.7) 70%, #f8f9fa 100%)",
                border: "1.5px solid #eaeaea",
                boxShadow:
                  "0 2px 8px rgba(60,64,67,0.07), 0 1.5px 8px rgba(204,93,232,0.04)",
                transition: "box-shadow 0.3s, transform 0.3s",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                className="project-img-container"
                style={{ background: "#f8f9fa" }}
              >
                <img
                  src={project.imageUrl}
                  className="card-img-top rounded-top-4"
                  alt={project.title}
                  style={{
                    height: "200px",
                    objectFit: "cover",
                    width: "100%",
                    background: "#f8f9fa",
                    transition:
                      "transform 0.35s cubic-bezier(0.4,0.2,0.2,1), filter 0.3s",
                  }}
                />
              </div>
              <div
                className="card-body d-flex flex-column pb-0"
                style={{
                  padding: "1.8rem .1rem",
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <h5
                  className="fw-bold card-title"
                  style={{ fontSize: "1.13rem" }}
                >
                  <i
                    className="bi bi-star-fill me-1"
                    style={{ color: "#000" }}
                  ></i>
                  {project.title}
                </h5>
                <p className="card-text" style={{ minHeight: 70 }}>
                  {project.description}
                </p>
                <div className="d-flex gap-2 pb-2 flex-wrap mt-auto">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="badge rounded-pill bg-light text-dark border border-1 px-2 py-1"
                      style={{
                        fontSize: "0.85rem",
                        fontWeight: 500,
                        letterSpacing: "0.01em",
                        background: "#f8f9fa",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="d-flex justify-content-between mt-auto gap-2">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary px-3 rounded-3"
                    style={{
                      fontWeight: 600,
                      fontSize: "1rem",
                      letterSpacing: "0.01em",
                      boxShadow: "0 2px 8px rgba(102,16,242,0.07)",
                    }}
                  >
                    <i className="bi bi-box-arrow-up-right me-1"></i>
                    Live
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-secondary px-3 rounded-3"
                    style={{
                      fontWeight: 600,
                      fontSize: "1rem",
                      letterSpacing: "0.01em",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
                    }}
                  >
                    <i className="bi bi-github me-1"></i>
                    Github
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
        {filteredProjects.length === 0 && (
          <div className="col-12 text-center text-muted py-5">
            <i className="bi bi-emoji-frown fs-2"></i>
            <div>No projects found for this filter.</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Project;
