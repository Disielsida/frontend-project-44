import readlineSync from 'readline-sync';

const userName = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have you name?: ');
  console.log(`Hello, ${name}!`);
  return name;
};

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const askQuestion = (expression) => {
  console.log(`Question: ${expression}`);
  return readlineSync.question('Your answer: ');
};

const compare = (userAnswer, correctAnswer) => {
  if (userAnswer !== correctAnswer) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    return 'lose';
  }
  return console.log('Correct!');
};

export {
  userName,
  askQuestion,
  compare,
  getRandomInt,
};
