import React, { useEffect, useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

// Data for the circular skill UI (matches attached design)
const frontendTechnologies = [
  { name: "HTML5", level: 95, icon: "bi bi-filetype-html" },
  { name: "CSS3", level: 90, icon: "bi bi-filetype-css" },
  { name: "JavaScript", level: 85, icon: "bi bi-filetype-js" },
  { name: "React.js", level: 80, icon: "bi bi-filetype-tsx" },
  { name: "Typescript", level: 75, icon: "bi bi-filetype-tsx" },
  { name: "Angular", level: 70, icon: "bi bi-filetype-tsx" },
];

const uiTechnologies = [
  { name: "SASS", level: 85, icon: "bi bi-filetype-scss" },
  { name: "Bootstrap", level: 80, icon: "bi bi-bootstrap" },
  { name: "Tailwind", level: 80, icon: "bi bi-wind" },
  { name: "Material UI", level: 75, icon: "bi bi-palette" },
  { name: "Figma", level: 70, icon: "bi bi-easel" },
  { name: "Adobe XD", level: 70, icon: "bi bi-easel2" },
];

// Circular progress component styled as per design
const CircularSkill = ({ value, label, icon }) => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    setTimeout(() => setProgress(value), 200);
  }, [value]);
  const size = 90;
  const stroke = 7;
  const radius = (size - stroke) / 2;
  const circ = 2 * Math.PI * radius;
  const offset = circ - (progress / 100) * circ;
  return (
    <div className="d-flex flex-column align-items-center justify-content-center mb-3">
      <svg
        width={size}
        height={size}
        style={{ display: "block" }}
        className="circular-skill"
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#eee"
          strokeWidth={stroke}
          fill="none"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#f06595"
          strokeWidth={stroke}
          fill="none"
          strokeDasharray={circ}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{
            transition: "stroke-dashoffset 1s cubic-bezier(.4,2,.6,1)",
          }}
        />
        <text
          x="50%"
          y="54%"
          textAnchor="middle"
          fontSize="1.1rem"
          fontWeight="bold"
          fill="#f06595"
          dy=".3em"
          style={{
            fontFamily: "Poppins, Arial, sans-serif",
            userSelect: "none",
          }}
        >
          {progress}%
        </text>
      </svg>
      <div
        className="mt-2 d-flex align-items-center justify-content-center"
        style={{
          fontWeight: 500,
          fontSize: "1.05rem",
          color: "#181818",
          textAlign: "center",
          gap: 6,
        }}
      >
        {icon && (
          <i className={icon} style={{ fontSize: 18, color: "#f06595" }}></i>
        )}
        <span>{label}</span>
      </div>
    </div>
  );
};

const Skills = () => (
  <div id="skills" className="container empty-space-top-20">
    <h3 className="fw-bold title-heading mb-5 text-center">
      <i className="bi bi-lightning-charge me-2"></i>
      <span className="secondary-gradient">Skill</span> Set
    </h3>
    <div className="d-flex flex-wrap gap-4 mt-3">
      <div
        className="card rounded-4 shadow-sm border-0 px-4 py-3"
        style={{ flex: "1 1 48%" }}
      >
        <div className="d-flex align-items-center mb-4">
          <i
            className="bi bi-code-slash fs-4 me-2"
            style={{ color: "#000" }}
          ></i>
          <span className="fw-bold" style={{ fontSize: "1.25rem" }}>
            Frontend Technologies
          </span>
        </div>
        <div className="row">
          {frontendTechnologies.map((tech, idx) => (
            <div
              key={tech.name}
              className="col-4 d-flex flex-column align-items-center mb-4"
            >
              <CircularSkill
                value={tech.level}
                label={tech.name}
                icon={tech.icon}
              />
            </div>
          ))}
        </div>
      </div>

      <div
        className="card rounded-4 shadow-sm border-0 px-4 py-3"
        style={{ flex: "1 1 48%" }}
      >
        <div className="d-flex align-items-center mb-4">
          <i className="bi bi-palette fs-4 me-2" style={{ color: "#000" }}></i>
          <span className="fw-bold" style={{ fontSize: "1.25rem" }}>
            UI Technologies
          </span>
        </div>
        <div className="row">
          {uiTechnologies.map((tech, idx) => (
            <div
              key={tech.name}
              className="col-4 d-flex flex-column align-items-center mb-4"
            >
              <CircularSkill
                value={tech.level}
                label={tech.name}
                icon={tech.icon}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Skills;
