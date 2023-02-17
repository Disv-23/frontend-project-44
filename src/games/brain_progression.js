import startGame from '../index.js';
import getRandomNumber from '../randomNumber.js';

const gameRule = 'What number is missing in the progression?';
const progressionLength = 10;

const getProgression = (startNumber, step) => {
  const array = [];
  for (let i = 0; i <= progressionLength; i += 1) {
    array.push(startNumber + step * i);
  }
  return array;
};

const generateRoundData = () => {
  const startNumber = getRandomNumber(0, 50);
  const step = getRandomNumber(3, 5);
  const array = getProgression(startNumber, step);
  const indexRandom = getRandomNumber(0, 10);
  const correctAnswer = String(array[indexRandom]);
  array[indexRandom] = '..';
  const question = array.join(' ');

  return [question, correctAnswer];
};

const startProgressionGame = () => startGame(gameRule, generateRoundData);
export default startProgressionGame;
