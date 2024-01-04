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

const prepareGame = (questionText, logicFn) => {
  const name = userName();
  console.log(questionText);
  for (let i = 0; i < 3; i += 1) {
    const number = getRandomInt(1, 100);
    const correctAnswer = logicFn(number);
    const userAnswer = askQuestion(number);
    const comparison = compare(userAnswer, correctAnswer);
    if (comparison === 'lose') {
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export {
  userName,
  askQuestion,
  compare,
  getRandomInt,
  prepareGame,
};
