import React, { useEffect, useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

// Skill icon mapping using Devicon class names
const frontendTechnologies = [
  { name: "HTML/HTML5", level: 95, icon: "devicon-html5-plain colored" },
  { name: "CSS/CSS3", level: 90, icon: "devicon-css3-plain colored" },
  { name: "SCSS", level: 85, icon: "devicon-sass-original colored" },
  { name: "Bootstrap", level: 85, icon: "devicon-bootstrap-plain colored" },
  { name: "Tailwind", level: 80, icon: "devicon-tailwindcss-plain colored" },
  { name: "JavaScript", level: 90, icon: "devicon-javascript-plain colored" },
  { name: "Typescript", level: 80, icon: "devicon-typescript-plain colored" },
  { name: "React", level: 85, icon: "devicon-react-original colored" },
  { name: "Angular", level: 80, icon: "devicon-angularjs-plain colored" },
];

const uiTechnologies = [
  { name: "Adobe XD", level: 80, icon: "devicon-xd-plain colored" },
  { name: "Figma", level: 85, icon: "devicon-figma-plain colored" },
  { name: "Zeplin", level: 75, icon: "bi bi-palette2" },
  { name: "Mockup", level: 80, icon: "bi bi-easel" },
  { name: "Prototyping", level: 85, icon: "bi bi-vector-pen" },
  { name: "Wireframing", level: 80, icon: "bi bi-diagram-3" },
];

// Enhanced Circular Progress with gradient and shadow, plus subtle glow
const CircularProgress = ({
  value,
  size = 90,
  stroke = 8,
  color = "#6b6bff",
  bg = "#eaeaea",
  duration = 1200,
  children,
  gradientId = "grad1",
}) => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    let start = 0;
    const step = () => {
      start += 1;
      setProgress(Math.min(start, value));
      if (start < value) setTimeout(step, duration / value);
    };
    step();
    // eslint-disable-next-line
  }, [value]);
  const radius = (size - stroke) / 2;
  const circ = 2 * Math.PI * radius;
  const offset = circ - (progress / 100) * circ;
  return (
    <svg
      width={size}
      height={size}
      className="circular-progress"
      style={{
        filter: "drop-shadow(0 2px 8px rgba(60,64,67,0.10))",
        background:
          "radial-gradient(circle at 60% 40%, #f8f9fa 60%, #fff 100%)",
        borderRadius: "50%",
      }}
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color} />
          <stop offset="100%" stopColor="#cc5de8" />
        </linearGradient>
      </defs>
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke={bg}
        strokeWidth={stroke}
        fill="none"
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke={`url(#${gradientId})`}
        strokeWidth={stroke}
        fill="none"
        strokeDasharray={circ}
        strokeDashoffset={offset}
        strokeLinecap="round"
        style={{ transition: "stroke-dashoffset 0.5s" }}
      />
      <text
        x="50%"
        y="54%"
        textAnchor="middle"
        fontSize="1.15rem"
        fontWeight="bold"
        fill={color}
        dy=".3em"
        style={{
          fontFamily: "Poppins, Arial, sans-serif",
          filter: "drop-shadow(0 1px 2px #fff)",
        }}
      >
        {progress}%
      </text>
      {children}
    </svg>
  );
};

const Skills = () => {
  return (
    <div id="skills" className="container empty-space-top-20">
      <h3 className="fw-bold title-heading mb-5 text-center">
        <i className="bi bi-lightning-charge me-2"></i>
        <span className="secondary-gradient">Skill</span> Set
      </h3>
      <div className="row my-5 align-items-stretch">
        <div className="col-md-6 mb-5 d-flex flex-column align-items-center">
          <div
            className="card border-0 rounded-4 shadow-sm skill-card w-100 bg-white h-100"
            style={{
              minHeight: 540,
              background: "linear-gradient(135deg, #f8f9fa 70%, #e9ecef 100%)",
              border: "1.5px solid #f1f1f1",
            }}
          >
            <div className="card-body mb-5">
              <div className="text-center mb-3">
                <i
                  className="bi bi-code-slash card-icon"
                  style={{ color: "#6b6bff" }}
                ></i>
              </div>
              <h4
                className="fw-bold mb-4 text-center"
                style={{ letterSpacing: "0.01em" }}
              >
                Frontend Technologies
              </h4>
              <div className="row g-3 justify-content-center">
                {frontendTechnologies.map((tech, idx) => (
                  <div
                    key={tech.name}
                    className="col-4 d-flex flex-column align-items-center"
                  >
                    <div
                      className="mb-2 d-flex align-items-center justify-content-center"
                      style={{
                        width: 48,
                        height: 48,
                        borderRadius: "50%",
                        background: "#f8f9fa",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
                        marginBottom: 8,
                        border: "1.5px solid #eaeaea",
                      }}
                    >
                      {tech.icon.startsWith("devicon-") ? (
                        <i
                          className={`${tech.icon}`}
                          style={{ fontSize: "2.1rem" }}
                        ></i>
                      ) : (
                        <i
                          className={`${tech.icon} text-primary`}
                          style={{ fontSize: "2.1rem" }}
                        ></i>
                      )}
                    </div>
                    <CircularProgress
                      value={tech.level}
                      color="#6b6bff"
                      bg="#eaeaea"
                      size={90}
                      gradientId={`grad-frontend-${idx}`}
                    />
                    <div
                      className="fw-bold mt-1 text-center"
                      style={{
                        fontSize: "1.01rem",
                        letterSpacing: "0.01em",
                        marginTop: "0.4rem",
                        color: "#222",
                        minHeight: 28,
                      }}
                    >
                      {tech.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-5 d-flex flex-column align-items-center">
          <div
            className="card border-0 rounded-4 shadow-sm skill-card w-100 bg-white h-100"
            style={{
              minHeight: 540,
              background: "linear-gradient(135deg, #f8f9fa 70%, #f8e9f3 100%)",
              border: "1.5px solid #f1f1f1",
            }}
          >
            <div className="card-body mb-5">
              <div className="text-center mb-3">
                <i
                  className="bi bi-palette card-icon"
                  style={{ color: "#f06595" }}
                ></i>
              </div>
              <h4
                className="fw-bold mb-4 text-center"
                style={{ letterSpacing: "0.01em" }}
              >
                UI Technologies
              </h4>
              <div className="row g-3 justify-content-center">
                {uiTechnologies.map((tech, idx) => (
                  <div
                    key={tech.name}
                    className="col-4 d-flex flex-column align-items-center"
                  >
                    <div
                      className="mb-2 d-flex align-items-center justify-content-center"
                      style={{
                        width: 48,
                        height: 48,
                        borderRadius: "50%",
                        background: "#f8f9fa",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
                        marginBottom: 8,
                        border: "1.5px solid #eaeaea",
                      }}
                    >
                      {tech.icon.startsWith("devicon-") ? (
                        <i
                          className={`${tech.icon}`}
                          style={{ fontSize: "2.1rem" }}
                        ></i>
                      ) : (
                        <i
                          className={`${tech.icon} text-primary`}
                          style={{ fontSize: "2.1rem" }}
                        ></i>
                      )}
                    </div>
                    <CircularProgress
                      value={tech.level}
                      color="#f06595"
                      bg="#eaeaea"
                      size={90}
                      gradientId={`grad-ui-${idx}`}
                    />
                    <div
                      className="fw-bold mt-1 text-center"
                      style={{
                        fontSize: "1.01rem",
                        letterSpacing: "0.01em",
                        marginTop: "0.4rem",
                        color: "#222",
                        minHeight: 28,
                      }}
                    >
                      {tech.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
