const { randomNumberInRange } = require("./helpers");

function generateArrayWithRandomNumbers(howManyNumbers = 10 , min = 1, max = 10) {
  if(!Number.isInteger(howManyNumbers) || howManyNumbers < 0) throw new Error('howManyNumbers argument is invalid.');
  if(!Number.isFinite(min * max) || min < 0 || max < 0) throw new Error('Range numbers are invalid.');
  if(min > max) throw new Error('Maximum number in range should be higher or equal to minimum.')

  const arrayWithRandomNumbers = [];

  for (let i = 0; i < howManyNumbers; i++) {
    arrayWithRandomNumbers.push(randomNumberInRange(min, max));
  }

  return arrayWithRandomNumbers;
}

function generateArrayOfArrays(howManyArrays = 10, howManyNumbers = 10, min = 1, max = 10) {
  if(!Number.isInteger(howManyArrays) || howManyArrays < 0) throw new Error('howManyArrays argument is invalid.');

  const result = [];

  for (let i = 0; i < howManyArrays; i++) {
    result.push(generateArrayWithRandomNumbers(howManyNumbers, min, max));
  }

  return result;
}
