const paginateArray = <T>(dataEntries: T[], settings = { actualPageIndex: 0, entriesOnPage: 5 }) => {
  const inputIsNotAnArray = !Array.isArray(dataEntries);

  if (inputIsNotAnArray) {
    throw new TypeError("Given input is not an array.");
  }

  const {actualPageIndex, entriesOnPage} = settings;

  if (actualPageIndex < 0 || !Number.isInteger(actualPageIndex)) {
    throw new Error('actualPageIndex is invalid number.');
  }
  
  if (entriesOnPage < 1 || !Number.isInteger(entriesOnPage)) {
    throw new Error('entriesOnPage is invalid number.');
  }

  const firstElement = actualPageIndex * entriesOnPage;
  const lastElement = firstElement + entriesOnPage;

  const entriesOnSelectedPage = dataEntries.slice(firstElement, lastElement);

  return entriesOnSelectedPage
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
const result = paginateArray(arr, { actualPageIndex: 1, entriesOnPage: 3 });
console.log(result)