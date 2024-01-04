import {
  userName,
  askQuestion,
  compare,
  getRandomInt,
} from '../index.js';

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

const calc = () => {
  const name = userName();
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    const num1 = getRandomInt(1, 100);
    const num2 = getRandomInt(1, 100);
    const operator = getRandomOperator();
    const correctAnswer = calculateExp(num1, operator, num2);
    const userAnswer = Number(askQuestion(`${num1} ${operator} ${num2}`));
    const comparison = compare(userAnswer, correctAnswer);
    if (comparison === 'lose') {
      return console.log(`Let's try again, ${name}!`);
    }
  }
  console.log(`Congratulations, ${name}!`);
  return 'win';
};

export default calc;
