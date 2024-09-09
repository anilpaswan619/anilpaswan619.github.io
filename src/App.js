import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import About from "./pages/about";
import Description from "./pages/description";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Description />
      <main>
        <Routes></Routes>
      </main>
    </div>
  );
}

export default App;
