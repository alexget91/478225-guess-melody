// import getElementFromTemplate from './get-element-from-template.js';

const main = document.querySelector(`.main`);

export default (template, initialize, state) => {
  // const screen = getElementFromTemplate(template);
  const screen = template;
  const classes = screen.classList;

  if (classes.contains(`main`)) {
    const screenContent = screen.children;

    main.classList = classes;
    while (screenContent.length > 0) {
      main.appendChild(screenContent[0]);
    }
  } else {
    main.appendChild(screen);
  }

  if (typeof initialize !== `undefined`) {
    initialize(state);
  }
};
