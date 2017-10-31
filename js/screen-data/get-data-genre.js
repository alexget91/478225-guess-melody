import musicLibrary from '../data/music-library';

export default (question) => {
  const questionData = {
    title: `Выберите ${question.genre.toLowerCase()} треки`,
    correctLength: question.correctAnswer.size,
    answers: []
  };

  question.answers.forEach((el) => {
    questionData.answers.push({
      id: el,
      src: musicLibrary[el].src,
      right: question.correctAnswer.has(el)
    });
  });

  return questionData;
};
