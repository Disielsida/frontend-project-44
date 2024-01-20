import readlineSync from 'readline-sync';

const rounds = 3;

const prepareGame = (gameRules, logicFn) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have you name?: ');
  console.log(`Hello, ${userName}!`);

  console.log(gameRules);

  for (let i = 0; i !== rounds; i += 1) {
    const [correctAnswer, question] = logicFn();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return 'lose';
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
  return 'win';
};

export default prepareGame;
