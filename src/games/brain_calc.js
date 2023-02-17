import startGame from '../index.js';
import getRandomNumber from '../randomNumber.js';

const gameRule = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const getRandomOperator = (arr) => {
  const operatorIndex = Math.floor(Math.random() * arr.length);
  return arr[operatorIndex];
};

const calculate = (operator, value1, value2) => {
  switch (operator) {
    case '+':
      return value1 + value2;
    case '-':
      return value1 - value2;
    case '*':
      return value1 * value2;
    default:
      throw new Error(`Unknown order state: '${operator.value1.value2}'!`);
  }
};

const generateRoundData = () => {
  const randomSymbol = getRandomOperator(operators);
  const firstNumber = getRandomNumber(1, 50);
  const secondNumber = getRandomNumber(1, 50);

  const question = `${firstNumber} ${randomSymbol} ${secondNumber}`;
  const correctAnswer = String(calculate(randomSymbol, firstNumber, secondNumber));

  return [question, correctAnswer];
};

const startCalcGame = () => startGame(gameRule, generateRoundData);
export default startCalcGame;
