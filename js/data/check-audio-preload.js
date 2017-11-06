import Application from '../application';

let audioPreloadCount = 0;

export default (gameMusicLength) => {
  audioPreloadCount++;

  console.log(`Загружено ${audioPreloadCount} из ${gameMusicLength}`);
  if (gameMusicLength === audioPreloadCount) {
    Application.showWelcome();
  }
};
