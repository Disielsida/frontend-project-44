import {
  userName,
  askQuestion,
  compare,
  getRandomInt,
} from '../index.js';

function getProgression() {
  const a = getRandomInt(0, 100);
  const d = getRandomInt(1, 10);
  const progression = [a];
  let nextTerm = a;
  for (let i = 0; i < 9; i += 1) {
    nextTerm += d;
    progression.push(nextTerm);
  }
  return progression;
}

export default function prog() {
  const name = userName();
  console.log('What number is missing in the progression?');
  for (let i = 0; i < 3; i += 1) {
    const progression = getProgression();
    const randomIndex = getRandomInt(0, 10);
    const correctAnswer = progression[randomIndex];
    progression[randomIndex] = '..';
    const userAnswer = Number(askQuestion(progression.join(' ')));
    const comparison = compare(userAnswer, correctAnswer);
    if (comparison === 'lose') {
      return console.log(`Let's try again, ${name}!`);
    }
  }
  console.log(`Congratulations, ${name}!`);
  return 'win';
}
