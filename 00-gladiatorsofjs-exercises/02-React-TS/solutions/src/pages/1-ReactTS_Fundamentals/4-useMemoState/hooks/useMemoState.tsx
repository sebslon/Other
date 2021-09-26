import lodash from "lodash";
import { useCallback, useState } from "react";

type useMemoStateReturnType<T> = [T, (newValue: T) => void];

export const useMemoState = <T,>(
  initialState: T
): useMemoStateReturnType<T> => {
  const [value, setValue] = useState<T>(initialState);

  const memoizedCb = useCallback(
    (newValue: T) => {
      const stateIsTheSame = lodash.isEqual(value, newValue);

      if (!stateIsTheSame) setValue(newValue);
    },
    [value]
  );

  return [value, memoizedCb];
};
