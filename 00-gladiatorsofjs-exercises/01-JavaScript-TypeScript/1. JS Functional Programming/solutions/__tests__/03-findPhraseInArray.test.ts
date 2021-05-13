//@ts-nocheck

import { findPhraseInArray, inputData } from "../03-findPhraseInArray";

describe("findPhraseInArray function", () => {
  const emptyArrayError = "Array has no content";
  const isNotAStringError = "Passed phrase should be a string";
  const notFoundError = "Given phrase was not found in this array";

  it("Should throw error if array is empty", () => {
    expect(() => findPhraseInArray([], "string")).toThrow(
      TypeError(emptyArrayError)
    );
  });

  it("Should throw error if passed phrase is not a string", () => {
    expect(() => findPhraseInArray(["aaa", "bbb", "ccc"], 3)).toThrow(
      TypeError(isNotAStringError)
    );
  });

  it("Should throw error if phrase is not found in the array", () => {
    expect(() => findPhraseInArray(inputData, "aaa")).toThrow(
      Error(notFoundError)
    );
  });

  it("Should return array containing arrays with indexes and full phrases for elements matching phrase", () => {
    const result = findPhraseInArray(inputData, "bit");
    const expectedResult = [
      [5, "bitels"],
      [12, "bittrex"],
      [15, "bitcoin"],
    ];

    expect(result).toEqual(expectedResult);
  });
});
