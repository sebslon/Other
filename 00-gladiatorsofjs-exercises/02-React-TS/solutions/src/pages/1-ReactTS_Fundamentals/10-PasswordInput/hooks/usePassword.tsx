import { useEffect, useState } from "react";
import { randomNumberInRange } from "../helpers/randomNumberInRange";

// interface;

export const usePassword = (password: string, onSuccess: () => void) => {
  const [allInputs, setAllInputs] = useState<any[]>([]);
  const [randomIndexes, setRandomIndexes] = useState<any[]>([]);

  useEffect(() => {
    setAllInputs(Array(password.length + randomNumberInRange(2, 5)).fill(0));
    setRandomIndexes(generateRandomInputIndexes(password.length));
  }, []);

  const state = {
    allInputs,
    randomIndexes
  }

  return { state }
};

//todo
function generateRandomInputIndexes(length: number) {
  const maxAvailableInputs = randomNumberInRange(5, length - 1);
  const randomIndexes: number[] = [];

  while (randomIndexes.length < maxAvailableInputs) {
    const randomIndex = randomNumberInRange(0, length - 1);
    if(!randomIndexes.includes(randomIndex)) {
      randomIndexes.push(randomIndex)
    }
  }

  const sortedArr = randomIndexes.sort((a, b) => a - b);
  return sortedArr;
}