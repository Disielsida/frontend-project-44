import prepareGame from '../index.js';
import getRandomInt from '../utils.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

const getCorrectAnswer = (num1, num2) => {
  let a = num1;
  let b = num2;
  if (num1 > num2) {
    while (b !== 0) {
      const temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }
  while (a !== 0) {
    const temp = a;
    a = b % a;
    b = temp;
  }
  return b;
};

const logicFn = () => {
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);
  const correctAnswer = getCorrectAnswer(num1, num2);
  const question = `${num1} ${num2}`;
  return [correctAnswer.toString(), question];
};

const gcd = () => {
  prepareGame(gameRules, logicFn);
};

export default gcd;
