import prepareGame from '../index.js';
import getRandomInt from '../utils.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getAnswerOfPrimeness = (number) => {
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

const generateQuestionAndCorrectAnswer = () => {
  const number = getRandomInt();
  const question = `${number}`;
  const correctAnswer = getAnswerOfPrimeness(number);
  return [correctAnswer, question];
};

const runPrimeGame = () => {
  prepareGame(gameRules, generateQuestionAndCorrectAnswer);
};

export default runPrimeGame;
