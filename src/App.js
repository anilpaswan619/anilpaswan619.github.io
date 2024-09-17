import React, { useRef } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import About from "./pages/about";
import Description from "./pages/description";
import "./App.scss";
import Project from "./pages/project";
import Skills from "./pages/skills";

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
      <main>
        <Routes></Routes>
      </main>
    </div>
  );
}

export default App;
