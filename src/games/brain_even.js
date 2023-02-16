import startGames from '../index.js';
import getRandomNumber from '../randomNumber.js';

const ruleGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const generateRoundData = () => {
  const numberRandom = getRandomNumber(1, 100);
  const question = `${numberRandom}`;
  const correctAnswer = isEven(numberRandom) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const startEvenGame = () => startGames(ruleGame, generateRoundData);
export default startEvenGame;
