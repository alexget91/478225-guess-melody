import assert from 'assert';
import getScore from './get-score';

describe(`Get player score`, () => {
  let answers;

  it(`should return correct score on no-fast answers without mistakes`, () => {
    answers = [{isRight: true, time: 30}, {isRight: true, time: 30}, {isRight: true, time: 30}, {isRight: true, time: 30}, {isRight: true, time: 30}, {isRight: true, time: 30}, {isRight: true, time: 30}, {isRight: true, time: 30}, {isRight: true, time: 30}, {isRight: true, time: 30}];
    assert.deepEqual({score: 10, fastCount: 0}, getScore(answers, 4));
  });

  it(`should return correct score when some answers are fast (no mistakes)`, () => {
    answers = [{isRight: true, time: 20}, {isRight: true, time: 30}, {isRight: true, time: 30}, {isRight: true, time: 30}, {isRight: true, time: 30}, {isRight: true, time: 30}, {isRight: true, time: 30}, {isRight: true, time: 30}, {isRight: true, time: 30}, {isRight: true, time: 30}];
    assert.deepEqual({score: 11, fastCount: 1}, getScore(answers, 4));

    answers = [{isRight: true, time: 20}, {isRight: true, time: 1}, {isRight: true, time: 30}, {isRight: true, time: 4}, {isRight: true, time: 30}, {isRight: true, time: 3}, {isRight: true, time: 10}, {isRight: true, time: 5}, {isRight: true, time: 7}, {isRight: true, time: 13}];
    assert.deepEqual({score: 18, fastCount: 8}, getScore(answers, 4));
  });

  it(`should return correct score when there are some mistakes`, () => {
    answers = [{isRight: false, time: 30}, {isRight: true, time: 30}, {isRight: true, time: 30}, {isRight: false, time: 30}, {isRight: true, time: 30}, {isRight: true, time: 30}, {isRight: true, time: 30}, {isRight: true, time: 30}, {isRight: true, time: 30}, {isRight: true, time: 30}];
    assert.deepEqual({score: 4, fastCount: 0}, getScore(answers, 2));

    answers = [{isRight: false, time: 30}, {isRight: true, time: 30}, {isRight: true, time: 30}, {isRight: true, time: 30}, {isRight: true, time: 30}, {isRight: false, time: 30}, {isRight: true, time: 30}, {isRight: true, time: 30}, {isRight: true, time: 30}, {isRight: false, time: 30}];
    assert.deepEqual({score: 1, fastCount: 0}, getScore(answers, 1));

    answers = [{isRight: true, time: 20}, {isRight: true, time: 1}, {isRight: true, time: 30}, {isRight: false, time: 4}, {isRight: true, time: 30}, {isRight: true, time: 3}, {isRight: true, time: 10}, {isRight: true, time: 5}, {isRight: true, time: 7}, {isRight: true, time: 13}];
    assert.deepEqual({score: 14, fastCount: 7}, getScore(answers, 3));

    answers = [{isRight: true, time: 20}, {isRight: true, time: 1}, {isRight: false, time: 30}, {isRight: false, time: 4}, {isRight: true, time: 30}, {isRight: true, time: 3}, {isRight: true, time: 10}, {isRight: true, time: 5}, {isRight: true, time: 7}, {isRight: true, time: 13}];
    assert.deepEqual({score: 11, fastCount: 7}, getScore(answers, 2));
  });
});
