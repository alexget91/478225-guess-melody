const app = document.querySelector(`.app`);

export default (screen) => {
  app.replaceChild(screen, app.querySelector(`.main`));
};
