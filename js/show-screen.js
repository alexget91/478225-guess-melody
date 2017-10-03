const app = document.querySelector(`.app`);

export default (screen, initialize) => {
  app.replaceChild(screen, app.querySelector(`.main`));
  if (typeof initialize !== `undefined`) {
    initialize();
  }
};
