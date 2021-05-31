export const validateInput = (input: any[], callback: any) => {
  const inputIsNotAnArray = !Array.isArray(input);

  if (inputIsNotAnArray) {
    throw new TypeError(input + " is not an array.");
  }

  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function.");
  }
};

type mapCallback<T, U> = (element: T, id: number, arr: T[]) => U;
type filterCallback<T> = (element: T, id: number, arr: T[]) => boolean | T[];
type everyCallback<T> = (element: T, id: number, arr: T[]) => boolean;
type someCallback<T> = (element: T, id: number, arr: T[]) => boolean;

//Array methods with .reduce
export function mapFn<T, U>(array: T[], callback: mapCallback<T, U>): U[] {
  validateInput(array, callback);

  return [...array].reduce((acc: U[], currentValue, index, array) => {
    acc.push(callback(currentValue, index, array));
    return acc;
  }, []);
}

export function filterFn<T>(array: T[], callback: filterCallback<T>): T[] {
  validateInput(array, callback);

  return [...array].reduce((acc: T[], currentValue, index, array) => {
    if (callback(currentValue, index, array)) {
      acc.push(currentValue);
    }
    return acc;
  }, []);
}

export function everyFn<T>(array: T[], callback: everyCallback<T>): boolean {
  validateInput(array, callback);

  return [...array].reduce((acc: boolean, currentValue, index, array) => {
    if (!callback(currentValue, index, array)) {
      acc = false;
    }
    return acc;
  }, true);
}

export function someFn<T>(array: T[], callback: someCallback<T>): boolean {
  validateInput(array, callback);

  return [...array].reduce((acc: boolean, currentValue, index, array) => {
    if (callback(currentValue, index, array)) {
      acc = true;
    }
    return acc;
  }, false);
}

// const res = mapFn([1, 2, 3], (el) => el * 2);
// const res = filterFn([1, 2, 3], (el) => el >= 2);
// const res = everyFn([1, 2, 3], (el) => el >= 0);
// const res = someFn([1, 2, 3], (el) => el >= 4);
// console.log(res);
