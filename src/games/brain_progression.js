import brainGame from '../index.js';
import getRandomNumber from '../randomNumber.js';

const ruleGames = 'What number is missing in the progression?';

const progression = (startNumber, step) => {
  const array = [];
  for (let i = 0; i <= 10; i += 1) {
    array.push(startNumber + step * i);
  }
  return array;
};

const progres = () => {
  const startNumber = getRandomNumber(0, 50);
  const step = getRandomNumber(3, 5);
  const array = progression(startNumber, step);
  const indexRandom = getRandomNumber(0, 10);
  const correctAnswer = String(array[indexRandom]);
  array[indexRandom] = '..';
  const question = array.join(' ');

  return [question, correctAnswer];
};

const brainProgress = () => {
  brainGame(ruleGames, progres);
};

export default brainProgress;
