import {
  userName,
  askQuestion,
  compare,
  getRandomInt,
} from '../index.js';

function getCorrectAnswer(number) {
  return number % 2 === 0 ? 'yes' : 'no';
}

export default function IsEven() {
  const name = userName();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
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
