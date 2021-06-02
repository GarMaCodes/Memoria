import React from "react";
import { Link } from "react-router-dom";
import "../css/StartingScreen.css";

const StartingScreen = () => {
  return (
    <div className="background">
      <div className="logo">
        <div className="title">Juego de</div>
        <h1>Memoria</h1>
      </div>
      <div className="select">
        <div className="juegoA juego">
          <Link to="/juego-A">Juego A</Link>
        </div>
        <div className="juegoB juego">
          <Link to="/juego-B">Juego B</Link>
        </div>
      </div>

      <div className="owner">&copy;2021 GarMaCodes</div>
    </div>
  );
};

export default StartingScreen;
