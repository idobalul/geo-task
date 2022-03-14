import React from "react";
import map from "./assets/map.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="left">
        <img src={map} className="map" alt="World Map" />
        <div className="geo-info">geo info</div>
      </div>
      <div className="aurora-info">aurora info</div>
    </div>
  );
}

export default App;
