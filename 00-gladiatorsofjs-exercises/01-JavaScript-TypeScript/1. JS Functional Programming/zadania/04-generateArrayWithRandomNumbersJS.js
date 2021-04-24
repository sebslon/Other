const { randomNumberInRange } = require("./helpers");

function generateArrayWithRandomNumbers(
  howManyNumbers = 10,
  min = 1,
  max = 10
) {
  const arrayWithRandomNumbers = [];

  for (let i = 0; i < howManyNumbers; i++) {
    arrayWithRandomNumbers.push(randomNumberInRange(min, max));
  }

  return arrayWithRandomNumbers;
}

function generateArrayOfArrays(
  howManyArrays = 10,
  howManyNumbers = 10,
  min = 1,
  max = 10
) {
  const result = [];

  for (let i = 0; i < howManyArrays; i++) {
    result.push(generateArrayWithRandomNumbers(howManyNumbers, min, max));
  }

  return result;
}
