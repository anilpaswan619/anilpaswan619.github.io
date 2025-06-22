import React, { useEffect, useState, useRef } from "react";

// Enhanced data with better categorization and more professional icons
const frontendTechnologies = [
  { name: "HTML5", level: 95, color: "#E34F26", bgColor: "#E34F26" },
  { name: "CSS3", level: 90, color: "#1572B6", bgColor: "#1572B6" },
  { name: "JavaScript", level: 85, color: "#F7DF1E", bgColor: "#F7DF1E" },
  { name: "React.js", level: 80, color: "#61DAFB", bgColor: "#61DAFB" },
  { name: "TypeScript", level: 75, color: "#3178C6", bgColor: "#3178C6" },
  { name: "Angular", level: 70, color: "#DD0031", bgColor: "#DD0031" },
];

const uiTechnologies = [
  { name: "SASS", level: 85, color: "#CF649A", bgColor: "#CF649A" },
  { name: "Bootstrap", level: 80, color: "#7952B3", bgColor: "#7952B3" },
  { name: "Tailwind", level: 80, color: "#06B6D4", bgColor: "#06B6D4" },
  { name: "Material UI", level: 75, color: "#0081CB", bgColor: "#0081CB" },
  { name: "Figma", level: 70, color: "#F24E1E", bgColor: "#F24E1E" },
  { name: "Adobe XD", level: 70, color: "#FF61F6", bgColor: "#FF61F6" },
];

// Enhanced circular progress component with better animations and styling
const CircularSkill = ({ value, label, color, bgColor }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const skillRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setProgress(value), 100);
        }
      },
      { threshold: 0.3 }
    );

    if (skillRef.current) {
      observer.observe(skillRef.current);
    }

    return () => observer.disconnect();
  }, [value]);

  const size = 100;
  const stroke = 8;
  const radius = (size - stroke) / 2;
  const circ = 2 * Math.PI * radius;
  const offset = circ - (progress / 100) * circ;

  return (
    <div
      ref={skillRef}
      className="skill-item"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "1.5rem",
        padding: "1rem",
        borderRadius: "16px",
        background: "linear-gradient(145deg, #ffffff, #f8f9fa)",
        boxShadow: isVisible
          ? "0 10px 30px rgba(0,0,0,0.1)"
          : "0 5px 15px rgba(0,0,0,0.05)",
        transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        opacity: isVisible ? 1 : 0,
        border: "1px solid rgba(255,255,255,0.2)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle background decoration */}
      <div
        style={{
          position: "absolute",
          top: "-50%",
          right: "-50%",
          width: "100%",
          height: "100%",
          background: `linear-gradient(45deg, ${bgColor}10, transparent)`,
          borderRadius: "50%",
          opacity: 0.3,
          zIndex: 0,
        }}
      />

      <div style={{ position: "relative", zIndex: 1 }}>
        <svg
          width={size}
          height={size}
          style={{
            display: "block",
            filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.1))",
          }}
        >
          {/* Background circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="rgba(0,0,0,0.05)"
            strokeWidth={stroke}
            fill="none"
          />
          {/* Progress circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={color}
            strokeWidth={stroke}
            fill="none"
            strokeDasharray={circ}
            strokeDashoffset={offset}
            strokeLinecap="round"
            style={{
              transition: "stroke-dashoffset 1.5s cubic-bezier(0.4, 0, 0.2, 1)",
              filter: "drop-shadow(0 0 6px rgba(0,0,0,0.2))",
            }}
          />
          {/* Percentage text */}
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="1.2rem"
            fontWeight="700"
            fill="#2d3748"
            style={{
              fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
              userSelect: "none",
            }}
          >
            {progress}%
          </text>
        </svg>
      </div>

      {/* Skill name */}
      <div
        style={{
          marginTop: "0.75rem",
          fontWeight: "600",
          fontSize: "0.9rem",
          color: "#2d3748",
          textAlign: "center",
          fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
          letterSpacing: "0.025em",
          position: "relative",
          zIndex: 1,
        }}
      >
        {label}
      </div>
    </div>
  );
};

const SkillCategory = ({ title, icon, skills, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const categoryRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (categoryRef.current) {
      observer.observe(categoryRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={categoryRef}
      style={{
        flex: "1 1 100%",
        minWidth: "300px",
        maxWidth: "600px",
        background: "linear-gradient(145deg, #ffffff, #f8f9fa)",
        borderRadius: "24px",
        padding: "2rem",
        boxShadow: isVisible
          ? "0 20px 40px rgba(0,0,0,0.1), 0 8px 16px rgba(0,0,0,0.06)"
          : "0 10px 20px rgba(0,0,0,0.05)",
        border: "1px solid rgba(255,255,255,0.8)",
        transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
        transform: isVisible
          ? "translateY(0) scale(1)"
          : "translateY(30px) scale(0.95)",
        opacity: isVisible ? 1 : 0,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative gradient overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "4px",
          background: "linear-gradient(90deg, #667eea 0%, #764ba2 100%)",
          borderRadius: "24px 24px 0 0",
        }}
      />

      {/* Category header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "2rem",
          paddingBottom: "1rem",
          borderBottom: "2px solid rgba(0,0,0,0.05)",
        }}
      >
        <div
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "12px",
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginRight: "1rem",
            boxShadow: "0 8px 16px rgba(102, 126, 234, 0.3)",
          }}
        >
          <span style={{ fontSize: "1.5rem", color: "white" }}>{icon}</span>
        </div>
        <h3
          style={{
            fontSize: "1.5rem",
            fontWeight: "700",
            color: "#2d3748",
            margin: 0,
            fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
            letterSpacing: "-0.025em",
          }}
        >
          {title}
        </h3>
      </div>

      {/* Skills grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
          gap: "1rem",
          "@media (max-width: 768px)": {
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "0.75rem",
          },
        }}
      >
        {skills.map((skill, idx) => (
          <CircularSkill
            key={skill.name}
            value={skill.level}
            label={skill.name}
            color={skill.color}
            bgColor={skill.bgColor}
          />
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const [headerVisible, setHeaderVisible] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      style={{
        padding: "4rem 0",
        background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
        minHeight: "100vh",
        position: "relative",
      }}
    >
      {/* Background decorations */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "5%",
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          background:
            "linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1))",
          filter: "blur(40px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "20%",
          right: "10%",
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          background:
            "linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1))",
          filter: "blur(60px)",
        }}
      />

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
        {/* Section header */}
        <div
          ref={headerRef}
          style={{
            textAlign: "center",
            marginBottom: "4rem",
            transform: headerVisible ? "translateY(0)" : "translateY(30px)",
            opacity: headerVisible ? 1 : 0,
            transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: "800",
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              marginBottom: "1rem",
              fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
              letterSpacing: "-0.025em",
            }}
          >
            ⚡ Skill Set
          </h2>
          <p
            style={{
              fontSize: "1.1rem",
              color: "#4a5568",
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: "1.6",
              fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
            }}
          >
            Crafting exceptional digital experiences with modern technologies
            and design principles
          </p>
        </div>

        {/* Skills categories */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "2rem",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <SkillCategory
            title="Frontend Technologies"
            icon="💻"
            skills={frontendTechnologies}
            delay={200}
          />
          <SkillCategory
            title="UI/UX Design"
            icon="🎨"
            skills={uiTechnologies}
            delay={400}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
