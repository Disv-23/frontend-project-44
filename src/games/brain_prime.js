import startGame from '../index.js';
import getRandomNumber from '../randomNumber.js';

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2, max = Math.sqrt(num); i <= max; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};

const generateRoundData = () => {
  const numRandom = getRandomNumber(2, 100);
  const question = `${numRandom}`;
  const correctAnswer = isPrime(numRandom) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const startPrimeGame = () => startGame(gameRule, generateRoundData);
export default startPrimeGame;
