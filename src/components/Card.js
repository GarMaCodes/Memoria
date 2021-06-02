import React, { useState, useEffect } from "react";
import "../css/Card.css";
import card_back_purple from "../images/reverso_A.jpg";
import card_back_blue from "../images/reverso_B.jpg";
import getCardImage from "../getCardImage";

const Card = ({
  card,
  game,
  selectingCards,
  x,
  setCardSet,
  hits,
  setHits,
  attempts,
  setAttempts,
  failures,
  setFailures,
  gameOver,
}) => {
  const [card_background, setCardBackground] = useState(
    game ? card_back_purple : card_back_blue
  );
  const [card_rotation, setCardRotation] = useState("0deg");
  const [card_border_radius] = useState(game ? "5px" : "50%");
  const [allowClick, setAllowClick] = useState(true);

  useEffect(() => {
    if (attempts === 0 && hits === 0 && failures === 0) {
      setCardRotation("0deg");
      setCardBackground(game ? card_back_purple : card_back_blue);
    }
  }, [attempts, hits, failures, game]);

  useEffect(() => {
    if (x.pair.length === 2) {
      const [firstCard, secondCard] = x.pair;
      setAllowClick(false);
      setCardSet({ pair: [] });
      if (firstCard.img.name !== secondCard.img.name) {
        console.log("diferentes");
        diferentCards();
      } else {
        console.log("iguales");
        sameCards(x.pair);
      }
    }
  });

  const handleClick = () => {
    if (x.pair.length < 2 && !card.guessed && !card.comparing && allowClick) {
      selectingCards(card);
      setCardRotation("180deg");
      setCardBackground(getCardImage(card.img.name, game));
    }
  };

  const diferentCards = () => {
    setAttempts(attempts + 1);
    setFailures(failures + 1);
    setTimeout(() => {
      if (!card.guessed) {
        setCardRotation("0deg");
        setCardBackground(game ? card_back_purple : card_back_blue);
        setAllowClick(true);
        card.comparing = false;
      }
    }, 2000);
  };

  const sameCards = (pair) => {
    const [firstCard, secondCard] = pair;
    firstCard.guessed = true;
    secondCard.guessed = true;
    setAttempts(attempts + 1);
    setHits(hits + 1);
    setAllowClick(true);
    console.log(firstCard);
    if (hits === 9) {
      gameOver();
    }
  };

  return (
    <div
      className="card"
      style={{
        backgroundImage: `url(${card_background})`,
        transform: `rotateY(${card_rotation})`,
        borderRadius: `${card_border_radius}`,
      }}
      onClick={handleClick}
    ></div>
  );
};

export default Card;
