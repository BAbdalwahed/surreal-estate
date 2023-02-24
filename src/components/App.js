import React from "react";
import { Routes, Route } from "react-router-dom";
import "../styles/app.css";
import NavBar from "./NavBar";
import Properties from "./Properties";
import AddProperty from "./AddProperty";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Surreal Estate</h1>
        <NavBar />
        <Routes>
          <Route path="/" element={Properties} />
          <Route path="./AddProperty.js" element={AddProperty} />
        </Routes>
      </header>
    </div>
  );
};

export default App;
