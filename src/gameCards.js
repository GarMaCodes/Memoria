const cardsQuantity = 20;

const createCardsSet = () => {
  const artArray = [
    { name: "arte1" },
    { name: "arte2" },
    { name: "arte3" },
    { name: "arte4" },
    { name: "arte5" },
    { name: "arte6" },
    { name: "arte7" },
    { name: "arte8" },
    { name: "arte9" },
    { name: "arte10" },
    { name: "arte11" },
    { name: "arte12" },
    { name: "arte13" },
    { name: "arte14" },
    { name: "arte15" },
    { name: "arte16" },
    { name: "arte17" },
    { name: "arte18" },
    { name: "arte19" },
    { name: "arte20" },
  ];

  let cardsArray = [];

  while (cardsArray.length < cardsQuantity) {
    const index = Math.floor(Math.random() * artArray.length);
    const gameCard = {
      img: artArray.splice(index, 1)[0],
      guessed: false,
      comparing: false,
    };

    cardsArray.push(gameCard);
    cardsArray.push({ ...gameCard }); //Clon de la gameCard (pareja)
  }

  const mixCardSet = (cardsArray) => {
    for (let i = cardsArray.length - 1; i > 0; i--) {
      let randomIndex = Math.floor(Math.random() * (i + 1));
      let temporal = cardsArray[i];
      cardsArray[i] = cardsArray[randomIndex];
      cardsArray[randomIndex] = temporal;
    }
    return cardsArray;
  };

  return mixCardSet(cardsArray);
};

export default createCardsSet;
