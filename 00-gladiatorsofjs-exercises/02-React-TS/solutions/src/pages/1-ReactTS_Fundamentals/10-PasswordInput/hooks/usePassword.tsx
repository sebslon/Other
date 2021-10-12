import { useCallback, useEffect, useState } from "react";

import { generatePlaceholdersIndexes } from "../helpers/generatePlaceholdersIndexes";
import { randomNumberInRange } from "../helpers/randomNumberInRange";

export const usePassword = (password: string, onSuccess: () => void) => {
  const [allInputs, setAllInputs] = useState<(null | string)[]>([]);
  const [passwordIndexes, setPasswordIndexes] = useState<number[]>([]);
  const [message, setMessage] = useState("");

  function inputChangeHandler(inputIndex: number, value: string) {
    setAllInputs(
      allInputs.map((input, idx) => {
        return inputIndex === idx ? value : input;
      })
    );
  }

  const allInputsFilled = useCallback(() => {
    return passwordIndexes.every((index) => Boolean(allInputs[index]));
  }, [allInputs, passwordIndexes]);

  const isPasswordMatching = useCallback(() => {
    if (passwordIndexes.length) {
      const charsCorrect = passwordIndexes.every((idx) => {
        return allInputs[idx] === password[idx];
      });

      return charsCorrect;
    }
    return false;
  }, [allInputs, passwordIndexes, password]);

  useEffect(() => {
    setAllInputs(Array(password.length + randomNumberInRange(2, 5)).fill(null));
    setPasswordIndexes(generatePlaceholdersIndexes(password.length));
  }, [password]);

  useEffect(() => {
    if (isPasswordMatching() && allInputsFilled()) {
      setMessage("Success !");
      onSuccess();
    } else if (allInputsFilled()) {
      setMessage("Wrong password!");
    } else {
      setMessage("Fill in the gaps with password.");
    }
  }, [isPasswordMatching, onSuccess, allInputsFilled]);

  const state = {
    allInputs,
    passwordIndexes,
    message,
  };

  return { state, inputChangeHandler };
};
