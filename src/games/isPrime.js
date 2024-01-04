import {
  userName,
  askQuestion,
  compare,
  getRandomInt,
} from '../index.js';

function getCorrectAnswer(number) {
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
}

export default function isPrime() {
  const name = userName();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const num = getRandomInt(1, 100);
    const correctAnswer = getCorrectAnswer(num);
    const userAnswer = askQuestion(num);
    const comparison = compare(userAnswer, correctAnswer);
    if (comparison === 'lose') {
      return console.log(`Let's try again, ${name}!`);
    }
  }
  console.log(`Congratulations, ${name}!`);
  return 'win';
}