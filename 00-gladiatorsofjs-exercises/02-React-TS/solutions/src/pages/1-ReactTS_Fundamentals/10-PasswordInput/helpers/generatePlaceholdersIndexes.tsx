import { randomNumberInRange } from "./randomNumberInRange";

export function generatePlaceholdersIndexes(length: number) {
  const maxAvailablePlaceholders = randomNumberInRange(5, length - 1);
  const randomIndexes: number[] = [];

  while (randomIndexes.length < maxAvailablePlaceholders) {
    const randomIndex = randomNumberInRange(0, length - 1);

    if (!randomIndexes.includes(randomIndex)) {
      randomIndexes.push(randomIndex);
    }
  }

  const sortedIndexes = randomIndexes.sort((a, b) => a - b);

  return sortedIndexes;
}
