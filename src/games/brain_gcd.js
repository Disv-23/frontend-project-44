import brainGame from '../index.js';
import getRandomNumber from '../randomNumber.js';

const ruleGames = 'Find the greatest common divisor of given numbers.';

const nod = (x, y) => {
  if (y > x) {
    return nod(y, x);
  } if (!y) {
    return x;
  }
  return nod(y, x % y);
};

const gcd = () => {
  const firsNumber = getRandomNumber(0, 50);
  const secondNumber = getRandomNumber(0, 50);
  const question = `${firsNumber} ${secondNumber}`;
  const correctAnswer = String(nod(firsNumber, secondNumber));
  return [question, correctAnswer];
};

const brainGcd = () => {
  brainGame(ruleGames, gcd);
};

export default brainGcd;
