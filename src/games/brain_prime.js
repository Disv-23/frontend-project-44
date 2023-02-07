import brainGame from '../index.js';
import getRandomNumber from '../randomNumber.js';

const ruleGames = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2, max = Math.sqrt(num); i <= max; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};

const questionAndAnswer = () => {
  const numRandom = getRandomNumber(2, 100);
  const question = `${numRandom}`;
  const correctAnswer = isPrime(numRandom) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const brainPrime = () => {
  brainGame(ruleGames, questionAndAnswer);
};

export default brainPrime;
