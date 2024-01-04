import { prepareGame } from '../index.js';

const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }
  if (number === 2) {
    return true;
  }
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const primeGameLogic = (number) => (isPrime(number) ? 'yes' : 'no');

const prime = () => {
  const questionText = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  prepareGame(questionText, primeGameLogic);
};

export default prime;
