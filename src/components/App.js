import React from "react";
import "../styles/app.css";
import NavBar from "./NavBar";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Surreal Estate</h1>
        <NavBar />
      </header>
    </div>
  );
};

export default App;
