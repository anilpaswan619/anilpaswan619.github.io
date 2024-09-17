import React from "react";

const Skills = () => {
  const frontendTechnologies = [
    "HTML/HMTL5",
    "CSS/CSS3",
    "SCSS",
    "Bootstrap",
    "Tailwind",
    "JavaScript",
    "Typescript",
    "React",
    "Angular",
  ];
  const uiTechnologies = [
    "Adobe XD",
    "Figma",
    "Zeplin",
    "UI/UX Designing",
    "Mockup",
    "Prototyping",
    "Wireframing",
  ];

  return (
    <div className="container empty-space-40">
      <h3 className="fw-bold title-heading mb-5 text-center">
        Skill <span>Set</span>
      </h3>
      <div className="row my-5">
        <div className="col-md-6">
          <div className="card shadow-sm skill-card h-100">
            <div className="card-body">
              <h4 className="fw-bold mb-3">Frontend Technologies</h4>
              <ul className="list-group list-group-flush">
                {frontendTechnologies.map((technology) => (
                  <li key={technology} className="list-group-item">
                    {technology}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card shadow-sm skill-card h-100">
            <div className="card-body">
              <h4 className="fw-bold mb-3">UI Technologies</h4>
              <ul className="list-group list-group-flush">
                {uiTechnologies.map((technology) => (
                  <li key={technology} className="list-group-item">
                    {technology}
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
