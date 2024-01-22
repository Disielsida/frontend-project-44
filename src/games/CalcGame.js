import prepareGame from '../index.js';
import getRandomInt from '../utils.js';

const gameRules = 'What is the result of the expression?';

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const randomIndex = getRandomInt(0, 2);
  return operators[randomIndex];
};

const calculateExp = (num1, operator, num2) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error('Unknown operator!');
  }
};

const generateQuestionAndCorrectAnswer = () => {
  const num1 = getRandomInt();
  const num2 = getRandomInt();
  const operator = getRandomOperator();
  const correctAnswer = calculateExp(num1, operator, num2);
  const question = `${num1} ${operator} ${num2}`;
  return [correctAnswer.toString(), question];
};

const runCalcGame = () => {
  prepareGame(gameRules, generateQuestionAndCorrectAnswer);
};

export default runCalcGame;
