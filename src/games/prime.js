import { prepareGame } from '../index.js';

const prime = () => {
  const questionText = 'Answer "yes" if given number is prime. Otherwise answer "no".';
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
  prepareGame(questionText, isPrime);
};

export default prime;
