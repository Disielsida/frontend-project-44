import { prepareGame } from '../index.js';

const even = () => {
  const questionText = 'Answer "yes" if the number is even, otherwise answer "no".';
  const isEven = (number) => (number % 2 === 0 ? 'yes' : 'no');
  prepareGame(questionText, isEven);
};

export default even;
