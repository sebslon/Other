const inputData = [
  "stwórz",
  "sobie",
  "tutaj",
  "więcej",
  "wyrazów",
  "TUTAJ",
  "monkey",
  "donkey",
  "pig",
  "cat",
  "dog",
  "hippo",
  "dollar",
  "bitcoin",
  "blockchain",
  "ethereum",
];

const findPhraseInArray = (array, phrase) => {
  const inputIsNotAnArray = !Array.isArray(array);

  if (inputIsNotAnArray) {
    throw new TypeError(array + " is not an array.");
  }

  const index = array.indexOf(phrase);
  
  if (index === -1) {
    return "There is no such phrase in this array.";
  }

  return [phrase, index];
};
