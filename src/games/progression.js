import {
  userName,
  askQuestion,
  compare,
  getRandomInt,
} from '../index.js';

const getProgression = () => {
  const a = getRandomInt(0, 100);
  const d = getRandomInt(1, 10);
  const progression = [a];
  const progressionLength = 10;
  let nextTerm = a;
  for (let i = 1; i < progressionLength; i += 1) {
    nextTerm += d;
    progression.push(nextTerm);
  }
  return progression;
};

const prog = () => {
  const name = userName();
  console.log('What number is missing in the progression?');

  for (let i = 0; i < 3; i += 1) {
    const progression = getProgression();
    const hiddenElementIndex = getRandomInt(0, progression.length - 1);
    const correctAnswer = progression[hiddenElementIndex];
    progression[hiddenElementIndex] = '..';

    const userAnswer = askQuestion(progression.join(' '));
    const comparison = compare(Number(userAnswer), correctAnswer);

    if (comparison === 'lose') {
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default prog;
