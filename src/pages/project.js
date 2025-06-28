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
  const [animate, setAnimate] = useState(false);
  const cardRefs = useRef([]);

  const filteredProjects =
    selectedTag === "All"
      ? projects
      : projects.filter((p) => p.tags.includes(selectedTag));

  // Reset visible cards when filter changes
  useEffect(() => {
    setVisibleCards([]);
  }, [selectedTag]);

  // Initialize animation
  useEffect(() => {
    setTimeout(() => setAnimate(true), 200);
  }, []);

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
        threshold: 0.15,
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
      "#React": {
        bg: "rgba(97, 218, 251, 0.1)",
        border: "#61dafb",
        text: "#0891b2",
      },
      "#Angular": {
        bg: "rgba(255, 255, 255, 0.1)",
        border: "#60a5fa",
        text: "#60a5fa",
      },
      "#JavaScript": {
        bg: "rgba(247, 223, 30, 0.1)",
        border: "#f7df1e",
        text: "#ca8a04",
      },
      "#HTML": {
        bg: "rgba(227, 79, 38, 0.1)",
        border: "#e34f26",
        text: "#ea580c",
      },
      "#CSS": {
        bg: "rgba(21, 114, 182, 0.1)",
        border: "#1572b6",
        text: "#2563eb",
      },
      "#Dashboard": {
        bg: "rgba(139, 92, 246, 0.1)",
        border: "#8b5cf6",
        text: "#7c3aed",
      },
    };
    return (
      colors[tag] || {
        bg: "rgba(255, 255, 255, 0.1)",
        border: "#94A3B8",
        text: "#94A3B8",
      }
    );
  };

  const getFilterButtonStyle = (tag, isActive) => {
    if (isActive) {
      return {
        background: "linear-gradient(135deg, #6366F1 0%, #EC4899 100%)",
        color: "white",
        borderColor: "transparent",
        boxShadow: "0 8px 25px rgba(99, 102, 241, 0.4)",
        transform: "translateY(-2px) scale(1.02)",
      };
    }
    return {
      background: "rgba(255, 255, 255, 0.05)",
      color: "#CBD5E1",
      borderColor: "rgba(255, 255, 255, 0.1)",
      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
    };
  };

  return (
    <div
      id="projects"
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)",
        position: "relative",
        overflow: "hidden",
        paddingTop: "6rem",
        paddingBottom: "4rem",
      }}
    >
      {/* Enhanced Animated background elements */}
      <div
        style={{
          position: "absolute",
          top: "15%",
          right: "8%",
          width: "350px",
          height: "350px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, transparent 70%)",
          animation: "float 8s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "5%",
          width: "280px",
          height: "280px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(236, 72, 153, 0.08) 0%, transparent 70%)",
          animation: "float 10s ease-in-out infinite reverse",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(16, 185, 129, 0.05) 0%, transparent 70%)",
          animation: "float 12s ease-in-out infinite",
          transform: "translate(-50%, -50%)",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        {/* Enhanced Header Section */}
        <div
          className="text-center mb-5"
          style={{
            transform: animate ? "translateY(0)" : "translateY(30px)",
            opacity: animate ? 1 : 0,
            transition: "all 1s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          {/* Section badge */}
          <div
            style={{
              display: "inline-block",
              padding: "8px 20px",
              background: "rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(10px)",
              borderRadius: "50px",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              marginBottom: "1.5rem",
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontWeight: "500",
                background: "linear-gradient(90deg, #60A5FA, #A78BFA)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              💼 My Portfolio
            </span>
          </div>

          <h2
            style={{
              fontSize: "clamp(2rem, 6vw, 3rem)",
              fontWeight: "800",
              background:
                "linear-gradient(135deg, #6366F1 0%, #EC4899 50%, #F59E0B 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              marginBottom: "1.5rem",
              letterSpacing: "-0.02em",
            }}
          >
            Project Highlights
          </h2>
          <p
            style={{
              color: "#94A3B8",
              fontSize: "1.2rem",
              margin: "0 auto",
              lineHeight: "1.6",
            }}
          >
            Explore my featured projects showcasing modern web development
            skills and creative solutions
          </p>
        </div>

        {/* Enhanced Tag Filters */}
        <div
          className="mb-5 d-flex flex-wrap gap-3 justify-content-center"
          style={{
            transform: animate ? "translateY(0)" : "translateY(20px)",
            opacity: animate ? 1 : 0,
            transition: "all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.2s",
          }}
        >
          <button
            className="btn rounded-pill px-4 py-2 fw-semibold"
            style={{
              ...getFilterButtonStyle("All", selectedTag === "All"),
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              fontSize: "0.95rem",
              letterSpacing: "0.02em",
              backdropFilter: "blur(10px)",
            }}
            onClick={() => setSelectedTag("All")}
            type="button"
            onMouseEnter={(e) => {
              if (selectedTag !== "All") {
                e.currentTarget.style.transform =
                  "translateY(-3px) scale(1.05)";
                e.currentTarget.style.boxShadow =
                  "0 8px 25px rgba(255, 255, 255, 0.1)";
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
              }
            }}
            onMouseLeave={(e) => {
              if (selectedTag !== "All") {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 4px 15px rgba(0, 0, 0, 0.1)";
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
              }
            }}
          >
            <i className="bi bi-grid-1x2 me-2"></i>All Projects
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              className="btn rounded-pill px-4 py-2 fw-semibold"
              style={{
                ...getFilterButtonStyle(tag, selectedTag === tag),
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                fontSize: "0.95rem",
                letterSpacing: "0.02em",
                backdropFilter: "blur(10px)",
              }}
              onClick={() => setSelectedTag(tag)}
              type="button"
              onMouseEnter={(e) => {
                if (selectedTag !== tag) {
                  e.currentTarget.style.transform =
                    "translateY(-3px) scale(1.05)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 25px rgba(255, 255, 255, 0.1)";
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
                }
              }}
              onMouseLeave={(e) => {
                if (selectedTag !== tag) {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 15px rgba(0, 0, 0, 0.1)";
                  e.currentTarget.style.background =
                    "rgba(255, 255, 255, 0.05)";
                }
              }}
            >
              <i className="bi bi-tag me-2"></i>
              {tag.replace("#", "")}
            </button>
          ))}
        </div>

        {/* Enhanced Projects Grid */}
        <div className="row pt-4 g-4">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              data-index={index}
              className="col-lg-4 col-md-6 col-12 pt-0"
              style={{
                opacity: visibleCards.includes(index) ? 1 : 0,
                transform: visibleCards.includes(index)
                  ? "translateY(0) scale(1)"
                  : "translateY(50px) scale(0.9)",
                transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
                transitionDelay: visibleCards.includes(index)
                  ? `${index * 150}ms`
                  : "0ms",
              }}
            >
              <div
                className="card   position-relative overflow-hidden p-1 pt-0"
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(20px)",
                  borderRadius: "24px",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(-15px) scale(1.03)";
                  e.currentTarget.style.boxShadow =
                    "0 25px 50px rgba(99, 102, 241, 0.25)";
                  e.currentTarget.style.background =
                    "rgba(255, 255, 255, 0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 32px rgba(0, 0, 0, 0.3)";
                  e.currentTarget.style.background =
                    "rgba(255, 255, 255, 0.05)";
                }}
              >
                {/* Enhanced Gradient Border */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "15px",
                    background: project.featured
                      ? "linear-gradient(90deg, #6366F1 0%, #EC4899 50%, #F59E0B 100%)"
                      : "linear-gradient(90deg, #6366F1 0%, #EC4899 100%)",
                    borderRadius: "24px 24px 0 0",
                  }}
                />

                {project.featured && (
                  <div
                    className="position-absolute top-0 end-0 z-3 px-3 py-2 rounded-bottom-start"
                    style={{
                      background:
                        "linear-gradient(135deg, #10b981 0%, #059669 100%)",
                      color: "white",
                      fontSize: "0.85rem",
                      fontWeight: "700",
                      boxShadow: "0 6px 20px rgba(16, 185, 129, 0.4)",
                      marginTop: "4px",
                      letterSpacing: "0.02em",
                    }}
                  >
                    <i className="bi bi-star-fill me-1"></i>Featured
                  </div>
                )}

                {/* Enhanced Image Container */}
                <div
                  className="position-relative overflow-hidden m-0 mt-1"
                  style={{
                    height: "205px",
                    margin: "12px 12px 0 12px",
                    borderRadius: "16px",
                  }}
                >
                  <img
                    src={project.imageUrl}
                    className="card-img-top"
                    alt={project.title}
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      borderRadius: "16px",
                      transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
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
                        "linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%)",
                      borderRadius: "16px",
                      opacity: 0,
                      transition: "opacity 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.opacity = 1;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.opacity = 0;
                    }}
                  />
                </div>

                {/* Enhanced Card Body */}
                <div className="card-body pt-4 px-3 d-flex flex-column">
                  <div className="mb-3">
                    <h5
                      className="fw-bold mb-3"
                      style={{
                        color: "#F1F5F9",
                        fontSize: "1.5rem",
                        background:
                          "linear-gradient(135deg, #ffffff 0%, #CBD5E1 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {project.title}
                    </h5>
                    <p
                      className="mb-3"
                      style={{
                        fontSize: "1rem",
                        lineHeight: "1.7",
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        color: "#CBD5E1",
                        textAlign: "justify",
                      }}
                    >
                      {project.description}
                    </p>
                  </div>

                  {/* Enhanced Tags */}
                  <div className="mb-4 d-flex flex-wrap gap-2">
                    {project.tags.map((tag) => {
                      const tagColor = getTagColor(tag);
                      return (
                        <span
                          key={tag}
                          className="badge rounded-pill px-3 py-2"
                          style={{
                            background: tagColor.bg,
                            color: tagColor.text,
                            border: `1px solid ${tagColor.border}`,
                            fontSize: "0.85rem",
                            fontWeight: "600",
                            letterSpacing: "0.02em",
                            backdropFilter: "blur(10px)",
                            boxShadow: `0 4px 12px ${tagColor.border}20`,
                          }}
                        >
                          {tag}
                        </span>
                      );
                    })}
                  </div>

                  {/* Enhanced Action Buttons */}
                  <div className="my-3 d-flex gap-3">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="btn flex-fill rounded-3 fw-bold"
                      style={{
                        background:
                          "linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)",
                        color: "white",
                        border: "none",
                        padding: "14px 15px",
                        fontSize: "1rem",
                        letterSpacing: "0.02em",
                        boxShadow: "0 8px 25px rgba(99, 102, 241, 0.4)",
                        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform =
                          "translateY(-3px) scale(1.02)";
                        e.currentTarget.style.boxShadow =
                          "0 15px 35px rgba(99, 102, 241, 0.5)";
                        e.currentTarget.style.background =
                          "linear-gradient(135deg, #5856EB 0%, #7C3AED 100%)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform =
                          "translateY(0) scale(1)";
                        e.currentTarget.style.boxShadow =
                          "0 8px 25px rgba(99, 102, 241, 0.4)";
                        e.currentTarget.style.background =
                          "linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)";
                      }}
                    >
                      <i className="bi bi-box-arrow-up-right me-2"></i>
                      Live Demo
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="btn rounded-3 fw-bold"
                      style={{
                        background: "rgba(255, 255, 255, 0.05)",
                        color: "#F1F5F9",
                        border: "2px solid rgba(255, 255, 255, 0.2)",
                        padding: "14px 15px",
                        fontSize: "1rem",
                        letterSpacing: "0.02em",
                        backdropFilter: "blur(10px)",
                        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background =
                          "rgba(255, 255, 255, 0.15)";
                        e.currentTarget.style.color = "white";
                        e.currentTarget.style.transform =
                          "translateY(-3px) scale(1.02)";
                        e.currentTarget.style.borderColor =
                          "rgba(255, 255, 255, 0.4)";
                        e.currentTarget.style.boxShadow =
                          "0 8px 25px rgba(255, 255, 255, 0.1)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background =
                          "rgba(255, 255, 255, 0.05)";
                        e.currentTarget.style.color = "#F1F5F9";
                        e.currentTarget.style.transform =
                          "translateY(0) scale(1)";
                        e.currentTarget.style.borderColor =
                          "rgba(255, 255, 255, 0.2)";
                        e.currentTarget.style.boxShadow = "none";
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

        {/* Enhanced No Results State */}
        {filteredProjects.length === 0 && (
          <div
            className="text-center py-5"
            style={{
              transform: animate ? "translateY(0)" : "translateY(30px)",
              opacity: animate ? 1 : 0,
              transition: "all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.5s",
            }}
          >
            <div
              className="d-inline-flex align-items-center justify-content-center mb-4"
              style={{
                width: 120,
                height: 120,
                background: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(20px)",
                borderRadius: "24px",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                color: "#6366F1",
              }}
            >
              <i className="bi bi-search" style={{ fontSize: "3rem" }}></i>
            </div>
            <h4
              className="fw-bold mb-3"
              style={{ color: "#F1F5F9", fontSize: "1.8rem" }}
            >
              No Projects Found
            </h4>
            <p style={{ color: "#94A3B8", fontSize: "1.1rem" }}>
              Try selecting a different filter or view all projects.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Project;
