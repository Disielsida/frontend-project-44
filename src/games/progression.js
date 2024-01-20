import prepareGame from '../index.js';
import getRandomInt from '../utils.js';

const gameRules = 'What number is missing in the progression?';

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

const logicFn = () => {
  const progression = getProgression();
  const hiddenElementIndex = getRandomInt(0, progression.length - 1);
  const correctAnswer = progression[hiddenElementIndex];
  progression[hiddenElementIndex] = '..';
  const question = progression.join(' ');
  return [correctAnswer.toString(), question];
};

const prog = () => {
  prepareGame(gameRules, logicFn);
};

export default prog;
