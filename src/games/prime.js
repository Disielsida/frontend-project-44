import prepareGame from '../index.js';
import getRandomInt from '../utils.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number <= 1) {
    return 'no';
  }
  if (number === 2) {
    return 'yes';
  }
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const logicFn = () => {
  const number = getRandomInt();
  const question = `${number}`;
  const correctAnswer = isPrime(number);
  return [correctAnswer, question];
};

const prime = () => {
  prepareGame(gameRules, logicFn);
};

export default prime;
