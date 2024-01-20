import prepareGame from '../index.js';
import getRandomInt from '../utils.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

const logicFn = () => {
  const number = getRandomInt(1, 10);
  const question = `${number}`;
  const correctAnswer = isEven(number);
  return [correctAnswer, question];
};

const makeEven = () => {
  prepareGame(gameRules, logicFn);
};

export default makeEven;
