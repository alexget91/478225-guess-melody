const ARROW_LEFT_CODE = 37;
const ARROW_RIGHT_CODE = 39;

const templates = document.querySelector(`#templates`);
const templatesContent = templates.content ? templates.content : templates;
const screens = templatesContent.querySelectorAll(`.main`);
const app = document.querySelector(`.app`);
let currentScreen = 0;

const showScreen = function (id) {
  const main = app.querySelector(`.main`);
  app.replaceChild(screens[id], main);
};

const getNextIndex = function (array) {
  const next = ++currentScreen;
  currentScreen = parseInt(next >= array.length ? 0 : next, 10);
  return currentScreen;
};

const getPrevIndex = function (array) {
  const prev = --currentScreen;
  currentScreen = parseInt(prev < 0 ? array.length - 1 : prev, 10);
  return currentScreen;
};


showScreen(currentScreen);

document.addEventListener(`keydown`, function (evt) {
  if (evt.altKey) {
    switch (evt.keyCode) {
      case ARROW_LEFT_CODE:
        evt.preventDefault();
        showScreen(getPrevIndex(screens));
        break;
      case ARROW_RIGHT_CODE:
        evt.preventDefault();
        showScreen(getNextIndex(screens));
        break;
    }
  }
});
