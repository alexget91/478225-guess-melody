import assert from 'assert';
import getScore from './get-score.js';

describe(`Get player score`, () => {
  let answers;

  it(`should return -1 when the answers count is not 10`, () => {
    answers = [{isCorrect: true, time: 30}, {isCorrect: true, time: 30}, {isCorrect: true, time: 30}];
    assert.equal(-1, getScore(answers, 4));

    answers = [{isCorrect: false, time: 30}, {isCorrect: false, time: 30}, {isCorrect: false, time: 30}];
    assert.equal(-1, getScore(answers, 1));

    answers = [{isCorrect: true, time: 30}, {isCorrect: true, time: 30}, {isCorrect: true, time: 30}, {isCorrect: true, time: 30}, {isCorrect: true, time: 30}, {isCorrect: true, time: 30}, {isCorrect: true, time: 30}, {isCorrect: true, time: 30}, {isCorrect: true, time: 30}, {isCorrect: true, time: 30}, {isCorrect: true, time: 30}];
    assert.equal(-1, getScore(answers, 4));
  });

  it(`should return correct score on no-fast answers without mistakes`, () => {
    answers = [{isCorrect: true, time: 30}, {isCorrect: true, time: 30}, {isCorrect: true, time: 30}, {isCorrect: true, time: 30}, {isCorrect: true, time: 30}, {isCorrect: true, time: 30}, {isCorrect: true, time: 30}, {isCorrect: true, time: 30}, {isCorrect: true, time: 30}, {isCorrect: true, time: 30}];
    assert.equal(10, getScore(answers, 4));
  });

  it(`should return correct score when some answers are fast (no mistakes)`, () => {
    answers = [{isCorrect: true, time: 20}, {isCorrect: true, time: 30}, {isCorrect: true, time: 30}, {isCorrect: true, time: 30}, {isCorrect: true, time: 30}, {isCorrect: true, time: 30}, {isCorrect: true, time: 30}, {isCorrect: true, time: 30}, {isCorrect: true, time: 30}, {isCorrect: true, time: 30}];
    assert.equal(11, getScore(answers, 4));

    answers = [{isCorrect: true, time: 20}, {isCorrect: true, time: 1}, {isCorrect: true, time: 30}, {isCorrect: true, time: 4}, {isCorrect: true, time: 30}, {isCorrect: true, time: 3}, {isCorrect: true, time: 10}, {isCorrect: true, time: 5}, {isCorrect: true, time: 7}, {isCorrect: true, time: 13}];
    assert.equal(18, getScore(answers, 4));
  });

  it(`should return correct score when there are some mistakes`, () => {
    answers = [{isCorrect: false, time: 30}, {isCorrect: true, time: 30}, {isCorrect: true, time: 30}, {isCorrect: false, time: 30}, {isCorrect: true, time: 30}, {isCorrect: true, time: 30}, {isCorrect: true, time: 30}, {isCorrect: true, time: 30}, {isCorrect: true, time: 30}, {isCorrect: true, time: 30}];
    assert.equal(4, getScore(answers, 2));

    answers = [{isCorrect: false, time: 30}, {isCorrect: true, time: 30}, {isCorrect: true, time: 30}, {isCorrect: true, time: 30}, {isCorrect: true, time: 30}, {isCorrect: false, time: 30}, {isCorrect: true, time: 30}, {isCorrect: true, time: 30}, {isCorrect: true, time: 30}, {isCorrect: false, time: 30}];
    assert.equal(1, getScore(answers, 1));

    answers = [{isCorrect: true, time: 20}, {isCorrect: true, time: 1}, {isCorrect: true, time: 30}, {isCorrect: false, time: 4}, {isCorrect: true, time: 30}, {isCorrect: true, time: 3}, {isCorrect: true, time: 10}, {isCorrect: true, time: 5}, {isCorrect: true, time: 7}, {isCorrect: true, time: 13}];
    assert.equal(14, getScore(answers, 3));

    answers = [{isCorrect: true, time: 20}, {isCorrect: true, time: 1}, {isCorrect: false, time: 30}, {isCorrect: false, time: 4}, {isCorrect: true, time: 30}, {isCorrect: true, time: 3}, {isCorrect: true, time: 10}, {isCorrect: true, time: 5}, {isCorrect: true, time: 7}, {isCorrect: true, time: 13}];
    assert.equal(11, getScore(answers, 2));
  });

  it(`should return -1 when all lives are spent`, () => {
    answers = [{isCorrect: false, time: 30}, {isCorrect: true, time: 30}, {isCorrect: true, time: 30}, {isCorrect: false, time: 30}, {isCorrect: true, time: 30}, {isCorrect: true, time: 30}, {isCorrect: true, time: 30}, {isCorrect: true, time: 30}, {isCorrect: false, time: 30}, {isCorrect: false, time: 30}];
    assert.equal(-1, getScore(answers, 0));
  });
});
