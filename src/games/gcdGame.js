import getPrepareGame from '../index.js';
import getRandomInt from '../utils.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

const getGCDAnswer = (num1, num2) => {
  let a = Math.max(num1, num2);
  let b = Math.min(num1, num2);
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
};

const getAnswerQuestion = () => {
  const num1 = getRandomInt();
  const num2 = getRandomInt();
  const correctAnswer = getGCDAnswer(num1, num2);
  const question = `${num1} ${num2}`;
  return [correctAnswer.toString(), question];
};

const runGСDGame = () => {
  getPrepareGame(gameRules, getAnswerQuestion);
};

export default runGСDGame;
