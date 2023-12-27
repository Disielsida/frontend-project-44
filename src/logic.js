import readlineSync from 'readline-sync';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getCorrectAnswer(number) {
  return number % 2 === 0 ? 'yes' : 'no';
}

function askQuestion(number) {
  console.log(`Question: ${number}`);
  return readlineSync.question('Your answer: ');
}

export default function IsEven() {
  const name = readlineSync.question('May I have you name?: ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const number = getRandomInt(1, 100);
    const CorrectAnswer = getCorrectAnswer(number);
    const UserAnswer = askQuestion(number);
    if (UserAnswer !== CorrectAnswer) {
      console.log(`"${UserAnswer}" is wrong answer ;(. Correct answer was "${CorrectAnswer}".`);
      console.log(`Let's try again, ${name}!`);
      return 'lose';
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
}
