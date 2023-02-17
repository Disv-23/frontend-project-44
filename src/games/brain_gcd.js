import startGame from '../index.js';
import getRandomNumber from '../randomNumber.js';

const gameRule = 'Find the greatest common divisor of given numbers.';

const getGCD = (x, y) => {
  if (y > x) {
    return getGCD(y, x);
  } if (!y) {
    return x;
  }
  return getGCD(y, x % y);
};

const generateRoundData = () => {
  const firsNumber = getRandomNumber(0, 50);
  const secondNumber = getRandomNumber(0, 50);
  const question = `${firsNumber} ${secondNumber}`;
  const correctAnswer = String(getGCD(firsNumber, secondNumber));
  return [question, correctAnswer];
};

const startGcdGame = () => startGame(gameRule, generateRoundData);
export default startGcdGame;
