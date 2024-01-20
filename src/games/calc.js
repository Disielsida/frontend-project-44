import prepareGame from '../index.js';
import getRandomInt from '../utils.js';

const gameRules = 'What is the result of the expression?';

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * operators.length);
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
      return console.log('Неверный оператор');
  }
};

const logicFn = () => {
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);
  const operator = getRandomOperator();
  const correctAnswer = calculateExp(num1, operator, num2);
  const question = `${num1} ${operator} ${num2}`;
  return [correctAnswer.toString(), question];
};

const calc = () => {
  prepareGame(gameRules, logicFn);
};

export default calc;
