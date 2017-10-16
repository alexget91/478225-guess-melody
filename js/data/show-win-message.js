const showWinMessage = (...values) => {
  let ending = `е`;

  if (values[0] !== 3) {
    const placeStr = values[0].toString();
    ending = placeStr[placeStr.length - 1] === `3` ? `е` : `ое`;
  }

  return `Вы заняли ${values[0]}-${ending} место из ${values[1]} игроков. Это лучше чем у ${values[2]}% игроков`;
};

export default showWinMessage;
