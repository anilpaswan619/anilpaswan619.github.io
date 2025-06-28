import React, { useState, useEffect, useRef } from "react";

const Description = () => {
  const [animate, setAnimate] = useState(false);
  const [visibleSections, setVisibleSections] = useState({});
  const sectionRefs = useRef({});

  const experiences = [
    {
      title: "Technical Lead – UI/Frontend Developer",
      company: "Royal Cyber Private Limited",
      period: "Dec 2021 – July 2025",
      location: "Bangalore, India (Remote)",
      highlights: [
        "Led development of enterprise applications for AMEX Bahrain and CMS Vendor Management",
        "Integrated Guidewire Cloud APIs into React architecture",
        "Customized Bootstrap, Tailwind CSS, and Material-UI frameworks",
        "Built reusable UI components reducing development time by 40%"
      ]
    },
    {
      title: "Web Developer Intern",
      company: "LetsAlign | Advids",
      period: "Sep 2021 – Nov 2021",
      location: "Mumbai, India (Remote)",
      highlights: [
        "Developed reusable components from Figma designs",
        "Optimized UI performance and rendering efficiency",
        "Participated in agile development processes"
      ]
    }
  ];

  const skills = [
    {
      category: "Frontend Technologies",
      icon: "💻",
      items: [
        { name: "React.js", level: 90, color: "#61DAFB" },
        { name: "Next.js", level: 85, color: "#000000" },
        { name: "TypeScript", level: 80, color: "#3178C6" },
        { name: "JavaScript", level: 95, color: "#F7DF1E" },
        { name: "Angular", level: 75, color: "#DD0031" },
        { name: "HTML5", level: 95, color: "#E34F26" }
      ]
    },
    {
      category: "Styling & Design",
      icon: "🎨",
      items: [
        { name: "CSS3", level: 90, color: "#1572B6" },
        { name: "Tailwind CSS", level: 85, color: "#06B6D4" },
        { name: "Bootstrap", level: 90, color: "#7952B3" },
        { name: "SASS/SCSS", level: 85, color: "#CF649A" },
        { name: "Material-UI", level: 80, color: "#0081CB" },
        { name: "Figma", level: 75, color: "#F24E1E" }
      ]
    }
  ];

  const achievements = [
    {
      icon: "🏆",
      title: "Enterprise Solutions",
      description: "Successfully delivered large-scale applications for Fortune 500 companies"
    },
    {
      icon: "⚡",
      title: "Performance Optimization",
      description: "Improved application performance by 60% through code optimization"
    },
    {
      icon: "🔧",
      title: "API Integration",
      description: "Expert in integrating complex APIs including Guidewire Cloud services"
    },
    {
      icon: "📱",
      title: "Responsive Design",
      description: "Created pixel-perfect responsive designs across all device types"
    }
  ];

  useEffect(() => {
    setTimeout(() => setAnimate(true), 200);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observers = {};
    
    Object.keys(sectionRefs.current).forEach(key => {
      if (sectionRefs.current[key]) {
        observers[key] = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setVisibleSections(prev => ({ ...prev, [key]: true }));
            }
          },
          { threshold: 0.2 }
        );
        observers[key].observe(sectionRefs.current[key]);
      }
    });

    return () => {
      Object.values(observers).forEach(observer => observer.disconnect());
    };
  }, []);

  const SkillBar = ({ skill, index }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
      if (visibleSections.skills) {
        setTimeout(() => setProgress(skill.level), index * 100);
      }
    }, [visibleSections.skills, skill.level, index]);

    return (
      <div className="skill-item mb-3">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <span style={{ color: "white", fontWeight: "600" }}>{skill.name}</span>
          <span style={{ color: skill.color, fontWeight: "600" }}>{progress}%</span>
        </div>
        <div 
          style={{
            height: "8px",
            background: "rgba(255, 255, 255, 0.1)",
            borderRadius: "4px",
            overflow: "hidden"
          }}
        >
          <div
            style={{
              height: "100%",
              width: `${progress}%`,
              background: `linear-gradient(90deg, ${skill.color}, ${skill.color}80)`,
              borderRadius: "4px",
              transition: "width 1s ease-out",
              boxShadow: `0 0 10px ${skill.color}40`
            }}
          />
        </div>
      </div>
    );
  };

  return (
    <section id="description" className="section dark">
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
            <span>Professional Journey</span>
          </div>
          <h2 className="section-title">About My Experience</h2>
          <p className="section-description">
            Crafting exceptional digital experiences with passion, precision, and cutting-edge technology
          </p>
        </div>

        <div className="row g-4">
          {/* Left Column - Experience & Achievements */}
          <div className="col-lg-8">
            {/* Professional Experience */}
            <div 
              ref={el => sectionRefs.current.experience = el}
              className="card mb-4"
              style={{
                opacity: visibleSections.experience ? 1 : 0,
                transform: visibleSections.experience ? "translateX(0)" : "translateX(-50px)",
                transition: "all 0.8s ease"
              }}
            >
              <div className="card-icon">
                <i className="bi bi-briefcase"></i>
              </div>
              <h3 className="card-title">Professional Experience</h3>
              
              {experiences.map((exp, index) => (
                <div key={index} className="mb-4">
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <div>
                      <h5 style={{ color: "#6366f1", fontWeight: "700", marginBottom: "0.25rem" }}>
                        {exp.title}
                      </h5>
                      <h6 style={{ color: "#ec4899", fontWeight: "600", marginBottom: "0.25rem" }}>
                        {exp.company}
                      </h6>
                    </div>
                    <div className="text-end">
                      <small style={{ 
                        color: "#94a3b8", 
                        background: "rgba(255, 255, 255, 0.05)",
                        padding: "0.25rem 0.75rem",
                        borderRadius: "12px",
                        fontSize: "0.8rem"
                      }}>
                        {exp.period}
                      </small>
                      <div style={{ color: "#64748b", fontSize: "0.8rem", marginTop: "0.25rem" }}>
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  
                  <ul style={{ color: "#cbd5e1", paddingLeft: "1.5rem", marginBottom: "1.5rem" }}>
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} style={{ marginBottom: "0.5rem", lineHeight: "1.6" }}>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  
                  {index < experiences.length - 1 && (
                    <hr style={{ 
                      border: "none", 
                      height: "1px", 
                      background: "rgba(255, 255, 255, 0.1)",
                      margin: "1.5rem 0"
                    }} />
                  )}
                </div>
              ))}
            </div>

            {/* Key Achievements */}
            <div 
              ref={el => sectionRefs.current.achievements = el}
              className="card"
              style={{
                opacity: visibleSections.achievements ? 1 : 0,
                transform: visibleSections.achievements ? "translateX(0)" : "translateX(-50px)",
                transition: "all 0.8s ease 0.2s"
              }}
            >
              <div className="card-icon">
                <i className="bi bi-trophy"></i>
              </div>
              <h3 className="card-title">Key Achievements</h3>
              
              <div className="row g-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="col-md-6">
                    <div 
                      style={{
                        padding: "1.5rem",
                        background: "rgba(255, 255, 255, 0.03)",
                        border: "1px solid rgba(255, 255, 255, 0.05)",
                        borderRadius: "16px",
                        transition: "all 0.3s ease",
                        height: "100%"
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)";
                        e.currentTarget.style.transform = "translateY(-5px)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "rgba(255, 255, 255, 0.03)";
                        e.currentTarget.style.transform = "translateY(0)";
                      }}
                    >
                      <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>
                        {achievement.icon}
                      </div>
                      <h5 style={{ color: "white", fontWeight: "600", marginBottom: "0.75rem" }}>
                        {achievement.title}
                      </h5>
                      <p style={{ color: "#94a3b8", fontSize: "0.9rem", margin: 0, lineHeight: "1.5" }}>
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Skills */}
          <div className="col-lg-4">
            <div 
              ref={el => sectionRefs.current.skills = el}
              className="card"
              style={{
                opacity: visibleSections.skills ? 1 : 0,
                transform: visibleSections.skills ? "translateX(0)" : "translateX(50px)",
                transition: "all 0.8s ease 0.4s"
              }}
            >
              <div className="card-icon">
                <i className="bi bi-lightning-charge"></i>
              </div>
              <h3 className="card-title">Technical Skills</h3>
              
              {skills.map((skillGroup, groupIndex) => (
                <div key={groupIndex} className="mb-4">
                  <div className="d-flex align-items-center mb-3">
                    <span style={{ fontSize: "1.5rem", marginRight: "0.75rem" }}>
                      {skillGroup.icon}
                    </span>
                    <h5 style={{ color: "white", fontWeight: "600", margin: 0 }}>
                      {skillGroup.category}
                    </h5>
                  </div>
                  
                  {skillGroup.items.map((skill, index) => (
                    <SkillBar key={skill.name} skill={skill} index={index} />
                  ))}
                  
                  {groupIndex < skills.length - 1 && (
                    <hr style={{ 
                      border: "none", 
                      height: "1px", 
                      background: "rgba(255, 255, 255, 0.1)",
                      margin: "2rem 0 1.5rem"
                    }} />
                  )}
                </div>
              ))}
            </div>

            {/* Education Card */}
            <div 
              className="card mt-4"
              style={{
                opacity: visibleSections.skills ? 1 : 0,
                transform: visibleSections.skills ? "translateX(0)" : "translateX(50px)",
                transition: "all 0.8s ease 0.6s"
              }}
            >
              <div className="card-icon">
                <i className="bi bi-mortarboard"></i>
              </div>
              <h3 className="card-title">Education</h3>
              <div>
                <h5 style={{ color: "#6366f1", fontWeight: "600", marginBottom: "0.5rem" }}>
                  B.Tech Information Technology
                </h5>
                <p style={{ color: "#94a3b8", marginBottom: "0.5rem" }}>
                  Dr. A.P.J. Abdul Kalam Technical University
                </p>
                <small style={{ color: "#64748b" }}>2011 - 2015</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Description;