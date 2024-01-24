import getPrepareGame from '../index.js';
import getRandomInt from '../utils.js';

const gameRules = 'What number is missing in the progression?';

const getProgression = (start, step, length) => {
  const progression = [start];
  let nextTerm = start;
  for (let i = 1; i < length; i += 1) {
    nextTerm += step;
    progression.push(nextTerm);
  }
  return progression;
};

const getAnswerQuestion = () => {
  const progression = getProgression(getRandomInt(0, 100), getRandomInt(1, 10), 10);
  const hiddenElementIndex = getRandomInt(0, progression.length - 1);
  const correctAnswer = progression[hiddenElementIndex];
  progression[hiddenElementIndex] = '..';
  const question = progression.join(' ');
  return [correctAnswer.toString(), question];
};

const runProgressionGame = () => {
  getPrepareGame(gameRules, getAnswerQuestion);
};

export default runProgressionGame;
