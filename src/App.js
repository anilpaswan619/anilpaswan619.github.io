import React, { useRef } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import About from "./pages/about";
import Description from "./pages/description";
import "./App.scss";
import Project from "./pages/project";
import Skills from "./pages/skills";
import Contact from "./pages/contact";
import Footer from "./components/footer";

function App() {
  const descriptionRef = useRef(null);

  return (
    <div className="App">
      <Header />
      <About descriptionRef={descriptionRef} />
      <div ref={descriptionRef}>
        <Description />
      </div>
      <Project />
      <Skills />
      <Contact />
      <main>
        <Routes></Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
