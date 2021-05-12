export const validateInput = (input: any[], callback: any) => {
  const inputIsNotAnArray = !Array.isArray(input);

  if (inputIsNotAnArray) {
    throw new TypeError("Given input is not an array.");
  }

  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function.");
  }
};

export const forEachFn = <T>(
  array: T[],
  callback: (element: T, index: number, array: T[]) => void
) => {
  validateInput(array, callback);
  const workArray = [...array];

  for (const index in workArray) {
    const id = parseInt(index);
    callback(workArray[id], id, workArray);
  }
};

export const mapFn = <T>(
  array: T[],
  callback: (element: T, index: number, array: T[]) => unknown
): unknown[] => {
  validateInput(array, callback);

  const workArray = [...array];
  const result: unknown[] = [];

  for (const index in workArray) {
    const id = parseInt(index);
    result.push(callback(workArray[id], id, workArray));
  }
  return result;
};

export const entriesFn = <T>(array: T[]): IterableIterator<T> => {
  const workArray = [...array];

  return workArray[Symbol.iterator]();
};

export const filterFn = <T>(
  array: T[],
  callback: (value: T, index: number, array: T[]) => T[]
): T[] => {
  validateInput(array, callback);

  const workArray = [...array];
  const result = [];

  for (const index in workArray) {
    const id = parseInt(index);
    if (callback(workArray[id], id, workArray)) {
      result.push(workArray[id]);
    }
  }

  return result;
};

export const everyFn = <T>(
  array: T[],
  callback: (value: T, index: number, array: T[]) => boolean
): boolean => {
  validateInput(array, callback);

  const workArray = [...array];

  for (const index in workArray) {
    const id = parseInt(index);

    if (!callback(workArray[id], id, workArray)) {
      return false;
    }
  }

  return true;
};

export const someFn = <T>(
  array: T[],
  callback: (value: T, index: number, array: T[]) => boolean
): boolean => {
  validateInput(array, callback);

  const workArray = [...array];

  for (const index in workArray) {
    const id = parseInt(index);

    if (callback(workArray[id], id, workArray)) {
      return true;
    }
  }

  return false;
};

export const reduceFn = <T>(
  array: T[],
  callback: (accumulator: T, currentValue: T, index: number, array: T[]) => T,
  initial: T
): T => {
  validateInput(array, callback);

  if (array.length === 0 && !initial)
    throw new TypeError("Reduce of empty array with no initial value");

  const workArray = [...array];
  let accumulator = initial ? initial : workArray[0];

  for (const index in workArray) {
    let id = parseInt(index);
    accumulator = callback(accumulator, workArray[id], id, workArray);
  }

  return accumulator;
};
