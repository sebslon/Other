export type Settings = { actualPageIndex: number; entriesOnPage: number };

const defaultSettings: Settings = {
  actualPageIndex: 0,
  entriesOnPage: 5,
};

export const paginateArray = <T>(
  dataEntries: T[],
  settings: Settings = defaultSettings
): T[] => {
  validateInput(dataEntries, settings);

  const { actualPageIndex, entriesOnPage } = settings;

  const firstElement = actualPageIndex * entriesOnPage;
  const lastElement = firstElement + entriesOnPage;

  const entriesOnSelectedPage = dataEntries.slice(firstElement, lastElement);

  return entriesOnSelectedPage;
};

const validateInput = <T>(dataEntries: T[], settings: Settings) => {
  const inputIsNotAnArray = !Array.isArray(dataEntries);

  const { actualPageIndex, entriesOnPage } = settings;

  if (inputIsNotAnArray) {
    throw new TypeError("Given input is not an array.");
  }

  if (actualPageIndex < 0 || !Number.isInteger(actualPageIndex)) {
    throw new Error("actualPageIndex is invalid number.");
  }

  if (entriesOnPage < 1 || !Number.isInteger(entriesOnPage)) {
    throw new Error("entriesOnPage is invalid number.");
  }
};

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// const result = paginateArray(arr);
// console.log(result);
