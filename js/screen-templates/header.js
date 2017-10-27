export default (data) => {
  let mistakes = ``;

  for (let i = 0; i < data.mistakes; i++) {
    mistakes += `<img class="main-mistake" src="img/wrong-answer.png" width="35" height="49">`;
  }

  return `\
    <div class="page-header">
      <svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
        <circle
          cx="390" cy="390" r="370"
          class="timer-line"
          style="filter: url(.#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"></circle>

        <div class="timer-value" xmlns="http://www.w3.org/1999/xhtml">
          <span class="timer-value-mins">${data.timer.min}</span><!--
          --><span class="timer-value-dots">:</span><!--
          --><span class="timer-value-secs">${data.timer.sec}</span>
        </div>
      </svg>
      <div class="main-mistakes">
        ${mistakes}
      </div>
    </div>`;
};
