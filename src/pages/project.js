import React, { useState, useEffect, useRef } from "react";

// Add a 'category' and 'tags' property to each project and reorder for best/most complex first
const projects = [
  {
    title: "DOBBY",
    description:
      "The future of home maintenance. Being a homeowner is hard enough. Let Dobby tackle your to-do list with the best pros, transparent pricing, and lots of love. And get your home back to being a home.",
    imageUrl: "/assets/dobby.png",
    liveLink: "https://dobby-anil.vercel.app/",
    githubLink: "https://github.com/anilpaswan619/dobby",
    category: "React",
    tags: ["#React", "#Next.js"],
    featured: true,
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
    featured: true,
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
  const [visibleCards, setVisibleCards] = useState([]);
  const cardRefs = useRef([]);

  const filteredProjects =
    selectedTag === "All"
      ? projects
      : projects.filter((p) => p.tags.includes(selectedTag));

  // Reset visible cards when filter changes
  useEffect(() => {
    setVisibleCards([]);
  }, [selectedTag]);

  // Intersection Observer for scroll-based animation
  useEffect(() => {
    if (!cardRefs.current) return;
    const refsSnapshot = [...cardRefs.current];
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting) {
            setVisibleCards((prev) =>
              prev.includes(idx) ? prev : [...prev, idx]
            );
          }
        });
      },
      {
        threshold: 0.18,
      }
    );
    refsSnapshot.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    return () => {
      refsSnapshot.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [filteredProjects]);

  const getTagColor = (tag) => {
    const colors = {
      "#React": { bg: "#61dafb20", border: "#61dafb", text: "#0891b2" },
      "#Angular": { bg: "#dd0031b20", border: "#dd0031", text: "#dc2626" },
      "#JavaScript": { bg: "#f7df1e20", border: "#f7df1e", text: "#ca8a04" },
      "#HTML": { bg: "#e34f2620", border: "#e34f26", text: "#ea580c" },
      "#CSS": { bg: "#1572b620", border: "#1572b6", text: "#2563eb" },
      "#Dashboard": { bg: "#8b5cf620", border: "#8b5cf6", text: "#7c3aed" },
    };
    return (
      colors[tag] || { bg: "#f3f4f620", border: "#d1d5db", text: "#6b7280" }
    );
  };

  const getFilterButtonStyle = (tag, isActive) => {
    if (isActive) {
      return {
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        color: "white",
        borderColor: "transparent",
        boxShadow: "0 4px 15px rgba(102, 126, 234, 0.4)",
        transform: "translateY(-1px)",
      };
    }
    return {
      background: "rgba(255, 255, 255, 0.9)",
      color: "#555",
      borderColor: "rgba(0,0,0,0.1)",
      boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
    };
  };

  return (
    <div
      id="projects"
      className="py-5"
      style={{
        background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
      }}
    >
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-5">
          <h2
            className="fw-bold mb-3"
            style={{
              fontSize: "2.5rem",
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            <i className="bi bi-kanban me-3"></i>
            Project Highlights
          </h2>
          <p
            className="text-muted fs-5 mb-4"
            style={{ maxWidth: 600, margin: "0 auto" }}
          >
            Explore my featured projects showcasing modern web development
            skills and creative solutions
          </p>
        </div>

        {/* Enhanced Tag Filters */}
        <div className="mb-5 d-flex flex-wrap gap-3 justify-content-center">
          <button
            className="btn rounded-pill px-4 py-2 fw-medium border transition-all"
            style={{
              ...getFilterButtonStyle("All", selectedTag === "All"),
              transition: "all 0.3s ease",
              fontSize: "0.95rem",
              letterSpacing: "0.02em",
            }}
            onClick={() => setSelectedTag("All")}
            type="button"
            onMouseEnter={(e) => {
              if (selectedTag !== "All") {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.1)";
              }
            }}
            onMouseLeave={(e) => {
              if (selectedTag !== "All") {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.05)";
              }
            }}
          >
            <i className="bi bi-grid-1x2 me-2"></i>All Projects
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              className="btn rounded-pill px-4 py-2 fw-medium border transition-all"
              style={{
                ...getFilterButtonStyle(tag, selectedTag === tag),
                transition: "all 0.3s ease",
                fontSize: "0.95rem",
                letterSpacing: "0.02em",
              }}
              onClick={() => setSelectedTag(tag)}
              type="button"
              onMouseEnter={(e) => {
                if (selectedTag !== tag) {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow =
                    "0 6px 20px rgba(0,0,0,0.1)";
                }
              }}
              onMouseLeave={(e) => {
                if (selectedTag !== tag) {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 2px 8px rgba(0,0,0,0.05)";
                }
              }}
            >
              <i className="bi bi-tag me-2"></i>
              {tag.replace("#", "")}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="row g-4">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              data-index={index}
              className="col-lg-4 col-md-6 col-12"
              style={{
                opacity: visibleCards.includes(index) ? 1 : 0,
                transform: visibleCards.includes(index)
                  ? "translateY(0) scale(1)"
                  : "translateY(30px) scale(0.95)",
                transition:
                  "opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                transitionDelay: visibleCards.includes(index)
                  ? `${index * 100}ms`
                  : "0ms",
              }}
            >
              <div
                className="card border-0 rounded-4 h-100 position-relative overflow-hidden"
                style={{
                  background: "rgba(255, 255, 255, 0.95)",
                  backdropFilter: "blur(10px)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(-8px) scale(1.02)";
                  e.currentTarget.style.boxShadow =
                    "0 20px 40px rgba(102, 126, 234, 0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 32px rgba(0,0,0,0.08)";
                }}
              >
                {project.featured && (
                  <div
                    className="position-absolute top-0 end-0 z-3 px-3 py-1 rounded-bottom-start"
                    style={{
                      background:
                        "linear-gradient(135deg, #10b981 0%, #059669 100%)",
                      color: "white",
                      fontSize: "0.8rem",
                      fontWeight: "600",
                    }}
                  >
                    <i className="bi bi-star-fill me-1"></i>Featured
                  </div>
                )}

                {/* Image Container */}
                <div
                  className="position-relative overflow-hidden"
                  style={{ height: "220px" }}
                >
                  <img
                    src={project.imageUrl}
                    className="card-img-top"
                    alt={project.title}
                    style={{
                      height: "100%",
                      objectFit: "cover",
                      width: "100%",
                      transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.1)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                  />
                  <div
                    className="position-absolute top-0 start-0 w-100 h-100"
                    style={{
                      background:
                        "linear-gradient(135deg, transparent 0%, rgba(102, 126, 234, 0.1) 100%)",
                    }}
                  ></div>
                </div>

                {/* Card Body */}
                <div className="card-body p-4 d-flex flex-column h-100">
                  <div className="mb-3">
                    <h5
                      className="fw-bold mb-2"
                      style={{ color: "#333", fontSize: "1.4rem" }}
                    >
                      {project.title}
                    </h5>
                    <p
                      className="text-muted mb-3"
                      style={{
                        fontSize: "0.95rem",
                        lineHeight: "1.6",
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {project.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="mb-3 d-flex flex-wrap gap-2">
                    {project.tags.map((tag) => {
                      const tagColor = getTagColor(tag);
                      return (
                        <span
                          key={tag}
                          className="badge rounded-pill px-3 py-2"
                          style={{
                            background: tagColor.bg,
                            color: tagColor.text,
                            border: `1px solid ${tagColor.border}40`,
                            fontSize: "0.8rem",
                            fontWeight: "500",
                            letterSpacing: "0.02em",
                          }}
                        >
                          {tag}
                        </span>
                      );
                    })}
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-auto d-flex gap-3">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="btn flex-fill rounded-3 fw-semibold"
                      style={{
                        background:
                          "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                        color: "white",
                        border: "none",
                        padding: "12px 20px",
                        fontSize: "0.95rem",
                        letterSpacing: "0.02em",
                        boxShadow: "0 4px 15px rgba(102, 126, 234, 0.3)",
                        transition: "all 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-2px)";
                        e.currentTarget.style.boxShadow =
                          "0 8px 25px rgba(102, 126, 234, 0.4)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow =
                          "0 4px 15px rgba(102, 126, 234, 0.3)";
                      }}
                    >
                      <i className="bi bi-box-arrow-up-right me-2"></i>
                      Live Demo
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-outline-dark rounded-3 fw-semibold"
                      style={{
                        padding: "12px 20px",
                        fontSize: "0.95rem",
                        letterSpacing: "0.02em",
                        borderWidth: "2px",
                        transition: "all 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "#333";
                        e.currentTarget.style.color = "white";
                        e.currentTarget.style.transform = "translateY(-2px)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "transparent";
                        e.currentTarget.style.color = "#333";
                        e.currentTarget.style.transform = "translateY(0)";
                      }}
                    >
                      <i className="bi bi-github me-2"></i>
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-5">
            <div
              className="d-inline-flex align-items-center justify-content-center mb-4 rounded-circle"
              style={{
                width: 80,
                height: 80,
                background: "linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)",
                color: "#9ca3af",
              }}
            >
              <i className="bi bi-search" style={{ fontSize: "2rem" }}></i>
            </div>
            <h4 className="fw-semibold mb-2" style={{ color: "#555" }}>
              No Projects Found
            </h4>
            <p className="text-muted">
              Try selecting a different filter or view all projects.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Project;
