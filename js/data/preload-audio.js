import {gameMusic} from './game-data';
import Application from '../application';

const preloadAudio = (links) => {
  const linksSize = links.size;
  const linksValues = links.values();
  let audioPreloadCount = 0;
  const loadAudioLinks = [];

  const loadAudioLink = () => {
    const linkNext = linksValues.next();

    if (!linkNext.done) {
      const loadPromise = new Promise((resolve) => {
        const audio = new Audio();
        audio.addEventListener(`canplaythrough`, () => resolve(audio));
        audio.src = linkNext.value;
        audio.load();
      });

      loadPromise.then((audio) => {
        audioPreloadCount++;
        console.log(`Загружено ${audioPreloadCount} из ${linksSize}`);
        gameMusic[linkNext.value] = audio;
      });

      loadAudioLinks.push(loadPromise);

      loadAudioLink();
    }
  };

  loadAudioLink();

  Promise.all(loadAudioLinks)
      .then(() => {
        Application.showWelcome();
      })
      .catch((error) => {
        throw new Error(error);
      });
};

export default preloadAudio;

/* export default (links) => {
  links.forEach((el) => {
    const audio = new Audio(el);
    gameMusic[el] = audio;
  });
}; */
