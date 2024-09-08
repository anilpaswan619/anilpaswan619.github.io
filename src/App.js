import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Anil Paswan</h1>
        <p>Web Developer & Designer</p>
        <nav>
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="container mt-5">
        <section id="about" className="mb-5">
          <h2>About Me</h2>
          <p>
            Hello! I'm Anil Paswan, a passionate web developer and designer with
            experience in creating dynamic and responsive websites.
          </p>
        </section>
        <section id="projects" className="mb-5">
          <h2>Projects</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <img src={logo} className="card-img-top" alt="Project 1" />
                <div className="card-body">
                  <h5 className="card-title">Project 1</h5>
                  <p className="card-text">Description of project 1.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src={logo} className="card-img-top" alt="Project 2" />
                <div className="card-body">
                  <h5 className="card-title">Project 2</h5>
                  <p className="card-text">Description of project 2.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src={logo} className="card-img-top" alt="Project 3" />
                <div className="card-body">
                  <h5 className="card-title">Project 3</h5>
                  <p className="card-text">Description of project 3.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="skills" className="mb-5">
          <h2>Skills</h2>
          <ul className="list-group">
            <li className="list-group-item">HTML</li>
            <li className="list-group-item">CSS</li>
            <li className="list-group-item">JavaScript</li>
            <li className="list-group-item">React</li>
            <li className="list-group-item">Bootstrap</li>
          </ul>
        </section>
        <section id="contact" className="mb-5">
          <h2>Contact</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input type="text" className="form-control" id="name" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                rows="3"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </section>
      </main>
      <footer className="App-footer">
        <p>
          &copy; {new Date().getFullYear()} Anil Paswan. All rights reserved.
        </p>
        <div className="social-links">
          <a
            href="https://github.com/anilpaswan619"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-github"></i>
          </a>
          <a
            href="https://linkedin.com/in/anilpaswan619"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-linkedin"></i>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
