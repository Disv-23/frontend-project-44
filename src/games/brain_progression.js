import getBrainGames from '../index.js';
import getRandomNumber from '../randomNumber.js';

const ruleGame = 'What number is missing in the progression?';

const hasProgression = (startNumber, step) => {
  const array = [];
  for (let i = 0; i <= 10; i += 1) {
    array.push(startNumber + step * i);
  }
  return array;
};

const callbackGeneration = () => {
  const startNumber = getRandomNumber(0, 50);
  const step = getRandomNumber(3, 5);
  const array = hasProgression(startNumber, step);
  const indexRandom = getRandomNumber(0, 10);
  const correctAnswer = String(array[indexRandom]);
  array[indexRandom] = '..';
  const question = array.join(' ');

  return [question, correctAnswer];
};

const getProgressionGame = () => getBrainGames(ruleGame, callbackGeneration);
export default getProgressionGame;
