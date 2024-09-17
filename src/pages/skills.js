import React from "react";

const Skills = () => {
  const frontendTechnologies = [
    { name: "HTML/HTML5", level: 90 },
    { name: "CSS/CSS3", level: 85 },
    { name: "SCSS", level: 80 },
    { name: "Bootstrap", level: 85 },
    { name: "Tailwind", level: 75 },
    { name: "JavaScript", level: 90 },
    { name: "Typescript", level: 70 },
    { name: "React", level: 85 },
    { name: "Angular", level: 70 },
  ];
  const uiTechnologies = [
    { name: "Adobe XD", level: 80 },
    { name: "Figma", level: 85 },
    { name: "Zeplin", level: 75 },
    { name: "UI/UX Designing", level: 90 },
    { name: "Mockup", level: 80 },
    { name: "Prototyping", level: 85 },
    { name: "Wireframing", level: 80 },
  ];

  return (
    <div className="container empty-space-40">
      <h3 className="fw-bold title-heading mb-5 text-center">
        Skill <span>Set</span>
      </h3>
      <div className="row my-5">
        <div className="col-md-6">
          <div className="card border-0 rounded-4 shadow-lg project-card skill-card h-100">
            <div className="card-body">
              <h4 className="fw-bold mb-3 text-center">
                Frontend Technologies
              </h4>
              <ul className="list-group list-group-flush">
                {frontendTechnologies.map((technology) => (
                  <li key={technology.name} className="list-group-item">
                    <div className="d-flex align-items-center justify-content-between">
                      <span className="fw-bold m-2">{technology.name}</span>
                      <div className="progress-container">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: `${technology.level}%` }}
                          aria-valuenow={technology.level}
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card border-0 rounded-4 shadow-lg project-card skill-card h-100">
            <div className="card-body">
              <h4 className="fw-bold mb-3 text-center">UI Technologies</h4>
              <ul className="list-group list-group-flush">
                {uiTechnologies.map((technology) => (
                  <li key={technology.name} className="list-group-item">
                    <div className="d-flex align-items-center justify-content-between">
                      <span className="fw-bold m-2">{technology.name}</span>
                      <div className="progress-container">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: `${technology.level}%` }}
                          aria-valuenow={technology.level}
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
