import React from "react";
import "../css/ScoreWindow.css";

const ScoreWindow = ({
  createCardsSet,
  hits,
  attempts,
  failures,
  setCartas,
  setAttempts,
  setHits,
  setFailures,
  setCardSet,
}) => {
  const handleClick = () => {
    if (attempts > 0) {
      setCartas(createCardsSet);
      setCardSet({ pair: [] });
      setAttempts(0);
      setHits(0);
      setFailures(0);
    }
  };

  return (
    <div className="scoreWindow">
      <div className="score">
        <p>INTENTOS: </p>
        <div className="attempts number">{attempts}</div>
      </div>
      <div className="failuresBox score">
        <p>INTENTOS FALLIDOS: </p>
        <div className="failures number">{failures}</div>
      </div>
      <div className="score">
        <p>ACIERTOS: </p>
        <div className="hits number">{hits}</div>
      </div>

      <button className="reset" onClick={handleClick}>
        Reiniciar
      </button>
    </div>
  );
};

export default ScoreWindow;
