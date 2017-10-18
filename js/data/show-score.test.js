import assert from 'assert';
import showScore from './show-score.js';
import {messages} from './constants.js';
import showWinMessage from './show-win-message.js';

let statistics;
let result;

describe(`Show player score`, () => {
  beforeEach(() => {
    statistics = [
      {
        score: 7,
        notesLeft: 4,
        timeLeft: 20
      },
      {
        score: 14,
        notesLeft: 3,
        timeLeft: 40
      },
      {
        score: 4,
        notesLeft: 4,
        timeLeft: 20
      }
    ];
    result = {
      score: 10,
      notesLeft: 4,
      timeLeft: 20
    };
  });

  it(`should return correct message when time is over`, () => {
    result.timeLeft = 0;
    assert.equal(messages.TIME_OVER, showScore(statistics, result));
  });

  it(`should return correct message when lives is over`, () => {
    result.notesLeft = 0;
    assert.equal(messages.NOTES_OVER, showScore(statistics, result));
  });

  it(`should return correct message when player wins (2nd place out of 4)`, () => {
    assert.equal(showWinMessage(2, 4, 50), showScore(statistics, result));
  });

  it(`should return correct message when player wins (2nd place out of 3)`, () => {
    statistics.splice(2, 1);
    assert.equal(showWinMessage(2, 3, 33), showScore(statistics, result));
  });

  it(`should return correct message when player wins (1st position in statistics)`, () => {
    result.score = 20;
    assert.equal(showWinMessage(1, 4, 75), showScore(statistics, result));
  });

  it(`should return correct message when player wins (last position in statistics)`, () => {
    result.score = 1;
    assert.equal(showWinMessage(4, 4, 0), showScore(statistics, result));
  });

  it(`should return correct message when player wins (statistics is empty)`, () => {
    statistics = [];
    assert.equal(showWinMessage(1, 1, 0), showScore(statistics, result));
  });
});
