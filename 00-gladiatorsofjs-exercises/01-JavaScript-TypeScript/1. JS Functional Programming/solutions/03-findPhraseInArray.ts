export const inputData: string[] = [
  "stwórz",
  "sobie",
  "tutaj",
  "więcej",
  "wyrazów",
  "bitels",
  "TUTAJ",
  "monkey",
  "donkey",
  "pig",
  "cat",
  "dog",
  "bittrex",
  "hippo",
  "dollar",
  "bitcoin",
  "blockchain",
  "ethereum",
  "3233123",
];

type Result = [number, string];

export const findPhraseInArray = (array: string[], phrase: string): Result[] => {
  if (array.length === 0) {
    throw new TypeError("Array has no content");
  }

  if (typeof phrase !== "string") {
    throw new TypeError("Passed phrase should be a string");
  }

  const phraseRegExp = new RegExp(`\w*(${phrase})\w*`, "ig");

  const results: Result[] = array.reduce((acc: Result[], element, id) => {
    if (phraseRegExp.test(element)) acc.push([id, element]);
    return acc;
  }, []);

  if (results.length === 0) {
    throw new Error("Given phrase was not found in this array");
  }

  return results;
};
