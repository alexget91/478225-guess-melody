import assert from 'assert';
import getScore from './get-score.js';

describe(`Get player score`, () => {
  let answers;

  it(`should return -1 when the answers count is not 10`, () => {
    answers = [[true, 30], [true, 30], [true, 30]];
    assert.equal(-1, getScore(answers, 4));

    answers = [[false, 30], [false, 30], [false, 30]];
    assert.equal(-1, getScore(answers, 1));

    answers = [[true, 30], [true, 30], [true, 30], [true, 30], [true, 30], [true, 30], [true, 30], [true, 30], [true, 30], [true, 30], [true, 30]];
    assert.equal(-1, getScore(answers, 4));
  });

  it(`should return correct score on no-fast answers without mistakes`, () => {
    answers = [[true, 30], [true, 30], [true, 30], [true, 30], [true, 30], [true, 30], [true, 30], [true, 30], [true, 30], [true, 30]];
    assert.equal(10, getScore(answers, 4));
  });

  it(`should return correct score when some answers are fast (no mistakes)`, () => {
    answers = [[true, 20], [true, 30], [true, 30], [true, 30], [true, 30], [true, 30], [true, 30], [true, 30], [true, 30], [true, 30]];
    assert.equal(11, getScore(answers, 4));

    answers = [[true, 20], [true, 1], [true, 30], [true, 4], [true, 30], [true, 3], [true, 10], [true, 5], [true, 7], [true, 13]];
    assert.equal(18, getScore(answers, 4));
  });

  it(`should return correct score when there are some mistakes`, () => {
    answers = [[false, 30], [true, 30], [true, 30], [true, 30], [false, 30], [true, 30], [true, 30], [true, 30], [true, 30], [true, 30]];
    assert.equal(4, getScore(answers, 2));

    answers = [[false, 30], [true, 30], [true, 30], [true, 30], [false, 30], [true, 30], [true, 30], [true, 30], [true, 30], [false, 30]];
    assert.equal(1, getScore(answers, 1));

    answers = [[true, 20], [true, 1], [true, 30], [false, 4], [true, 30], [true, 3], [true, 10], [true, 5], [true, 7], [true, 13]];
    assert.equal(14, getScore(answers, 3));

    answers = [[true, 20], [true, 1], [false, 30], [false, 4], [true, 30], [true, 3], [true, 10], [true, 5], [true, 7], [true, 13]];
    assert.equal(11, getScore(answers, 2));
  });

  it(`should return -1 when all lives are spent`, () => {
    answers = [[false, 10], [true, 30], [true, 30], [true, 20], [false, 30], [true, 30], [true, 30], [true, 30], [false, 30], [false, 30]];
    assert.equal(-1, getScore(answers, 0));
  });
});
