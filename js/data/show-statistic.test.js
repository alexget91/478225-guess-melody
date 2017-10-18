import assert from 'assert';
import showStatistic from './show-statistic.js';

describe(`Show Statistic Message`, () => {
  it(`should return correct message (0 min 21 sec, 0 points (0 fast), 0 mistakes)`, () => {
    assert.equal(`За 0 минут и 21 секунду вы набрали 0 баллов (0 быстрых) совершив 0 ошибок`, showStatistic(0, 21, 0, 0, 0));
  });

  it(`should return correct message (1 min 11 sec, 1 points (1 fast), 1 mistake)`, () => {
    assert.equal(`За 1 минуту и 11 секунд вы набрали 1 балл (1 быстрый) совершив 1 ошибку`, showStatistic(1, 11, 1, 1, 1));
  });

  it(`should return correct message (2 min 4 sec, 2 points (4 fast), 2 mistakes)`, () => {
    assert.equal(`За 2 минуты и 4 секунды вы набрали 2 балла (4 быстрых) совершив 2 ошибки`, showStatistic(2, 4, 2, 4, 2));
  });

  it(`should return correct message (3 min 2 sec, 5 points (11 fast), 5 mistakes)`, () => {
    assert.equal(`За 3 минуты и 2 секунды вы набрали 5 баллов (11 быстрых) совершив 5 ошибок`, showStatistic(3, 2, 5, 11, 5));
  });

  it(`should return correct message (5 min 1 sec, 12 points (8 fast), 12 mistakes)`, () => {
    assert.equal(`За 5 минут и 1 секунду вы набрали 12 баллов (8 быстрых) совершив 12 ошибок`, showStatistic(5, 1, 12, 8, 12));
  });

  it(`should return correct message (21 min 0 sec, 21 points (41 fast), 31 mistakes)`, () => {
    assert.equal(`За 21 минуту и 0 секунд вы набрали 21 балл (41 быстрый) совершив 31 ошибку`, showStatistic(21, 0, 21, 41, 31));
  });

  it(`should return correct message (13 min 6 sec, 33 points (8 fast), 34 mistakes)`, () => {
    assert.equal(`За 13 минут и 6 секунд вы набрали 33 балла (8 быстрых) совершив 34 ошибки`, showStatistic(13, 6, 33, 8, 34));
  });
});
