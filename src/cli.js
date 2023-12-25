import readlineSync from 'readline-sync';

export default function UserName() {
  const name = readlineSync.question('May I have you name?: ');
  console.log(`Hello, ${name}!`);
}
