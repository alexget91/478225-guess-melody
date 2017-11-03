import {gameMusic} from './game-data';
import checkAudioPreload from './check-audio-preload';

export default (links) => {
  links.forEach((el) => {
    const audio = new Audio(el);

    audio.preload = `auto`;
    audio.addEventListener(`canplaythrough`, () => {
      checkAudioPreload(links.size);
    });
    audio.load();
    gameMusic[el] = audio;
  });
};
