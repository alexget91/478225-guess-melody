import {QuestionType, gameSequence} from '../data/game-data';

export default (data) => {
  const audioLinks = new Set();

  Object.keys(data).forEach((el, i) => {
    switch (data[el][`type`]) {

      case QuestionType.ARTIST:
        audioLinks.add(data[el][`src`]);
        gameSequence.push({
          questionType: data[el][`type`],
          question: data[el][`question`],
          src: data[el][`src`],
          answers: data[el][`answers`]
        });
        break;

      case QuestionType.GENRE:
        let correctLength = 0;
        const answers = data[el][`answers`].map((answer) => {
          answer.isCorrect = answer.genre === data[el][`genre`];
          audioLinks.add(answer.src);
          if (answer.genre === data[el][`genre`]) {
            answer.isCorrect = true;
            correctLength++;
          }

          return answer;
        });

        gameSequence.push({
          questionType: data[el][`type`],
          question: data[el][`question`],
          genre: data[el][`genre`],
          correctLength,
          answers
        });
        break;

      default:
        window.console.error(`${i}: Unknown question type '${data[el][`type`]}'`);
    }
  });

  return audioLinks;
};
