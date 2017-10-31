import assert from 'assert';
import getComparison from './get-comparison';
import gameData from './game-data';

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
    assert.equal(gameData.ExitCode.TIME_OVER, getComparison(statistics, result));
  });

  it(`should return correct message when lives is over`, () => {
    result.notesLeft = 0;
    assert.equal(gameData.ExitCode.NOTES_OVER, getComparison(statistics, result));
  });

  it(`should return correct message when player wins (2nd place out of 4)`, () => {
    assert.deepEqual({place: 2, playersCount: 4, percent: 50}, getComparison(statistics, result));
  });

  it(`should return correct message when player wins (2nd place out of 3)`, () => {
    statistics.splice(2, 1);
    assert.deepEqual({place: 2, playersCount: 3, percent: 33}, getComparison(statistics, result));
  });

  it(`should return correct message when player wins (1st position in statistics)`, () => {
    result.score = 20;
    assert.deepEqual({place: 1, playersCount: 4, percent: 75}, getComparison(statistics, result));
  });

  it(`should return correct message when player wins (last position in statistics)`, () => {
    result.score = 1;
    assert.deepEqual({place: 4, playersCount: 4, percent: 0}, getComparison(statistics, result));
  });

  it(`should return correct message when player wins (statistics is empty)`, () => {
    statistics = [];
    assert.deepEqual({place: 1, playersCount: 1, percent: 0}, getComparison(statistics, result));
  });
});
