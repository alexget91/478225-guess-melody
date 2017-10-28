import assert from 'assert';
import getNumEnding from './get-num-ending.js';

describe(`Get Plural Type`, () => {
  it(`should return correct word (0 items)`, () => {
    assert.equal(`минут`, getNumEnding(0, [`минуту`, `минуты`, `минут`]));
    assert.equal(`секунд`, getNumEnding(0, [`секунду`, `секунды`, `секунд`]));
    assert.equal(`раз`, getNumEnding(0, [`раз`, `раза`, `раз`]));
    assert.equal(`баллов`, getNumEnding(0, [`балл`, `балла`, `баллов`]));
    assert.equal(`быстрых`, getNumEnding(0, [`быстрый`, `быстрых`, `быстрых`]));
    assert.equal(`ошибок`, getNumEnding(0, [`ошибку`, `ошибки`, `ошибок`]));
  });

  it(`should return correct word (0 item)`, () => {
    assert.equal(`минуту`, getNumEnding(1, [`минуту`, `минуты`, `минут`]));
    assert.equal(`секунду`, getNumEnding(1, [`секунду`, `секунды`, `секунд`]));
    assert.equal(`раз`, getNumEnding(1, [`раз`, `раза`, `раз`]));
    assert.equal(`балл`, getNumEnding(1, [`балл`, `балла`, `баллов`]));
    assert.equal(`быстрый`, getNumEnding(1, [`быстрый`, `быстрых`, `быстрых`]));
    assert.equal(`ошибку`, getNumEnding(1, [`ошибку`, `ошибки`, `ошибок`]));
  });

  it(`should return correct word (2-4 items)`, () => {
    assert.equal(`минуты`, getNumEnding(2, [`минуту`, `минуты`, `минут`]));
    assert.equal(`минуты`, getNumEnding(3, [`минуту`, `минуты`, `минут`]));
    assert.equal(`минуты`, getNumEnding(4, [`минуту`, `минуты`, `минут`]));
    assert.equal(`секунды`, getNumEnding(2, [`секунду`, `секунды`, `секунд`]));
    assert.equal(`секунды`, getNumEnding(3, [`секунду`, `секунды`, `секунд`]));
    assert.equal(`секунды`, getNumEnding(4, [`секунду`, `секунды`, `секунд`]));
    assert.equal(`раза`, getNumEnding(2, [`раз`, `раза`, `раз`]));
    assert.equal(`раза`, getNumEnding(3, [`раз`, `раза`, `раз`]));
    assert.equal(`раза`, getNumEnding(4, [`раз`, `раза`, `раз`]));
    assert.equal(`балла`, getNumEnding(2, [`балл`, `балла`, `баллов`]));
    assert.equal(`балла`, getNumEnding(3, [`балл`, `балла`, `баллов`]));
    assert.equal(`балла`, getNumEnding(4, [`балл`, `балла`, `баллов`]));
    assert.equal(`быстрых`, getNumEnding(2, [`быстрый`, `быстрых`, `быстрых`]));
    assert.equal(`быстрых`, getNumEnding(3, [`быстрый`, `быстрых`, `быстрых`]));
    assert.equal(`быстрых`, getNumEnding(4, [`быстрый`, `быстрых`, `быстрых`]));
    assert.equal(`ошибки`, getNumEnding(2, [`ошибку`, `ошибки`, `ошибок`]));
    assert.equal(`ошибки`, getNumEnding(3, [`ошибку`, `ошибки`, `ошибок`]));
    assert.equal(`ошибки`, getNumEnding(4, [`ошибку`, `ошибки`, `ошибок`]));
  });

  it(`should return correct word (5-20 items)`, () => {
    assert.equal(`минут`, getNumEnding(5, [`минуту`, `минуты`, `минут`]));
    assert.equal(`минут`, getNumEnding(11, [`минуту`, `минуты`, `минут`]));
    assert.equal(`минут`, getNumEnding(13, [`минуту`, `минуты`, `минут`]));
    assert.equal(`секунд`, getNumEnding(5, [`секунду`, `секунды`, `секунд`]));
    assert.equal(`секунд`, getNumEnding(11, [`секунду`, `секунды`, `секунд`]));
    assert.equal(`секунд`, getNumEnding(13, [`секунду`, `секунды`, `секунд`]));
    assert.equal(`раз`, getNumEnding(5, [`раз`, `раза`, `раз`]));
    assert.equal(`раз`, getNumEnding(11, [`раз`, `раза`, `раз`]));
    assert.equal(`раз`, getNumEnding(13, [`раз`, `раза`, `раз`]));
    assert.equal(`баллов`, getNumEnding(5, [`балл`, `балла`, `баллов`]));
    assert.equal(`баллов`, getNumEnding(11, [`балл`, `балла`, `баллов`]));
    assert.equal(`баллов`, getNumEnding(13, [`балл`, `балла`, `баллов`]));
    assert.equal(`быстрых`, getNumEnding(5, [`быстрый`, `быстрых`, `быстрых`]));
    assert.equal(`быстрых`, getNumEnding(11, [`быстрый`, `быстрых`, `быстрых`]));
    assert.equal(`быстрых`, getNumEnding(13, [`быстрый`, `быстрых`, `быстрых`]));
    assert.equal(`ошибок`, getNumEnding(5, [`ошибку`, `ошибки`, `ошибок`]));
    assert.equal(`ошибок`, getNumEnding(11, [`ошибку`, `ошибки`, `ошибок`]));
    assert.equal(`ошибок`, getNumEnding(13, [`ошибку`, `ошибки`, `ошибок`]));
  });

  it(`should return correct word (*1 items)`, () => {
    assert.equal(`минуту`, getNumEnding(21, [`минуту`, `минуты`, `минут`]));
    assert.equal(`секунду`, getNumEnding(21, [`секунду`, `секунды`, `секунд`]));
    assert.equal(`раз`, getNumEnding(21, [`раз`, `раза`, `раз`]));
    assert.equal(`балл`, getNumEnding(21, [`балл`, `балла`, `баллов`]));
    assert.equal(`быстрый`, getNumEnding(21, [`быстрый`, `быстрых`, `быстрых`]));
    assert.equal(`ошибку`, getNumEnding(21, [`ошибку`, `ошибки`, `ошибок`]));
  });

  it(`should return correct word (*2 items)`, () => {
    assert.equal(`минуты`, getNumEnding(32, [`минуту`, `минуты`, `минут`]));
    assert.equal(`секунды`, getNumEnding(32, [`секунду`, `секунды`, `секунд`]));
    assert.equal(`раза`, getNumEnding(32, [`раз`, `раза`, `раз`]));
    assert.equal(`балла`, getNumEnding(32, [`балл`, `балла`, `баллов`]));
    assert.equal(`быстрых`, getNumEnding(32, [`быстрый`, `быстрых`, `быстрых`]));
    assert.equal(`ошибки`, getNumEnding(32, [`ошибку`, `ошибки`, `ошибок`]));
  });

  it(`should return correct word (*5 items)`, () => {
    assert.equal(`минут`, getNumEnding(45, [`минуту`, `минуты`, `минут`]));
    assert.equal(`секунд`, getNumEnding(45, [`секунду`, `секунды`, `секунд`]));
    assert.equal(`раз`, getNumEnding(45, [`раз`, `раза`, `раз`]));
    assert.equal(`баллов`, getNumEnding(45, [`балл`, `балла`, `баллов`]));
    assert.equal(`быстрых`, getNumEnding(45, [`быстрый`, `быстрых`, `быстрых`]));
    assert.equal(`ошибок`, getNumEnding(45, [`ошибку`, `ошибки`, `ошибок`]));
  });
});
