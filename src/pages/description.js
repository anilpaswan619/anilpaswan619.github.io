import React from "react";

const Description = () => {
  return (
    <div className="container empty-space-40">
      <div className="d-flex align-items-center mb-4">
        <img
          src="/assets/photo.jpg"
          alt="About Icon"
          style={{
            width: 48,
            height: 48,
            borderRadius: "50%",
            objectFit: "cover",
            marginRight: 18,
            border: "2.5px solid #e0e0e0",
            boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
          }}
        />
        <h3
          className="fw-bold title-heading mb-0"
          style={{ fontSize: "2.1rem", letterSpacing: "0.01em" }}
        >
          About <span>Me</span>
        </h3>
      </div>
      <div
        className="fst-italic text-secondary mb-4"
        style={{
          fontSize: "1.13rem",

          borderLeft: "4px solid #222",
          padding: "0.7rem 1.2rem",
          borderRadius: "0 12px 12px 0",
          boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
          maxWidth: 580,
        }}
      >
        <i className="bi bi-quote pe-2"></i>
        Crafting pixel-perfect UIs with performance in mind.
      </div>
      <div className="row align-items-center">
        <div className="col-lg-12 mb-4 mb-lg-0">
          <div
            className="description-text fs-6 p-4"
            style={{
              background: "#fff",
              borderRadius: "18px",

              lineHeight: 1.8,
              fontSize: "1.13rem",
              color: "#444",
              minHeight: 180,
            }}
          >
            As a passionate{" "}
            <span className="fw-semibold">Frontend & UI Developer</span> with
            over <span className="fw-semibold">7+ years</span> of experience, I
            specialize in building dynamic and responsive web applications. My
            expertise in modern JavaScript frameworks and libraries enables me
            to craft user-friendly and visually appealing interfaces. I am
            committed to continuous learning and stay up-to-date with the latest
            industry trends to consistently deliver high-quality solutions.
          </div>
          {/* Cards below the about text */}
          <div className="row g-4 mt-1">
            <div className="col-md-6 d-flex">
              <div
                className="about-modern-card flex-fill text-center p-4 shadow-sm bg-white rounded-4 mx-auto border-0"
                style={{ minHeight: 170 }}
              >
                <div className="mb-3">
                  <i
                    className="bi bi-briefcase"
                    style={{ fontSize: "2.5rem", color: "#222" }}
                  ></i>
                </div>
                <div
                  className="fw-semibold"
                  style={{ fontSize: "1.35rem", letterSpacing: "0.01em" }}
                >
                  Experience
                </div>
                <div
                  className="mt-2 "
                  style={{
                    letterSpacing: "0.01em",
                    color: "#666",
                  }}
                >
                  7+ years in Frontend & UI Development
                </div>
              </div>
            </div>
            <div className="col-md-6 d-flex">
              <div
                className="about-modern-card flex-fill text-center p-4 shadow-sm bg-white rounded-4 pb-5 mx-auto border-0"
                style={{ minHeight: 170 }}
              >
                <div className="mb-3">
                  <i
                    className="bi bi-mortarboard"
                    style={{ fontSize: "2.5rem", color: "#222" }}
                  ></i>
                </div>
                <div
                  className="fw-semibold"
                  style={{ fontSize: "1.35rem", letterSpacing: "0.01em" }}
                >
                  Education
                </div>
                <div
                  className="mt-2 "
                  style={{
                    letterSpacing: "0.01em",
                    color: "#666",
                  }}
                >
                  <p className="mb-2 ">
                    Master of Technology in Computer Science
                  </p>
                  Bachelor of Technology in Information Technology
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ...existing right column if any... */}
      </div>
    </div>
  );
};

export default Description;
