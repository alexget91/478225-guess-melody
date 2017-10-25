import {LIVES_COUNT, GAME_TIME} from './constants.js';

// Начальные параметры игрока (отображаются в хедере)
export const initialState = {
  levelsPassed: 0,
  lives: LIVES_COUNT,
  time: GAME_TIME
};

// Массив вопросов игры
export const gameSequence = [
  {
    typeArtist: true, // Тип: выбор артиста
    melodyID: 1, // ID проигрываемой мелодии (правильный ответ)
    answers: new Set(1, 2, 3) // ID мелодий из библиотеки
  },
  {
    typeArtist: false, // Тип: выбор жанра
    genre: `Rock`, // Оставил для наглядности, но можно брать из correctAnswer
    correctAnswer: [2, 4], // ID мелодий из библиотеки
    answers: new Set(1, 2, 3, 4) // ID мелодий из библиотеки
  },
  {
    typeArtist: true,
    melodyID: 1,
    answers: new Set(1, 2, 3)
  },
  {
    typeArtist: false,
    genre: `Rock`,
    correctAnswer: [2, 4],
    answers: new Set(1, 2, 3, 4)
  },
  {
    typeArtist: true,
    melodyID: 1,
    answers: new Set(1, 2, 3)
  },
  {
    typeArtist: false,
    genre: `Rock`,
    correctAnswer: [2, 4],
    answers: new Set(1, 2, 3, 4)
  },
  {
    typeArtist: true,
    melodyID: 1,
    answers: new Set(1, 2, 3)
  },
  {
    typeArtist: false,
    genre: `Rock`,
    correctAnswer: [2, 4],
    answers: new Set(1, 2, 3, 4)
  },
  {
    typeArtist: true,
    melodyID: 1,
    answers: new Set(1, 2, 3)
  },
  {
    typeArtist: false,
    genre: `Rock`,
    correctAnswer: [2, 4],
    answers: new Set(1, 2, 3, 4)
  }
];

// Статистика предыдущих игр
export const statistics = [
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
    score: 4,
    notesLeft: 4,
    timeLeft: 20
  }
];

/*
// Массив ответов игрока (изначально пустой, формируется в процессе игры)
const answers = [{isCorrect: true, time: 30}, {isCorrect: true, time: 30}, {isCorrect: true, time: 30}];

// Результат текущей игры (изначально пустой, формируется в процессе игры)
const result = {
  score: 10,
  notesLeft: 4,
  timeLeft: 20
};
*/
