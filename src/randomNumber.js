const getRandomNumber = (maxNumber, minNumber = 1) => {
  const count = Math.floor(Math.random() * (minNumber - maxNumber) + maxNumber);
  return count;
};
export default getRandomNumber;
