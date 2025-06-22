import React, { useState, useEffect } from "react";

const Description = () => {
  const [animate, setAnimate] = useState(false);

  const achievements = [
    { number: "7+", label: "Years Experience", icon: "bi bi-calendar-check" },
    { number: "25+", label: "Projects Completed", icon: "bi bi-trophy" },
    { number: "10+", label: "Technologies", icon: "bi bi-gear" },
    { number: "100%", label: "Client Satisfaction", icon: "bi bi-star-fill" },
  ];

  useEffect(() => {
    setTimeout(() => setAnimate(true), 200);
  }, []);

  return (
    <div
      id="description"
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
      {/* Animated background elements - matching About component */}
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
        {/* Header Section - Enhanced with About component styling */}
        <div
          className="text-center mb-5"
          style={{
            transform: animate ? "translateY(0)" : "translateY(30px)",
            opacity: animate ? 1 : 0,
            transition: "all 1s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          {/* Section Badge */}
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
              💼 About Me
            </span>
          </div>

          {/* Main Title */}
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
            Professional Journey
          </h2>

          <p
            style={{
              color: "#94A3B8",
              fontSize: "1.2rem",
              margin: "0 auto",
              lineHeight: "1.6",
            }}
          >
            Crafting exceptional digital experiences with passion and precision
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="row g-4">
          {/* Left Column - About Content */}
          <div className="col-lg-8">
            <div
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(20px)",
                borderRadius: "24px",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                padding: "2.5rem",
                height: "100%",
                position: "relative",
                overflow: "hidden",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                transform: animate ? "translateX(0)" : "translateX(-30px)",
                opacity: animate ? 1 : 0,
                transitionDelay: "0.3s",
              }}
            >
              {/* Gradient Border */}
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

              {/* Profile Image and Header */}
              <div className="d-flex align-items-center mb-4">
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "20px",
                    background: "linear-gradient(135deg, #6366F1, #EC4899)",
                    padding: "3px",
                    marginRight: "1.5rem",
                    position: "relative",
                  }}
                >
                  <img
                    src="/assets/photo.jpg"
                    alt="Profile"
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "17px",
                      objectFit: "cover",
                    }}
                  />
                  {/* Online indicator */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: "2px",
                      right: "2px",
                      width: "20px",
                      height: "20px",
                      background: "linear-gradient(135deg, #10B981, #059669)",
                      borderRadius: "50%",
                      border: "3px solid #0f0f23",
                      animation: "pulse 2s infinite",
                    }}
                  />
                </div>
                <div>
                  <h4
                    style={{
                      color: "#F1F5F9",
                      fontSize: "1.8rem",
                      fontWeight: "700",
                      margin: "0 0 0.5rem 0",
                    }}
                  >
                    Anil Paswan
                  </h4>
                  <p
                    style={{
                      color: "#60A5FA",
                      fontSize: "1.1rem",
                      fontWeight: "600",
                      margin: 0,
                    }}
                  >
                    Frontend & UI Developer
                  </p>
                </div>
              </div>

              {/* About Text */}
              <p
                style={{
                  color: "#CBD5E1",
                  fontSize: "1.1rem",
                  lineHeight: "1.8",
                  marginBottom: "2.5rem",
                  textAlign: "justify",
                }}
              >
                As a passionate Frontend & UI Developer with over 7+ years of
                experience, I specialize in building dynamic and responsive web
                applications that deliver exceptional user experiences. My
                expertise spans across modern JavaScript frameworks, with a keen
                eye for design and performance optimization.
              </p>

              {/* Key Highlights */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                  gap: "1.5rem",
                  marginTop: "1.5rem",
                }}
              >
                {/* First Row */}
                <div
                  style={{
                    padding: "1rem",
                    background: "rgba(99, 102, 241, 0.1)",
                    borderRadius: "12px",
                    border: "1px solid rgba(99, 102, 241, 0.2)",
                    textAlign: "center",
                  }}
                >
                  <i
                    className="bi bi-code-square"
                    style={{
                      fontSize: "1.5rem",
                      color: "#6366F1",
                      marginBottom: "0.5rem",
                      display: "block",
                    }}
                  />
                  <h6
                    style={{
                      color: "#F1F5F9",
                      fontSize: "0.9rem",
                      fontWeight: "600",
                      margin: "0 0 0.25rem 0",
                    }}
                  >
                    Modern Frameworks
                  </h6>
                  <p
                    style={{ color: "#94A3B8", fontSize: "0.8rem", margin: 0 }}
                  >
                    React, Next.Js, Angular
                  </p>
                </div>
                <div
                  style={{
                    padding: "1rem",
                    background: "rgba(168, 85, 247, 0.1)",
                    borderRadius: "12px",
                    border: "1px solid rgba(168, 85, 247, 0.2)",
                    textAlign: "center",
                  }}
                >
                  <i
                    className="bi bi-layers"
                    style={{
                      fontSize: "1.5rem",
                      color: "#A855F7",
                      marginBottom: "0.5rem",
                      display: "block",
                    }}
                  />
                  <h6
                    style={{
                      color: "#F1F5F9",
                      fontSize: "0.9rem",
                      fontWeight: "600",
                      margin: "0 0 0.25rem 0",
                    }}
                  >
                    API Integration
                  </h6>
                  <p
                    style={{ color: "#94A3B8", fontSize: "0.8rem", margin: 0 }}
                  >
                    RESTful & GraphQL
                  </p>
                </div>
                <div
                  style={{
                    padding: "1rem",
                    background: "rgba(139, 92, 246, 0.1)",
                    borderRadius: "12px",
                    border: "1px solid rgba(139, 92, 246, 0.2)",
                    textAlign: "center",
                  }}
                >
                  <i
                    className="bi bi-phone"
                    style={{
                      fontSize: "1.5rem",
                      color: "#8B5CF6",
                      marginBottom: "0.5rem",
                      display: "block",
                    }}
                  />
                  <h6
                    style={{
                      color: "#F1F5F9",
                      fontSize: "0.9rem",
                      fontWeight: "600",
                      margin: "0 0 0.25rem 0",
                    }}
                  >
                    Responsive Design
                  </h6>
                  <p
                    style={{ color: "#94A3B8", fontSize: "0.8rem", margin: 0 }}
                  >
                    Mobile-First Approach
                  </p>
                </div>

                {/* Second Row */}
                <div
                  style={{
                    padding: "1rem",
                    background: "rgba(236, 72, 153, 0.1)",
                    borderRadius: "12px",
                    border: "1px solid rgba(236, 72, 153, 0.2)",
                    textAlign: "center",
                  }}
                >
                  <i
                    className="bi bi-palette"
                    style={{
                      fontSize: "1.5rem",
                      color: "#EC4899",
                      marginBottom: "0.5rem",
                      display: "block",
                    }}
                  />
                  <h6
                    style={{
                      color: "#F1F5F9",
                      fontSize: "0.9rem",
                      fontWeight: "600",
                      margin: "0 0 0.25rem 0",
                    }}
                  >
                    UI/UX Design
                  </h6>
                  <p
                    style={{ color: "#94A3B8", fontSize: "0.8rem", margin: 0 }}
                  >
                    Figma, Adobe XD
                  </p>
                </div>

                <div
                  style={{
                    padding: "1rem",
                    background: "rgba(59, 130, 246, 0.1)",
                    borderRadius: "12px",
                    border: "1px solid rgba(59, 130, 246, 0.2)",
                    textAlign: "center",
                  }}
                >
                  <i
                    className="bi bi-git"
                    style={{
                      fontSize: "1.5rem",
                      color: "#3B82F6",
                      marginBottom: "0.5rem",
                      display: "block",
                    }}
                  />
                  <h6
                    style={{
                      color: "#F1F5F9",
                      fontSize: "0.9rem",
                      fontWeight: "600",
                      margin: "0 0 0.25rem 0",
                    }}
                  >
                    Version Control
                  </h6>
                  <p
                    style={{ color: "#94A3B8", fontSize: "0.8rem", margin: 0 }}
                  >
                    Git, GitHub, GitLab
                  </p>
                </div>
                <div
                  style={{
                    padding: "1rem",
                    background: "rgba(245, 158, 11, 0.1)",
                    borderRadius: "12px",
                    border: "1px solid rgba(245, 158, 11, 0.2)",
                    textAlign: "center",
                  }}
                >
                  <i
                    className="bi bi-lightning"
                    style={{
                      fontSize: "1.5rem",
                      color: "#F59E0B",
                      marginBottom: "0.5rem",
                      display: "block",
                    }}
                  />
                  <h6
                    style={{
                      color: "#F1F5F9",
                      fontSize: "0.9rem",
                      fontWeight: "600",
                      margin: "0 0 0.25rem 0",
                    }}
                  >
                    Performance
                  </h6>
                  <p
                    style={{ color: "#94A3B8", fontSize: "0.8rem", margin: 0 }}
                  >
                    Optimization Expert
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="col-lg-4">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
                height: "100%",
              }}
            >
              {/* Quick Stats */}
              <div
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(20px)",
                  borderRadius: "20px",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  padding: "2rem",
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  transform: animate ? "translateX(0)" : "translateX(30px)",
                  opacity: animate ? 1 : 0,
                  transitionDelay: "0.5s",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "3px",
                    background:
                      "linear-gradient(90deg, rgb(236, 72, 153) 0%, rgb(245, 158, 11) 100%)",
                    borderRadius: "20px 20px 0 0",
                  }}
                />

                <h5
                  style={{
                    color: "#F1F5F9",
                    fontSize: "1.3rem",
                    fontWeight: "700",
                    marginBottom: "1.5rem",
                    textAlign: "center",
                  }}
                >
                  Quick Stats
                </h5>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "1rem",
                  }}
                >
                  {achievements.map((achievement, index) => (
                    <div
                      key={achievement.label}
                      style={{
                        textAlign: "center",
                        padding: "1rem 0.5rem",
                        background: "rgba(255, 255, 255, 0.03)",
                        borderRadius: "12px",
                        border: "1px solid rgba(255, 255, 255, 0.05)",
                        transition: "all 0.3s ease",
                      }}
                    >
                      <i
                        className={achievement.icon}
                        style={{
                          fontSize: "1.5rem",
                          color: "#6366F1",
                          marginBottom: "0.5rem",
                          display: "block",
                        }}
                      />
                      <div
                        style={{
                          fontSize: "1.5rem",
                          fontWeight: "800",
                          color: "#F1F5F9",
                          marginBottom: "0.25rem",
                        }}
                      >
                        {achievement.number}
                      </div>
                      <div
                        style={{
                          fontSize: "0.8rem",
                          color: "#94A3B8",
                          fontWeight: "500",
                        }}
                      >
                        {achievement.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education Card */}
              <div
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(20px)",
                  borderRadius: "20px",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  padding: "2rem",
                  textAlign: "center",
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  transform: animate ? "translateX(0)" : "translateX(30px)",
                  opacity: animate ? 1 : 0,
                  transitionDelay: "0.7s",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "3px",
                    background:
                      "linear-gradient(90deg, #EC4899 0%, #F59E0B 100%)",
                    borderRadius: "20px 20px 0 0",
                  }}
                />

                <div
                  style={{
                    width: "70px",
                    height: "70px",
                    borderRadius: "16px",
                    background: "linear-gradient(135deg, #EC4899, #F59E0B)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 1.5rem",
                    boxShadow: "0 12px 24px rgba(236, 72, 153, 0.3)",
                  }}
                >
                  <i
                    className="bi bi-mortarboard"
                    style={{ fontSize: "2rem", color: "white" }}
                  />
                </div>

                <h5
                  style={{
                    color: "#F1F5F9",
                    fontSize: "1.3rem",
                    fontWeight: "700",
                    marginBottom: "0.5rem",
                  }}
                >
                  Education
                </h5>
                <p
                  style={{
                    color: "#94A3B8",
                    fontSize: "0.95rem",
                    margin: 0,
                    lineHeight: "1.5",
                  }}
                >
                  Bachelor of Technology in Information Technology
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
