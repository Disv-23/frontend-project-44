import readlineSync from 'readline-sync';
import brainGame from './cli.js';

const num = () => {
  const number = (Math.round(Math.random() * 100));
  return number;
};

const parityCheck = () => {
  const userName = brainGame();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const numRandom = num();
    const questionAnswer = readlineSync.question(`${'Question: '}${numRandom}${'\nYour answer: '}`);
    if ((numRandom % 2 === 0 && questionAnswer === 'yes') || (numRandom % 2 !== 0 && questionAnswer === 'no')) {
      console.log('Correct!');
    } else {
      console.log(`${'"yes" is wrong answer ;(. Correct answer was \'no\'.'} ${'\nLet\'s try again, '}${userName}!`);
      return;
    }
  }
  console.log(`Congratulations ${userName}!`);
};

export default parityCheck;
