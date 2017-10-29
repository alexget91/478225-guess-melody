export default (screen) => {
  const classes = screen.classList;
  const main = document.querySelector(`.main`);

  if (classes.contains(`main`)) {
    const screenContent = screen.children;
    main.classList = classes;
    while (screenContent.length > 0) {
      main.appendChild(screenContent[0]);
    }
  } else {
    main.appendChild(screen);
  }
};
