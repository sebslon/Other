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
  const arrayContainsOnlyStrings = array.every(el => typeof el === 'string');

  if (inputIsNotAnArray) throw new TypeError(array + " is not an array.");
  if (array.length === 0) throw new Error('Array has no content');
  if (!arrayContainsOnlyStrings) throw new TypeError('Every element in array has to be a string');
  if (typeof phrase !== 'string') throw new TypeError('Phrase must be a string');

  const phraseRegExp = new RegExp(`\w*(${phrase})\w*`, 'ig');

  const result = array.reduce((acc, element, id) => {
    if(phraseRegExp.test(element)) acc.push([id, element]);
    return acc;
  }, [])
  
  if (result.length === 0) throw new Error('Given phrase was not found in this array');

  return result;
};

findPhraseInArray(inputData, 'tut')
