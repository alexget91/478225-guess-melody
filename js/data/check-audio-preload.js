import Application from '../application';

let audioPreloadCount = 0;

export default (gameMusicLength) => {
  audioPreloadCount++;

  if (gameMusicLength === audioPreloadCount) {
    Application.initialize();
  }
};
