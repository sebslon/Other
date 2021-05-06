const inputData: string[] = [
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

type Result = [number, string];

const findPhraseInArray = (array: string[], phrase: string): Result[] => {
  if (array.length === 0) throw new Error('Array has no content');

  const phraseRegExp = new RegExp(`\w*(${phrase})\w*`, 'ig');

  const results: Result[] = array.reduce((acc: Result[], element, id) => {
    if(phraseRegExp.test(element)) acc.push([id, element]);
    return acc;
  }, [])
  
  if (results.length === 0) throw new Error('Given phrase was not found in this array');

  return results;
};

const p = findPhraseInArray(inputData, 'block');

console.log(p);
