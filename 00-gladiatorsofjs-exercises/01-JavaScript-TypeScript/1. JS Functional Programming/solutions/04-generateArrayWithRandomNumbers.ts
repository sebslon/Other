import { randomNumberInRange } from "./helpers";

export function generateArrayWithRandomNumbers(
  howManyNumbers = 10,
  min = 1,
  max = 10
): number[] {
  if (!Number.isInteger(howManyNumbers) || howManyNumbers < 0) {
    throw new Error("howManyNumbers argument is invalid.");
  }

  if (
    !Number.isFinite(min * max) ||
    !Number.isInteger(min) ||
    !Number.isInteger(max)
  ) {
    throw new Error("Range numbers are invalid.");
  }

  if (min > max)
    throw new Error(
      "Maximum number in range should be higher or equal to minimum."
    );

  const arrayWithRandomNumbers: number[] = [];

  for (let i = 0; i < howManyNumbers; i++) {
    arrayWithRandomNumbers.push(randomNumberInRange(min, max));
  }

  return arrayWithRandomNumbers;
}

export function generateArrayOfArraysWithRandomNumbers(
  howManyArrays = 10,
  howManyNumbers = 10,
  min = 1,
  max = 10
): number[][] {
  if (!Number.isInteger(howManyArrays) || howManyArrays < 0) {
    throw new Error("howManyArrays argument is invalid.");
  }

  const result: number[][] = [];

  for (let i = 0; i < howManyArrays; i++) {
    result.push(generateArrayWithRandomNumbers(howManyNumbers, min, max));
  }

  return result;
}
