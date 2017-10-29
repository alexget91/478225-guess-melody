import musicLibrary from '../data/music-library.js';

export default (question) => {
  const questionData = {
    title: `Кто исполняет эту песню?`,
    melody: {
      id: question.melodyID,
      src: musicLibrary[question.melodyID].src
    },
    answers: []
  };

  question.answers.forEach((el) => {
    questionData.answers.push({
      id: el,
      name: musicLibrary[el].artist,
      image: musicLibrary[el].image,
      right: question.melodyID === el
    });
  });

  return questionData;
};
