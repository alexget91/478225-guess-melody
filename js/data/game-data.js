import GameState from './game-state';

const gameData = {
  GAME_TITLE: `Угадай мелодию`,
  GAME_TIME: 300,
  FAST_ANSWER_TIME: 30,
  TIMER_BLINK_TIME: 30,
  NOTES_COUNT: 4,
  AnswerPrice: {
    CORRECT: 1,
    FAST: 2,
    WRONG: -2
  },
  ExitCode: {
    NOTES_OVER: -1,
    TIME_OVER: -2
  }
};

// Параметры хедера
export const gameState = new GameState(gameData.NOTES_COUNT, gameData.GAME_TIME);

// Типы вопросов
export const QuestionType = {
  GENRE: `genre`,
  ARTIST: `artist`
};

// Массив вопросов игры
export const gameSequence = [];

// Массив загруженных мелодий
export const gameMusic = {};

// Статистика предыдущих игр
export const gameStatistics = [
  {
    score: 7,
    notesLeft: 4,
    timeLeft: 20
  },
  {
    score: 14,
    notesLeft: 3,
    timeLeft: 40
  },
  {
    score: 2,
    notesLeft: 4,
    timeLeft: 20
  }
];

// Массив ответов игрока
export const gameAnswers = [];

export default gameData;
