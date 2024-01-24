import readlineSync from 'readline-sync';

const getPrepareGame = (gameRules, getAnswerQuestion) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have you name?: ');
  console.log(`Hello, ${userName}!`);

  console.log(gameRules);

  const maxRoundsCount = 3;

  for (let i = 0; i !== maxRoundsCount; i += 1) {
    const [correctAnswer, question] = getAnswerQuestion();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default getPrepareGame;
