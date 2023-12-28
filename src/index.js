import readlineSync from 'readline-sync';

function userName() {
  const name = readlineSync.question('May I have you name?: ');
  console.log(`Hello, ${name}!`);
  return name;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function askQuestion(expression) {
  console.log(`Question: ${expression}`);
  return readlineSync.question('Your answer: ');
}

function compare(userAnswer, correctAnswer) {
  if (userAnswer !== correctAnswer) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    return 'lose';
  }
  return console.log('Correct!');
}

export {
  userName,
  askQuestion,
  compare,
  getRandomInt,
};
