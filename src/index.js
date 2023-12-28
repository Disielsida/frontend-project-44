import readlineSync from 'readline-sync';

function userName() {
  const name = readlineSync.question('May I have you name?: ');
  console.log(`Hello, ${name}!`);
  return name;
}

function askQuestion(number) {
  console.log(`Question: ${number}`);
  return readlineSync.question('Your answer: ');
}

function compare(userAnswer, correctAnswer) {
  if (userAnswer !== correctAnswer) {
    console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
    return 'lose';
  }
  return console.log('Correct!');
}

export { userName, askQuestion, compare };
