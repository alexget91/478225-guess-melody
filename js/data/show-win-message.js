const showWinMessage = (place, playersCount, percent) =>
  `Вы заняли ${place}-е место из ${playersCount} игроков. Это лучше чем у ${percent}% игроков`;

export default showWinMessage;
