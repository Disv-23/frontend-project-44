import getBrainGames from '../index.js';
import getRandomNumber from '../randomNumber.js';

const ruleGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2, max = Math.sqrt(num); i <= max; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};

const callbackGeneration = () => {
  const numRandom = getRandomNumber(2, 100);
  const question = `${numRandom}`;
  const correctAnswer = isPrime(numRandom) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const checkPrime = () => getBrainGames(ruleGame, callbackGeneration);
export default checkPrime;
