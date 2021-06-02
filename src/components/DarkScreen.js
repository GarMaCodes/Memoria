import React from "react";
import "../css/DarkScreen.css";

const DarkScreen = ({ darkScreenVisibility }) => (
  <div
    className="screen"
    style={{ visibility: `${darkScreenVisibility}` }}
  ></div>
);

export default DarkScreen;
