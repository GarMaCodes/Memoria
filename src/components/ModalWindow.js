import React from "react";
import { Link } from "react-router-dom";
import "../css/ModalWindow.css";
import createCardsSet from "../gameCards";

const ModalWindow = ({
  game,
  modalWindowVisibility,
  setModalWindowVisibility,
  modalWindowTranslate,
  setModalWindowTranslate,
  paragraph,
  paragraph2,
  buttonText,
  setDarkScreenVisibility,
  attempts,
  minutes,
  seconds,
  finalState,
  setFinalState,
  setDate1,
  setCartas,
  setAttempts,
  setFailures,
  setHits,
}) => {
  const handleClick = () => {
    if (!finalState) {
      setModalWindowTranslate("-800");
      setModalWindowVisibility("hidden");
      setDarkScreenVisibility("hidden");
      setDate1(new Date());
    } else {
      setModalWindowTranslate("-800");
      setModalWindowVisibility("hidden");
      setDarkScreenVisibility("hidden");
      setFinalState(false);
      setCartas(createCardsSet);
      setAttempts(0);
      setHits(0);
      setFailures(0);
    }
  };

  return (
    <div
      className="modalWindow"
      style={{
        visibility: `${modalWindowVisibility}`,
        transform: `translateY(${modalWindowTranslate}px)`,
      }}
    >
      <div className="paragraph">
        <p>
          {paragraph}
          <br />

          {!finalState
            ? paragraph2
            : `Intentos: ${attempts},        
               Tiempo total: ${minutes}min ${seconds}sec.
               Gracias por jugar`}

          <br />
        </p>
      </div>
      <div className="button" onClick={handleClick}>
        {buttonText}
      </div>
      <div className="links">
        {game ? (
          <Link to={"/juego-B"} className="link">
            Ir al juego B
          </Link>
        ) : (
          <Link to={"/juego-A"} className="link">
            Ir al juego A
          </Link>
        )}

        <br />
        <br />
        <Link to={"/"} className="link">
          Ir a la pantalla de inicio
        </Link>
      </div>
    </div>
  );
};

export default ModalWindow;
