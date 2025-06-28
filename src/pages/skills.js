import React, { useEffect, useState, useRef } from "react";

const skillCategories = [
  {
    title: "Frontend Technologies",
    icon: "💻",
    color: "#6366f1",
    skills: [
      { name: "React.js", level: 90, icon: "⚛️", color: "#61DAFB" },
      { name: "Next.js", level: 85, icon: "▲", color: "#000000" },
      { name: "TypeScript", level: 80, icon: "📘", color: "#3178C6" },
      { name: "JavaScript", level: 95, icon: "🟨", color: "#F7DF1E" },
      { name: "Angular", level: 75, icon: "🅰️", color: "#DD0031" },
      { name: "HTML5", level: 95, icon: "🌐", color: "#E34F26" }
    ]
  },
  {
    title: "Styling & Design",
    icon: "🎨",
    color: "#ec4899",
    skills: [
      { name: "CSS3", level: 90, icon: "🎨", color: "#1572B6" },
      { name: "Tailwind CSS", level: 85, icon: "💨", color: "#06B6D4" },
      { name: "Bootstrap", level: 90, icon: "🅱️", color: "#7952B3" },
      { name: "SASS/SCSS", level: 85, icon: "💎", color: "#CF649A" },
      { name: "Material-UI", level: 80, icon: "🔷", color: "#0081CB" },
      { name: "Figma", level: 75, icon: "🎯", color: "#F24E1E" }
    ]
  }
];

const CircularProgress = ({ skill, index, isVisible }) => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setProgress(skill.level);
      }, index * 200);
      return () => clearTimeout(timer);
    }
  }, [isVisible, skill.level, index]);

  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div 
      className="text-center"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0) scale(1)" : "translateY(30px) scale(0.9)",
        transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s`
      }}
    >
      <div 
        style={{
          position: "relative",
          width: "120px",
          height: "120px",
          margin: "0 auto 1rem"
        }}
      >
        <svg width="120" height="120" style={{ transform: "rotate(-90deg)" }}>
          {/* Background circle */}
          <circle
            cx="60"
            cy="60"
            r={radius}
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth="8"
            fill="none"
          />
          {/* Progress circle */}
          <circle
            cx="60"
            cy="60"
            r={radius}
            stroke={skill.color}
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            style={{
              transition: "stroke-dashoffset 1.5s ease-in-out",
              filter: `drop-shadow(0 0 8px ${skill.color}60)`
            }}
          />
        </svg>
        
        {/* Center content */}
        <div 
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center"
          }}
        >
          <div style={{ fontSize: "2rem", marginBottom: "0.25rem" }}>
            {skill.icon}
          </div>
          <div style={{ 
            color: "white", 
            fontWeight: "700", 
            fontSize: "1.1rem" 
          }}>
            {progress}%
          </div>
        </div>
      </div>
      
      <h6 style={{ 
        color: "white", 
        fontWeight: "600", 
        fontSize: "0.9rem",
        margin: 0
      }}>
        {skill.name}
      </h6>
    </div>
  );
};

const SkillCategory = ({ category, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const categoryRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 300);
        }
      },
      { threshold: 0.2 }
    );

    if (categoryRef.current) {
      observer.observe(categoryRef.current);
    }

    return () => observer.disconnect();
  }, [index]);

  return (
    <div 
      ref={categoryRef}
      className="col-lg-6"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(50px)",
        transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)"
      }}
    >
      <div className="skill-category">
        <div className="category-header">
          <div 
            className="category-icon"
            style={{ background: `linear-gradient(135deg, ${category.color}, ${category.color}80)` }}
          >
            {category.icon}
          </div>
          <h3 className="category-title">{category.title}</h3>
        </div>
        
        <div 
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
            gap: "2rem",
            padding: "1rem 0"
          }}
        >
          {category.skills.map((skill, skillIndex) => (
            <CircularProgress
              key={skill.name}
              skill={skill}
              index={skillIndex}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 200);
  }, []);

  return (
    <section id="skills" className="section dark">
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
            <span>⚡</span>
            <span>Technical Expertise</span>
          </div>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-description">
            Mastering modern technologies to build exceptional digital experiences
          </p>
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={category.title}
              category={category}
              index={index}
            />
          ))}
        </div>

        {/* Additional Skills */}
        <div 
          className="row mt-5"
          style={{
            opacity: animate ? 1 : 0,
            transform: animate ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s ease 1s"
          }}
        >
          <div className="col-12">
            <div className="card text-center">
              <div className="card-icon">
                <i className="bi bi-tools"></i>
              </div>
              <h3 className="card-title">Additional Tools & Technologies</h3>
              <div className="card-description">
                <div 
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "1rem",
                    justifyContent: "center",
                    marginTop: "1.5rem"
                  }}
                >
                  {[
                    { name: "Git & GitHub", icon: "🔧" },
                    { name: "VS Code", icon: "💻" },
                    { name: "Chrome DevTools", icon: "🛠️" },
                    { name: "Postman", icon: "📡" },
                    { name: "Jira", icon: "📋" },
                    { name: "Slack", icon: "💬" },
                    { name: "Adobe XD", icon: "🎨" },
                    { name: "Responsive Design", icon: "📱" }
                  ].map((tool) => (
                    <div
                      key={tool.name}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        padding: "0.75rem 1.25rem",
                        background: "rgba(255, 255, 255, 0.05)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        borderRadius: "25px",
                        color: "white",
                        fontSize: "0.9rem",
                        fontWeight: "500",
                        transition: "all 0.3s ease"
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
                        e.currentTarget.style.transform = "translateY(-2px)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
                        e.currentTarget.style.transform = "translateY(0)";
                      }}
                    >
                      <span>{tool.icon}</span>
                      <span>{tool.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;