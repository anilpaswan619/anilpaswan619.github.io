import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <Routes></Routes>
      </main>
    </div>
  );
}

export default App;
