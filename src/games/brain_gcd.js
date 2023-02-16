import startGames from '../index.js';
import getRandomNumber from '../randomNumber.js';

const ruleGame = 'Find the greatest common divisor of given numbers.';

const nod = (x, y) => {
  if (y > x) {
    return nod(y, x);
  } if (!y) {
    return x;
  }
  return nod(y, x % y);
};

const generateRoundData = () => {
  const firsNumber = getRandomNumber(0, 50);
  const secondNumber = getRandomNumber(0, 50);
  const question = `${firsNumber} ${secondNumber}`;
  const correctAnswer = String(nod(firsNumber, secondNumber));
  return [question, correctAnswer];
};

const startGcdGame = () => startGames(ruleGame, generateRoundData);
export default startGcdGame;
