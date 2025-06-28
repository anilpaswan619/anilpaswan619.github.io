import React, { useState, useEffect, useRef } from "react";

const projects = [
  {
    title: "DOBBY",
    description: "The future of home maintenance platform with professional service providers, transparent pricing, and seamless user experience. Built with modern React architecture.",
    imageUrl: "/assets/dobby.png",
    liveLink: "https://dobby-anil.vercel.app/",
    githubLink: "https://github.com/anilpaswan619/dobby",
    category: "React",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    featured: true,
    color: "#6366f1"
  },
  {
    title: "Edusync",
    description: "Comprehensive online education platform connecting students and teachers with interactive lessons, real-time collaboration, and progress tracking.",
    imageUrl: "/assets/edusync.png",
    liveLink: "https://edusync-anil.vercel.app/",
    githubLink: "https://github.com/anilpaswan619/EduSync",
    category: "Angular",
    tags: ["Angular", "TypeScript", "Material UI", "Dashboard"],
    featured: true,
    color: "#ec4899"
  },
  {
    title: "Cookpedia",
    description: "Recipe sharing platform where culinary enthusiasts discover, share, and rate recipes from different cuisines with advanced search and filtering.",
    imageUrl: "/assets/Cookpedia.JPG",
    liveLink: "https://cookpedia-anil.vercel.app/",
    githubLink: "https://github.com/anilpaswan619/Cookpedia",
    category: "Angular",
    tags: ["Angular", "TypeScript", "Bootstrap", "API Integration"],
    color: "#10b981"
  },
  {
    title: "E-Health Dashboard",
    description: "Healthcare management system enabling patients to book appointments, access medical records, and communicate with healthcare providers.",
    imageUrl: "/assets/ehealth.JPG",
    liveLink: "https://e-health-dashboard-anil.vercel.app/",
    githubLink: "https://github.com/anilpaswan619/EHealth-Dashboard",
    category: "JavaScript",
    tags: ["JavaScript", "Dashboard", "Chart.js", "Responsive"],
    color: "#f59e0b"
  },
  {
    title: "Digital Marketing Agency",
    description: "Full-service digital agency website showcasing services like SEO, social media marketing, and content creation with modern design.",
    imageUrl: "/assets/digital.JPG",
    liveLink: "https://digitalmarketinganil.netlify.app/",
    githubLink: "https://github.com/anilpaswan619/digital-marketing-agency",
    category: "JavaScript",
    tags: ["JavaScript", "CSS3", "Responsive", "Animation"],
    color: "#8b5cf6"
  },
  {
    title: "Actoro",
    description: "Platform connecting actors and casting directors for collaboration, talent showcase, and project discovery in the entertainment industry.",
    imageUrl: "/assets/actro.JPG",
    liveLink: "https://actoro-paswan-anil.netlify.app/",
    githubLink: "https://github.com/anilpaswan619/Actoro",
    category: "HTML/CSS",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive"],
    color: "#ef4444"
  }
];

const categories = ["All", "React", "Angular", "JavaScript", "HTML/CSS"];

const Project = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleProjects, setVisibleProjects] = useState([]);
  const [animate, setAnimate] = useState(false);
  const projectRefs = useRef([]);

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 200);
  }, []);

  // Reset visible projects when category changes
  useEffect(() => {
    setVisibleProjects([]);
  }, [selectedCategory]);

  // Intersection Observer for project cards
  useEffect(() => {
    const observers = [];
    
    filteredProjects.forEach((_, index) => {
      if (projectRefs.current[index]) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setVisibleProjects(prev => 
                prev.includes(index) ? prev : [...prev, index]
              );
            }
          },
          { threshold: 0.2 }
        );
        
        observer.observe(projectRefs.current[index]);
        observers.push(observer);
      }
    });

    return () => observers.forEach(observer => observer.disconnect());
  }, [filteredProjects]);

  const getCategoryIcon = (category) => {
    const icons = {
      "All": "🌟",
      "React": "⚛️",
      "Angular": "🅰️",
      "JavaScript": "🟨",
      "HTML/CSS": "🌐"
    };
    return icons[category] || "📁";
  };

  return (
    <section id="projects" className="section dark">
      <div className="container">
        {/* Section Header */}
        <div 
          className="section-header"
          style={{
            opacity: animate ? 1 : 0,
            transform: animate ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s ease"
          }}
        >
          <div className="section-badge">
            <span>💼</span>
            <span>My Portfolio</span>
          </div>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-description">
            Explore my latest work showcasing modern web development skills and creative solutions
          </p>
        </div>

        {/* Category Filters */}
        <div 
          className="d-flex flex-wrap justify-content-center gap-3 mb-5"
          style={{
            opacity: animate ? 1 : 0,
            transform: animate ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.8s ease 0.2s"
          }}
        >
          {categories.map((category) => (
            <button
              key={category}
              className={`btn rounded-pill px-4 py-2 fw-semibold border-0 ${
                selectedCategory === category ? 'active' : ''
              }`}
              style={{
                background: selectedCategory === category 
                  ? "linear-gradient(135deg, #6366f1, #ec4899)"
                  : "rgba(255, 255, 255, 0.05)",
                color: selectedCategory === category ? "white" : "#cbd5e1",
                backdropFilter: "blur(20px)",
                border: selectedCategory === category 
                  ? "none" 
                  : "1px solid rgba(255, 255, 255, 0.1)",
                transition: "all 0.3s ease",
                boxShadow: selectedCategory === category 
                  ? "0 8px 25px rgba(99, 102, 241, 0.3)" 
                  : "none"
              }}
              onClick={() => setSelectedCategory(category)}
              onMouseEnter={(e) => {
                if (selectedCategory !== category) {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }
              }}
              onMouseLeave={(e) => {
                if (selectedCategory !== category) {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
                  e.currentTarget.style.transform = "translateY(0)";
                }
              }}
            >
              <span style={{ marginRight: "0.5rem" }}>
                {getCategoryIcon(category)}
              </span>
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="row g-4">
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              ref={el => projectRefs.current[index] = el}
              className="col-lg-4 col-md-6"
              style={{
                opacity: visibleProjects.includes(index) ? 1 : 0,
                transform: visibleProjects.includes(index) 
                  ? "translateY(0) scale(1)" 
                  : "translateY(50px) scale(0.9)",
                transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
                transitionDelay: `${index * 0.1}s`
              }}
            >
              <div className="project-card">
                {/* Featured Badge */}
                {project.featured && (
                  <div 
                    style={{
                      position: "absolute",
                      top: "1rem",
                      right: "1rem",
                      background: "linear-gradient(135deg, #10b981, #059669)",
                      color: "white",
                      padding: "0.5rem 1rem",
                      borderRadius: "20px",
                      fontSize: "0.8rem",
                      fontWeight: "600",
                      zIndex: 2,
                      boxShadow: "0 4px 15px rgba(16, 185, 129, 0.3)"
                    }}
                  >
                    ⭐ Featured
                  </div>
                )}

                {/* Project Image */}
                <div className="project-image">
                  <img src={project.imageUrl} alt={project.title} />
                  <div className="project-overlay">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="overlay-btn"
                    >
                      <i className="bi bi-eye me-2"></i>
                      Live Demo
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="overlay-btn"
                    >
                      <i className="bi bi-github me-2"></i>
                      Code
                    </a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  {/* Tags */}
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="project-actions">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      <i className="bi bi-box-arrow-up-right me-2"></i>
                      Live Demo
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline"
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
              style={{
                fontSize: "4rem",
                marginBottom: "1rem",
                opacity: 0.5
              }}
            >
              🔍
            </div>
            <h4 style={{ color: "white", marginBottom: "1rem" }}>
              No projects found
            </h4>
            <p style={{ color: "#94a3b8" }}>
              Try selecting a different category to see more projects.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Project;