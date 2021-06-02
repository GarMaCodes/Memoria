import React, { useState, useEffect } from "react";
import createCardsSet from "../gameCards";
import DarkScreen from "./DarkScreen";
import ModalWindow from "./ModalWindow";
import Card from "./Card";
import ScoreWindow from "./ScoreWindow";
import "../css/JuegoA.css";

const JuegoA = () => {
  const [card_set, setCartas] = useState(createCardsSet);
  const [game] = useState(true);
  const [darkScreenVisibility, setDarkScreenVisibility] = useState("hidden");
  const [modalWindowVisibility, setModalWindowVisibility] = useState("hidden");
  const [modalWindowTranslate, setModalWindowTranslate] = useState("-800");
  const [date1, setDate1] = useState(null);
  const [hits, setHits] = useState(0);
  const [failures, setFailures] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [finalState, setFinalState] = useState(false);

  const [x, setCardSet] = useState({
    card_set,
    pair: [],
  });

  console.log(card_set);

  useEffect(() => {
    if (attempts === 0 && hits === 0 && failures === 0) {
      setTimeout(() => {
        setDarkScreenVisibility("visible");
        setModalWindowVisibility("visible");
        setModalWindowTranslate("0");
      }, 1000);
    }
  }, [attempts, hits, failures]);

  const selectingCards = (card) => {
    card.comparing = true;
    if (x.pair.indexOf(card) > -1 || card.guessed) return;
    setCardSet({ pair: [...x.pair, card] });
  };

  const gameOver = () => {
    let date2 = new Date();
    let totalSeconds = (date2.valueOf() - date1.valueOf()) / 1000;
    let totalMinutes = 0;
    while (totalSeconds >= 60) {
      totalSeconds = totalSeconds - 60;
      totalMinutes += 60;
    }
    setMinutes(totalMinutes / 60);
    setSeconds(totalSeconds.toFixed(0));
    setDarkScreenVisibility("visible");
    setModalWindowVisibility("visible");
    setModalWindowTranslate("0");
    setFinalState(true);
  };

  return (
    <div className="totalScreen">
      <DarkScreen darkScreenVisibility={darkScreenVisibility} />
      <ModalWindow
        modalWindowVisibility={modalWindowVisibility}
        setModalWindowVisibility={setModalWindowVisibility}
        modalWindowTranslate={modalWindowTranslate}
        setModalWindowTranslate={setModalWindowTranslate}
        paragraph={!finalState ? "Bienvenid@!" : "Felicidades!"}
        paragraph2={
          !finalState ? "Para empezar a jugar presiona Iniciar" : null
        }
        buttonText={!finalState ? "Iniciar" : "Volver a jugar"}
        game={game}
        setDarkScreenVisibility={setDarkScreenVisibility}
        attempts={attempts}
        minutes={minutes}
        seconds={seconds}
        finalState={finalState}
        setFinalState={setFinalState}
        setDate1={setDate1}
        setCardSet={setCardSet}
        setCartas={setCartas}
        setAttempts={setAttempts}
        setHits={setHits}
        setFailures={setFailures}
      />
      <div className="generalContainer">
        <div className="row">
          {card_set.map((card, index) => {
            return (
              <Card
                key={index}
                card={card}
                game={game}
                selectingCards={selectingCards}
                x={x}
                hits={hits}
                attempts={attempts}
                failures={failures}
                setCardSet={setCardSet}
                setHits={setHits}
                setAttempts={setAttempts}
                setFailures={setFailures}
                gameOver={gameOver}
              />
            );
          })}
        </div>

        <ScoreWindow
          hits={hits}
          attempts={attempts}
          failures={failures}
          setCartas={setCartas}
          createCardsSet={createCardsSet}
          setAttempts={setAttempts}
          setHits={setHits}
          setFailures={setFailures}
          setCardSet={setCardSet}
        />

        <div className="owner">&copy;2021 GarMaCodes</div>
      </div>
    </div>
  );
};

export default JuegoA;
