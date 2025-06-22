import React, { useEffect, useState, useRef } from "react";

// Enhanced data with better categorization and more professional icons
const frontendTechnologies = [
  { name: "HTML5", level: 95, color: "#E34F26", bgColor: "#E34F26" },
  { name: "JavaScript", level: 85, color: "#F7DF1E", bgColor: "#F7DF1E" },
  { name: "React.js", level: 80, color: "#61DAFB", bgColor: "#61DAFB" },
  { name: "Next.js", level: 75, color: "#000000", bgColor: "#000000" }, // Added Next.js
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
const CircularSkill = ({ value, label, color, bgColor, index }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const skillRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setProgress(value), 100 + index * 100);
        }
      },
      { threshold: 0.3 }
    );

    if (skillRef.current) {
      observer.observe(skillRef.current);
    }

    return () => observer.disconnect();
  }, [value, index]);

  const size = 110;
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
        padding: "1.5rem",
        borderRadius: "20px",
        background: "rgba(255, 255, 255, 0.05)",
        backdropFilter: "blur(20px)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        boxShadow: isVisible
          ? "0 15px 35px rgba(0, 0, 0, 0.3)"
          : "0 8px 20px rgba(0, 0, 0, 0.2)",
        transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
        transform: isVisible
          ? "translateY(0) scale(1)"
          : "translateY(30px) scale(0.9)",
        opacity: isVisible ? 1 : 0,
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-8px) scale(1.05)";
        e.currentTarget.style.boxShadow = `0 25px 50px ${color}25`;
        e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0) scale(1)";
        e.currentTarget.style.boxShadow = "0 15px 35px rgba(0, 0, 0, 0.3)";
        e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
      }}
    >
      {/* Gradient border accent */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "3px",
          background: `linear-gradient(90deg, ${color} 0%, ${color}80 100%)`,
          borderRadius: "20px 20px 0 0",
        }}
      />

      {/* Subtle background decoration */}
      <div
        style={{
          position: "absolute",
          top: "-50%",
          right: "-50%",
          width: "100%",
          height: "100%",
          background: `radial-gradient(circle, ${bgColor}08 0%, transparent 70%)`,
          borderRadius: "50%",
          opacity: 0.5,
          zIndex: 0,
        }}
      />

      <div style={{ position: "relative", zIndex: 1 }}>
        <svg
          width={size}
          height={size}
          style={{
            display: "block",
            filter: "drop-shadow(0 6px 12px rgba(0,0,0,0.2))",
          }}
        >
          {/* Background circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="rgba(255, 255, 255, 0.08)"
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
              transition: "stroke-dashoffset 2s cubic-bezier(0.4, 0, 0.2, 1)",
              filter: `drop-shadow(0 0 8px ${color}60)`,
            }}
          />
          {/* Percentage text */}
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="1.4rem"
            fontWeight="700"
            fill="#F1F5F9"
            style={{
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
          marginTop: "1rem",
          fontWeight: "600",
          fontSize: "1rem",
          color: "#F1F5F9",
          textAlign: "center",
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
      className="col-lg-6 col-12"
      style={{
        transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
        transform: isVisible
          ? "translateY(0) scale(1)"
          : "translateY(50px) scale(0.95)",
        opacity: isVisible ? 1 : 0,
      }}
    >
      <div
        style={{
          background: "rgba(255, 255, 255, 0.05)",
          backdropFilter: "blur(20px)",
          borderRadius: "24px",
          padding: "2.5rem",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
          position: "relative",
          overflow: "hidden",
          height: "100%",
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-10px)";
          e.currentTarget.style.boxShadow =
            "0 30px 60px rgba(99, 102, 241, 0.2)";
          e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 20px 40px rgba(0, 0, 0, 0.3)";
          e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
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
            background:
              "linear-gradient(90deg, #6366F1 0%, #EC4899 50%, #F59E0B 100%)",
            borderRadius: "24px 24px 0 0",
          }}
        />

        {/* Floating background elements */}
        <div
          style={{
            position: "absolute",
            top: "10%",
            right: "10%",
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 70%)",
            animation: "float 8s ease-in-out infinite",
          }}
        />

        {/* Category header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "2.5rem",
            paddingBottom: "1.5rem",
            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "16px",
              background: "linear-gradient(135deg, #6366F1 0%, #EC4899 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: "1.5rem",
              boxShadow: "0 12px 24px rgba(99, 102, 241, 0.4)",
              border: "2px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            <span style={{ fontSize: "1.8rem" }}>{icon}</span>
          </div>
          <h3
            style={{
              fontSize: "1.8rem",
              fontWeight: "700",
              color: "#F1F5F9",
              margin: 0,
              letterSpacing: "-0.025em",
              background: "linear-gradient(135deg, #F1F5F9 0%, #CBD5E1 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {title}
          </h3>
        </div>

        {/* Skills grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: "1.5rem",
          }}
          className="skills-grid"
        >
          {skills.map((skill, idx) => (
            <CircularSkill
              key={skill.name}
              value={skill.level}
              label={skill.name}
              color={skill.color}
              bgColor={skill.bgColor}
              index={idx}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  // Removed unused headerVisible state
  const [animate, setAnimate] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // No longer setting headerVisible
      },
      { threshold: 0.5 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Initialize animation
  useEffect(() => {
    setTimeout(() => setAnimate(true), 200);
  }, []);

  return (
    <section
      id="skills"
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
          ref={headerRef}
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
              ⚡ Technical Expertise
            </span>
          </div>

          <h2
            style={{
              fontSize: "clamp(2rem, 6vw, 4rem)",
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
            Skills & Technologies
          </h2>
          <p
            style={{
              color: "#94A3B8",
              fontSize: "1.2rem",
              margin: "0 auto",
              maxWidth: "600px",
              lineHeight: "1.6",
            }}
          >
            Crafting exceptional digital experiences with modern technologies
            and cutting-edge design principles
          </p>
        </div>

        {/* Skills categories */}
        <div className="row g-4 pt-4">
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
