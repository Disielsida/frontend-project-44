import getPrepareGame from '../index.js';
import getRandomInt from '../utils.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getPrimeAnswer = (number) => {
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

const getAnswerQuestion = () => {
  const number = getRandomInt();
  const question = `${number}`;
  const correctAnswer = getPrimeAnswer(number);
  return [correctAnswer, question];
};

const runPrimeGame = () => {
  getPrepareGame(gameRules, getAnswerQuestion);
};

export default runPrimeGame;
