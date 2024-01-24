import prepareGame from '../index.js';
import getRandomInt from '../utils.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => (number % 2 === 0);
const checkParity = (number) => {
  const result = isEven(number) ? 'yes' : 'no';
  return result;
};

const generateAnswerQuestion = () => {
  const number = getRandomInt(1, 10);
  const question = `${number}`;
  const correctAnswer = checkParity(number);
  return [correctAnswer, question];
};

const runEvenGame = () => {
  prepareGame(gameRules, generateAnswerQuestion);
};

export default runEvenGame;
