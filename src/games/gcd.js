import {
  userName,
  askQuestion,
  compare,
  getRandomInt,
} from '../index.js';

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

const gcd = () => {
  const name = userName();
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < 3; i += 1) {
    const num1 = getRandomInt(1, 100);
    const num2 = getRandomInt(1, 100);
    const correctAnswer = getCorrectAnswer(num1, num2);
    const userAnswer = Number(askQuestion(`${num1} ${num2}`));
    const comparison = compare(userAnswer, correctAnswer);
    if (comparison === 'lose') {
      return console.log(`Let's try again, ${name}!`);
    }
  }
  console.log(`Congratulations, ${name}!`);
  return 'win';
};

export default gcd;
