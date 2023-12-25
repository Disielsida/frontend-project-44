import readlineSync from 'readline-sync';

function getRandomInt(min, max) {
  // eslint-disable-next-line no-param-reassign
  min = Math.ceil(min); // Округление вверх, чтобы исключить минимальное значение
  // eslint-disable-next-line no-param-reassign
  max = Math.floor(max); // Округление вниз, чтобы исключить максимальное значение
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function IsEven() {
  const name = readlineSync.question('May I have you name?: ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let CorrectAnswer;
  for (let i = 0; i < 3; i += 1) {
    const number = getRandomInt(1, 100);
    console.log(`Question: ${number}`);
    if (number % 2 === 0) {
      CorrectAnswer = 'yes';
    } else {
      // eslint-disable-next-line no-unused-vars
      CorrectAnswer = 'no';
    }
    // eslint-disable-next-line no-unused-vars
    const answer = readlineSync.question('Your answer: ');
    if (answer !== CorrectAnswer) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${CorrectAnswer}".`);
      console.log(`Let's try again, ${name}!`);
      return 'lose';
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
}
