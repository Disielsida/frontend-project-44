import readlineSync from 'readline-sync';

export default function UserName()  {
  // Запрос имени пользователя
  const name = readlineSync.question('May I have you name?: ');

  // Вывод приветствия с использованием введенного имени
  console.log(`Hello, ${name}!`);
};
