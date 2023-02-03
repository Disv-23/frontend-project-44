import brainGame from '../index.js';
import getRandomNumber from '../randomNumber.js';

const ruleGames = 'What is the result of the expression?';
const operatSymbol = ['+', '-', '*'];

const randomOperat = (arr) => {
  const operatRandom = Math.floor(Math.random() * operatSymbol.length);
  const operat = arr[operatRandom];
  return operat;
};

const operatCalculate = (symbol, value1, value2) => {
  switch (symbol) {
    case '+':
      return value1 + value2;
    case '-':
      return value1 - value2;
    case '*':
      return value1 * value2;
    default:
      return 0;
  }
};

const questionAndAnswer = () => {
  const randomSymbol = randomOperat(operatSymbol);
  const firstNumber = getRandomNumber(0, 100);
  const secondNumber = getRandomNumber(0, 100);

  const question = `${firstNumber} ${randomSymbol} ${secondNumber}`;
  const correctAnswer = String(operatCalculate(randomSymbol, firstNumber, secondNumber));

  return [question, correctAnswer];
};

const brainGamesCalc = () => {
  brainGame(ruleGames, questionAndAnswer);
};

export default brainGamesCalc;
