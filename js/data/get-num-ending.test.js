import assert from 'assert';
import getNumEnding from './get-num-ending.js';

describe(`Get Num Ending`, () => {
  it(`should return correct word (0 items)`, () => {
    assert.equal(`минут`, getNumEnding(0));
    assert.equal(`секунд`, getNumEnding(0, `sec`));
    assert.equal(`раз`, getNumEnding(0, `times`));
    assert.equal(`баллов`, getNumEnding(0, `points`));
    assert.equal(`быстрых`, getNumEnding(0, `fastPoints`));
    assert.equal(`ошибок`, getNumEnding(0, `mistakes`));
  });

  it(`should return correct word (1 items)`, () => {
    assert.equal(`минуту`, getNumEnding(1));
    assert.equal(`секунду`, getNumEnding(1, `sec`));
    assert.equal(`раз`, getNumEnding(1, `times`));
    assert.equal(`балл`, getNumEnding(1, `points`));
    assert.equal(`быстрый`, getNumEnding(1, `fastPoints`));
    assert.equal(`ошибку`, getNumEnding(1, `mistakes`));
  });

  it(`should return correct word (2-4 items)`, () => {
    assert.equal(`минуты`, getNumEnding(2));
    assert.equal(`минуты`, getNumEnding(3));
    assert.equal(`минуты`, getNumEnding(4));
    assert.equal(`секунды`, getNumEnding(2, `sec`));
    assert.equal(`секунды`, getNumEnding(3, `sec`));
    assert.equal(`секунды`, getNumEnding(4, `sec`));
    assert.equal(`раза`, getNumEnding(2, `times`));
    assert.equal(`раза`, getNumEnding(3, `times`));
    assert.equal(`раза`, getNumEnding(4, `times`));
    assert.equal(`балла`, getNumEnding(2, `points`));
    assert.equal(`балла`, getNumEnding(2, `points`));
    assert.equal(`балла`, getNumEnding(2, `points`));
    assert.equal(`быстрых`, getNumEnding(2, `fastPoints`));
    assert.equal(`быстрых`, getNumEnding(3, `fastPoints`));
    assert.equal(`быстрых`, getNumEnding(4, `fastPoints`));
    assert.equal(`ошибки`, getNumEnding(2, `mistakes`));
    assert.equal(`ошибки`, getNumEnding(3, `mistakes`));
    assert.equal(`ошибки`, getNumEnding(4, `mistakes`));
  });

  it(`should return correct word (5-20 items)`, () => {
    assert.equal(`минут`, getNumEnding(5));
    assert.equal(`минут`, getNumEnding(11));
    assert.equal(`минут`, getNumEnding(13));
    assert.equal(`секунд`, getNumEnding(5, `sec`));
    assert.equal(`секунд`, getNumEnding(11, `sec`));
    assert.equal(`секунд`, getNumEnding(13, `sec`));
    assert.equal(`раз`, getNumEnding(5, `times`));
    assert.equal(`раз`, getNumEnding(11, `times`));
    assert.equal(`раз`, getNumEnding(13, `times`));
    assert.equal(`баллов`, getNumEnding(5, `points`));
    assert.equal(`баллов`, getNumEnding(11, `points`));
    assert.equal(`баллов`, getNumEnding(13, `points`));
    assert.equal(`быстрых`, getNumEnding(5, `fastPoints`));
    assert.equal(`быстрых`, getNumEnding(11, `fastPoints`));
    assert.equal(`быстрых`, getNumEnding(13, `fastPoints`));
    assert.equal(`ошибок`, getNumEnding(5, `mistakes`));
    assert.equal(`ошибок`, getNumEnding(11, `mistakes`));
    assert.equal(`ошибок`, getNumEnding(13, `mistakes`));
  });

  it(`should return correct word (*1 items)`, () => {
    assert.equal(`минуту`, getNumEnding(21));
    assert.equal(`секунду`, getNumEnding(21, `sec`));
    assert.equal(`раз`, getNumEnding(21, `times`));
    assert.equal(`балл`, getNumEnding(21, `points`));
    assert.equal(`быстрый`, getNumEnding(21, `fastPoints`));
    assert.equal(`ошибку`, getNumEnding(21, `mistakes`));
  });

  it(`should return correct word (*2 items)`, () => {
    assert.equal(`минуты`, getNumEnding(32));
    assert.equal(`секунды`, getNumEnding(32, `sec`));
    assert.equal(`раза`, getNumEnding(32, `times`));
    assert.equal(`балла`, getNumEnding(32, `points`));
    assert.equal(`быстрых`, getNumEnding(32, `fastPoints`));
    assert.equal(`ошибки`, getNumEnding(32, `mistakes`));
  });

  it(`should return correct word (*5 items)`, () => {
    assert.equal(`минут`, getNumEnding(45));
    assert.equal(`секунд`, getNumEnding(45, `sec`));
    assert.equal(`раз`, getNumEnding(45, `times`));
    assert.equal(`баллов`, getNumEnding(45, `points`));
    assert.equal(`быстрых`, getNumEnding(45, `fastPoints`));
    assert.equal(`ошибок`, getNumEnding(45, `mistakes`));
  });
});
