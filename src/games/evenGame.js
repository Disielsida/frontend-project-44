import getPrepareGame from '../index.js';
import getRandomInt from '../utils.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => (number % 2 === 0);
const getParity = (number) => {
  const result = isEven(number) ? 'yes' : 'no';
  return result;
};

const getAnswerQuestion = () => {
  const number = getRandomInt(1, 10);
  const question = `${number}`;
  const correctAnswer = getParity(number);
  return [correctAnswer, question];
};

const runEvenGame = () => {
  getPrepareGame(gameRules, getAnswerQuestion);
};

export default runEvenGame;
