import brainGameEven from '../index.js';
import getRandomNumber from '../randomNumber.js';

const ruleGames = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const questionAndAnswer = () => {
  const numberRandom = getRandomNumber(0, 100);
  const question = `${numberRandom}`;
  const correctAnswer = isEven(numberRandom) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const brainEven = () => {
  brainGameEven(ruleGames, questionAndAnswer);
};

export default brainEven;
