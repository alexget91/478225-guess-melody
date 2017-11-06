import assert from 'assert';
import getComparison from './get-comparison';

let statistics;
let result;

describe(`Get comparison`, () => {
  beforeEach(() => {
    statistics = [
      {
        score: 7,
        notesLeft: 4,
        timeLeft: 20,
        id: 1
      },
      {
        score: 14,
        notesLeft: 3,
        timeLeft: 40,
        id: 2
      },
      {
        score: 4,
        notesLeft: 4,
        timeLeft: 20,
        id: 3
      },
      {
        score: 10,
        notesLeft: 4,
        timeLeft: 20,
        id: 4
      }
    ];
    result = {
      score: 10,
      notesLeft: 4,
      timeLeft: 20,
      id: 4
    };
  });

  it(`should return correct statistics when player wins (2nd place out of 4)`, () => {
    assert.deepEqual({place: 2, playersCount: 4, percent: 50}, getComparison(statistics, result));
  });

  it(`should return correct statistics when player wins (2nd place out of 3)`, () => {
    statistics.splice(2, 1);
    assert.deepEqual({place: 2, playersCount: 3, percent: 33}, getComparison(statistics, result));
  });

  it(`should return correct statistics when player wins (1st position in statistics)`, () => {
    statistics[3].score = 20;
    result.score = 20;
    assert.deepEqual({place: 1, playersCount: 4, percent: 75}, getComparison(statistics, result));
  });

  it(`should return correct statistics when player wins (last position in statistics)`, () => {
    statistics[3].score = 1;
    result.score = 1;
    assert.deepEqual({place: 4, playersCount: 4, percent: 0}, getComparison(statistics, result));
  });

  it(`should return correct statistics when player wins (statistics is empty)`, () => {
    statistics = [result];
    assert.deepEqual({place: 1, playersCount: 1, percent: 0}, getComparison(statistics, result));
  });
});
