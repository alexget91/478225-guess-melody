const main = document.querySelector(`.app .main`);

export default (block) => {
  if (block) {
    main.removeChild(main.querySelector(block));
  } else {
    main.innerHTML = ``;
  }
};
