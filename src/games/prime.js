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

export default function Isprime() {
  const name = userName();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const number = getRandomInt(1, 100);
    const correctAnswer = getCorrectAnswer(number);
    const userAnswer = askQuestion(number);
    const comparison = compare(userAnswer, correctAnswer);
    if (comparison === 'lose') {
      return console.log(`Let's try again, ${name}!`);
    }
  }
  console.log(`Congratulations, ${name}!`);
}
