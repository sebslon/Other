import { useCallback, useEffect, useState } from "react";
import { randomNumberInRange } from "../helpers/randomNumberInRange";

// interface;

export const usePassword = (password: string, onSuccess: () => void) => {
  const [allInputs, setAllInputs] = useState<(null | string)[]>([]);
  const [passwordPlaceholders, setPasswordPlaceholders] = useState<number[]>([]);

  function inputChangeHandler(inputIndex: number, value: string) {
    setAllInputs(
      allInputs.map((input, idx) => {
        return inputIndex === idx ? value : input;
      })
    );
  }

  const allInputsFilled = useCallback(() => {
    return passwordPlaceholders.every((index) => allInputs[index]);
  }, [allInputs, passwordPlaceholders]);

  const isPasswordMatching = useCallback(() => {
    if (passwordPlaceholders.length) {
      const charsCorrect = passwordPlaceholders.every((idx) => {
        return allInputs[idx] === password[idx];
      });

      return charsCorrect;
    }
    return false;
  }, [allInputs, password, passwordPlaceholders]);

  useEffect(() => {
    setAllInputs(Array(password.length + randomNumberInRange(2, 5)).fill(null));
    setPasswordPlaceholders(generateRandomInputIndexes(password.length));
  }, [password]);

  useEffect(() => {
    if (isPasswordMatching()) {
      onSuccess();
    } else {
      console.log("Not yet");
    }
  }, [isPasswordMatching, onSuccess]);

  const state = {
    allInputs,
    randomIndexes: passwordPlaceholders,
  };

  return { state, inputChangeHandler };
};

//todo
function generateRandomInputIndexes(length: number) {
  const maxAvailableInputs = randomNumberInRange(5, length - 1);
  const randomIndexes: number[] = [];

  while (randomIndexes.length < maxAvailableInputs) {
    const randomIndex = randomNumberInRange(0, length - 1);
    if (!randomIndexes.includes(randomIndex)) {
      randomIndexes.push(randomIndex);
    }
  }

  const sortedArr = randomIndexes.sort((a, b) => a - b);
  return sortedArr;
}
